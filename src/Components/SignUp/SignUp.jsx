import React from 'react';
import '../LoginForm/LoginForm.css';
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import CameraTake from '../CameraTake/CameraTake';

const SignUp = () => {
    return (
        <div className='wrapper'>
            <form action="" method="post">
                <h1>Sign up</h1>
                <div className="credential">
                    <div className="left-box">
                    <div className="input-box">
                            <input type="text" placeholder="Name" required name="" id="" />
                            <MdEmail className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="Email" required name="" id="" />
                            <MdEmail className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required name="" id="" />
                            <FaKey className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Confirm Password" required name="" id="" />
                            <FaKey className='icon' />
                        </div>
                        {/* <div className="remember-forgot">
                            <div className="left">
                            <label><input type="checkbox" name="" id="" />Remember me</label>
                            </div>
                            <div className="right">
                            <a href="#">Forgot password?</a>
                            </div>
                            
                        </div> */}
                    </div>
                    <div className="right-box">
                            <CameraTake/>
                    </div>
                </div>
                
                <button type="submit">Sign Up</button>


                <div className="register-link">
                    <p>Already have an account? <a href=''>Login</a></p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;