import React from 'react';
import './LoginForm.css';
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import CameraTake from '../CameraTake/CameraTake';

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="" method="post">
                <h1>Login</h1>
                <div className="credential">
                    <div className="left-box">
                        <div className="input-box">
                            <input type="email" placeholder="Email" required name="" id="" />
                            <MdEmail className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required name="" id="" />
                            <FaKey className='icon' />
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" name="" id="" />Remember me</label>
                            <a href="#">Forgot password?</a>
                        </div>
                    </div>
                    <div className="right-box">
                            <CameraTake/>
                    </div>
                </div>
                
                <button type="submit">Login</button>


                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;