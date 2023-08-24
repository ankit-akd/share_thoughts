import React,  {useState} from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom';

const LoginPage = () => {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const history = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('Email',emailAddress);
        console.log('Password',password);
    };
    const handlePasswordToggle= () =>{
        setShowPassword(!showPassword);
    }

    const handleLogin = () =>{
        if(emailAddress && password){
        history('/dashboard');
        }
    }
   

    return(
        <div className= "login container">
          <div className='login-box'>  
            <h1>Welcome Back</h1>
            <h2>Log into your account</h2>
            <form onSubmit = {handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='email'>Email or Username</label>
                    <div className="email-input">
                     <input 
                        type="email"
                        className='form-control'
                        id="email"
                        placeholder='Enter your email or username'
                        value={emailAddress}
                        onChange={(event) => setEmailAddress(event.target.value)}
                     /> 
                    </div>    
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                        <span className='forgot-password'>Forgot Password?</span>
                    
                    <div className='password-input'>
                    <span>
                        <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        className='eye-icon'
                        onClick={handlePasswordToggle}
                        />
                    </span>
                     <input
                        type={showPassword ? "text" : "password"}                        
                        id="password"
                        placeholder='Enter your Password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                     /> 
                    </div>  
                </div>
                {/* <span className = "toggle-password"
                    onClick={()=>togglePasswordVisibility()}
                >
                    <i className={showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'}></i>
                </span> */}
                
                <button type="submit" className='login-button' onClick={handleLogin}>
                    Login Now
                </button>
                <span className='not-register'>Not registered yet? 
                    <a href="/signup">Register?</a>
                </span>
            </form>
          </div>
        </div>
    );
};
export default LoginPage;
