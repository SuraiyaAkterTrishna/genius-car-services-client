import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }
    const handleRegister = event => {
        event.preventDefault();
        console.log(event.target.email.value);
    }
    return (
        <div className='register-form'>
            <h1 className='text-primary' style={{textAlign: 'center'}}>Register Now</h1>
            <form onSubmit={handleRegister} action="">
                <input type="text" name="name" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your Email'/>
                <input type="password" name="password" id="" placeholder='Your Password' />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className="text-danger text-decoration-none" onClick={navigateLogin}>Login Now.</Link> </p>
        </div>
    );
};

export default Register;