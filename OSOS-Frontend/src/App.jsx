import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/UserProfile";




function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  );
}

export default App;
