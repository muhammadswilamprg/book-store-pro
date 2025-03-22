import "./contact.css"
const Contact = () => {
    return (
        <section className="contact">
            <div className="contact-wrapper">
                <div className="contact-item">
                    <div className="contact-item-icon">
                        <i className="bi bi-house-fill"></i>
                        Address
                    </div>
                    <p className="contact-item-text">
                        Egypt-Inside The Pyramids
                    </p>
                </div>
                <div className="contact-item">
                    <div className="contact-item-icon">
                        <i className="bi bi-telephone-fill"></i>
                        Phone
                    </div>
                    <p className="contact-item-text">
                        012-345-678-90
                    </p>
                </div>
                <div className="contact-item">
                    <div className="contact-item-icon">
                        <i className="bi bi-envelope-fill"></i>
                        Email
                    </div>
                    <p className="contact-item-text">
                        mail@maildomain.domain
                    </p>
                </div>
            </div>
            <form onSubmit={e=> e.preventDefault()} className="contact-form">
                <h2 className="contact-form-title">Contact Us</h2>
                <div className="contact-input-wrapper">
                    <input type="text" placeholder="Name: " />
                    <input type="text" placeholder="Subject: " />
                    <input type="text" placeholder="Email: " />
                </div>
                <textarea className="contact-textarea" placeholder="Your Message *" rows="5"></textarea>
                <button className="contact-btn">Send</button>
            </form>
        </section>
    );
}
 
export default Contact;