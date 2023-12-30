
import Browse from "../pages/Browse.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import Signin from "../pages/Signin.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GptSearch from "../pages/GptSearch.jsx";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar.js";
const Body = () => {

 const user = useSelector((store) => store.user);

  

  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/gptsearch" element={<GptSearch />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  </Router>
  )
};

export default Body;
