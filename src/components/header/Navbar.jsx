import { Link } from "react-router-dom";

const Navbar = ({ toggle, setToggle }) => {
    return (
        <nav style={{left: toggle && "0"}} className="navbar">
            <ul className="nav-links">
                <Link to="/" onClick={() => setToggle(false)} className="nav-link">Home</Link>
                <Link to="/authors" onClick={() => setToggle(false)} className="nav-link">Authors</Link>
                <Link to="/about" onClick={() => setToggle(false)} className="nav-link">About Us</Link>
                <Link to="/contact" onClick={() => setToggle(false)} className="nav-link">Contact Us</Link>
                <Link to="/register" onClick={() => setToggle(false)} className="nav-link">Register</Link>

            </ul>
        </nav>
    );
}
 
export default Navbar;