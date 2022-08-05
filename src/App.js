import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Post from "./Pages/Post";
import LogIn from "./Pages/LogIn";
import Api from "./api";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./Protected";

const App = () => {
  return (
    <div>
      <div className="Navbar">
        <div className="align">
          <Link className="single_nav" to="Home">
            Home
          </Link>
          <Link className="single_nav" to="About">
            {" "}
            About{" "}
          </Link>
          <Link className="single_nav" to="Contact">
            {" "}
            Contact{" "}
          </Link>
          <Link className="single_nav" to="LogIn">
            {" "}
            LogIn{" "}
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post" element={<Post />} />
        <Route path="/api" element={<Api />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/LogIn" element={<LogIn />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
