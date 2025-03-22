import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "./forms.css"
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (email.trim() === "") return toast.error("Email is required");
        if (password.trim() === "") return toast.error("password is required");
    }

    const showPasswordHandler = () => {
        setShowPassword(prev => !prev)
    }
    return (
        <section className="form-wrapper">
            <ToastContainer />
            <h1 className="form-title">Login with your account</h1>
            <form onSubmit={formSubmitHandler} className="form">
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email :"
                />
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}                    
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                />
                {showPassword ? (
                    <i onClick={showPasswordHandler} className="bi bi-eye-slash-fill show-password-icon"></i>
                ) : (
                    <i onClick={showPasswordHandler} className="bi bi-eye-fill show-password-icon"></i>
                )}
                
                <button className="form-btn">Login</button>
            </form>
            <div className="form-footer">
                Don't have account?{"  "}
                <Link to="/register" className="forms-link"> Register</Link>
            </div>
        </section>
    );
}
 
export default Login;