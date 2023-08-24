import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const history = useNavigate();

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email',email);
    console.log('Password',password);
  };

  const handleContinue = () => {
    history('/dashboard');
  };


  return (
    <div className='signup-page'>
      <div className='signup-box'>
        <h1>Sign Up</h1>
        <h1>Create an Account to continue</h1>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <div className='email-input'>
          <input
            type='email'
            id='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <div className='username-input'>
          <input
            type='text'
            id='username'
            placeholder='Choose your preferred username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <div className='password-input'>
            <span>
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className='eye-icon'
              onClick={handlePasswordToggle}
            />
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              placeholder='Choose a strong password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
           
          </div>
        </div>
        <button onClick={handleContinue} className='signup-btn'>Continue</button>
        <div className='login-option'>
            <span>Already have an account? 
                <a href="/">Login 
                <FontAwesomeIcon icon={faArrowRight} />
                </a></span>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
