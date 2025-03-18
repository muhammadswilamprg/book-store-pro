const Navbar = ({ toggle, setToggle }) => {
    return (
        <nav style={{left: toggle && "0"}} className="navbar">
            <ul className="nav-links">
                <li onClick={() => setToggle(false)} className="nav-link">Home</li>
                <li onClick={() => setToggle(false)} className="nav-link">Authors</li>
                <li onClick={() => setToggle(false)} className="nav-link">About Us</li>
                <li onClick={() => setToggle(false)} className="nav-link">Contact Us</li>
                <li onClick={() => setToggle(false)} className="nav-link">Register</li>

            </ul>
        </nav>
    );
}
 
export default Navbar;