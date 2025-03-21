import { Link } from "react-router-dom";

const TopHeader = ({ setToggle, toggle }) => {
    const handleToggle = () => {
        setToggle(prev => !prev)
    }
    return ( 
        <div className="header-top">
            <div onClick={handleToggle} className="header-top-menu">
                {toggle ? (
                    <i className="bi bi-x-lg"></i>
                ) : (
                    <i className="bi bi-list"></i>
                )}
            </div>
            <div className="header-top-phone">
                <i className="bi bi-telephone-fill"></i>
                123-456-789
            </div>
            <div className="header-top-text">
                Welcome To Online Book Store Pro
            </div>
            <Link to="/login" className="header-top-link">
                <i className="bi bi-person-fill"></i>
                login
            </Link>
        </div>
    );
}
 
export default TopHeader;