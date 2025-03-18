import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-social-media">
                <div className="footer-social-media-text">Follow us on social media</div>
                <div className="footer-social-media-icons">
                    <div className="footer-social-media-icon">
                        <i className="bi bi-instagram"></i>
                    </div>
                    <div className="footer-social-media-icon">
                        <i className="bi bi-facebook"></i>
                    </div>
                    <div className="footer-social-media-icon">
                        <i className="bi bi-youtube"></i>
                    </div>
                    <div className="footer-social-media-icon">
                        <i className="bi bi-twitter"></i>
                    </div>
                    <div className="footer-social-media-icon">
                        <i className="bi bi-whatsapp"></i>
                    </div>
                </div>
            </div>
            <div className="footer-links-wrapper">
                <div className="footer-links-item">
                    <h3 className="footer-links-item-title">Useful links</h3>
                    <ul className="footer-links">
                        <li className="footer-link">Home</li>
                        <li className="footer-link">Authors</li>
                        <li className="footer-link">About Us</li>
                        <li className="footer-link">Contact Us</li>
                        <li className="footer-link">Register</li>
                    </ul>
                </div>
                <div className="footer-links-item">
                    <h3 className="footer-links-item-title">Contact Information</h3>
                    <div className="footer-address-wrapper">
                        <div className="footer-address-item">
                            <i className="bi bi-geo-alt-fill"></i>
                            Egypt- Inside the pyramid 
                        </div>
                        <div className="footer-address-item">
                            <i className="bi bi-telephone-fill"></i>
                            012-345-678-90
                        </div>
                        <div className="footer-address-item">
                            <i className="bi bi-envelope-fill"></i>
                            testemail@test.eg 
                        </div>
                    </div>
                </div>
                <div className="footer-links-item">
                    <h3 className="footer-links-item-title">About Us</h3>
                    <p className="footer-description">
                        Welcome to Memo, where we take our work seriously... but not too seriously.
                        We started this journey with a dream: to make CODING less boring and way more awesome. Some say we succeeded, others are still trying to figure out what we actually do.
                        Our team consists of geniuses, caffeine addicts, and that one person who somehow knows everything about Excel.
                        Our mission? To solve problems, crack jokes, and pretend we know what we're doing (spoiler: we actually do).
                    </p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;