import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "./forms.css"
import { useState } from "react";

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (email.trim() === "") return toast.error("Email is required");
        if (username.trim() === "") return toast.error("Username is required");
        if (password.trim() === "") return toast.error("password is required");
        if (repeatedPassword !== password) return toast.error("password must matches")
    }

    return (
        <section className="form-wrapper">
            <ToastContainer />
            <h1 className="form-title">Create new account</h1>
            <form onSubmit={formSubmitHandler} className="form">
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email :"
                />
                <input
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                    type="text"
                    placeholder="Username :"
                />
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}                    
                    type="password"
                    placeholder="Password"
                />
                <input
                    value={repeatedPassword}
                    onChange={e => setRepeatedPassword(e.target.value)}                    
                    type="password"
                    placeholder="Re-enter password"
                />

                <button className="form-btn">Register</button>
            </form>
            <div className="form-footer">
                Already have account?{" "}
                <Link to="/login" className="forms-link"> Login</Link>
            </div>
        </section>
    );
}
 
export default Register;