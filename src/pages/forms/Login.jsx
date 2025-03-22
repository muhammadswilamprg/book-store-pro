import { Link } from "react-router-dom";
import "./forms.css"

const Login = () => {
    return (
        <section className="form-wrapper">
            <h1 className="form-title">Login with your account</h1>
            <form className="from">
                <input type="email" placeholder="Email :" />
                <input type="password" placeholder="Password" />
                <button className="form-btn">Login</button>
            </form>
            <div className="form-footer">
                Don't have account ?
                <Link to="/register" className="forms-link">Register</Link>
            </div>
        </section>
    );
}
 
export default Login;