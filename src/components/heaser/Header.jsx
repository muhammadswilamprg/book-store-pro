import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <div className="header-top-menu">
                    <i className="bi bi-list"></i>
                </div>
                <div className="header-top-phone">
                    <i class="bi bi-telephone-fill"></i>
                    123-456-789
                </div>
                <div className="header-top-text">
                    Welcome To Online Book Store Pro
                </div>
                <div className="header-top-link">
                    <i className="bi bi-person-fill"></i>
                    login
                </div>
            </div>
            <div className="header-middle"></div>
        </header>
    );
}
 
export default Header;