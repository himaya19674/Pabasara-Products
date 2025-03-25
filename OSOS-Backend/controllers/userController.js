const User = require('../models/User');
const bcrypt = require('bcryptjs');

const asyncHandler = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

exports.getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    count: users.length,
    data: users
  });
});

exports.getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  
  if (!user) {
    return res.status(404).json({
      success: false,
      error: 'User not found'
    });
  }

  res.status(200).json({
    success: true,
    data: user
  });
});

exports.createUser = asyncHandler(async (req, res) => {
  console.log('Request body:', req.body); // Debug log to see incoming data
  const { fullName, username, mobile, email, address, password, role } = req.body;

  // Check if required fields are present
  if (!fullName || !username || !mobile || !email || !address || !password) {
    return res.status(400).json({
      success: false,
      error: 'All fields (fullName, username, mobile, email, address, password) are required'
    });
  }

  // Validate fields against frontend regex
  const USER_REG = /^[a-zA-Z0-9-_]{4,24}$/;
  const PWD_REG = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/;
  const MOB_REG = /^0[0-9]{9}$/;
  const NAME_REG = /^[a-zA-Z ]{4,24}$/;
  const EMAIL_REG = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const ADDR_REG = /^[a-zA-Z0-9, ]{4,}$/;

  if (!NAME_REG.test(fullName)) {
    return res.status(400).json({ success: false, error: 'Full name must be 4-24 characters and contain only letters and spaces' });
  }
  if (!USER_REG.test(username)) {
    return res.status(400).json({ success: false, error: 'Username must be 4-24 characters and contain letters, numbers, underscores, or hyphens' });
  }
  if (!MOB_REG.test(mobile)) {
    return res.status(400).json({ success: false, error: 'Mobile number must start with 0 and be 10 digits' });
  }
  if (!EMAIL_REG.test(email)) {
    return res.status(400).json({ success: false, error: 'Invalid email format' });
  }
  if (!ADDR_REG.test(address)) {
    return res.status(400).json({ success: false, error: 'Address must be at least 4 characters and contain letters, numbers, commas, or spaces' });
  }
  if (!PWD_REG.test(password)) {
    return res.status(400).json({ success: false, error: 'Password must be 8-24 characters and include uppercase, lowercase, number, and special character' });
  }

  const userExists = await User.findOne({ $or: [{ username }, { email }] });
  if (userExists) {
    return res.status(400).json({
      success: false,
      error: 'Username or email already exists'
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    fullName,
    username,
    mobile,
    email,
    address,
    password: hashedPassword,
    role: role || 'Buyer'
  });

  res.status(201).json({
    success: true,
    data: user
  });
});

exports.loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({
      success: false,
      error: 'Invalid credentials'
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({
      success: false,
      error: 'Invalid credentials'
    });
  }

  res.status(200).json({
    success: true,
    data: { id: user._id, username: user.username, role: user.role }
  });
});

exports.updateUser = asyncHandler(async (req, res) => {
  const updates = { ...req.body };

  // If password is included in the update, hash it
  if (updates.password) {
    const salt = await bcrypt.genSalt(10);
    updates.password = await bcrypt.hash(updates.password, salt);
  }

  const user = await User.findByIdAndUpdate(req.params.id, updates, {
    new: true,
    runValidators: true
  });

  if (!user) {
    return res.status(404).json({
      success: false,
      error: 'User not found'
    });
  }

  res.status(200).json({
    success: true,
    data: user
  });
});

exports.deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({
      success: false,
      error: 'User not found'
    });
  }

  await user.deleteOne();

  res.status(200).json({
    success: true,
    data: {}
  });
});