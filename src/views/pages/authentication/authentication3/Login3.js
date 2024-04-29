import React, { useState } from 'react';
import './Login3.css';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const togglePassword = () => {
    setShow(!show);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate email
    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else {
      newErrors.email = '';
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else {
      newErrors.password = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, handle form submission here
      console.log('Form data:', formData);
    } else {
      console.log('Form is invalid');
    }
  };

  return (
    <div className='loginSection'>
      <div className='imgSection'>
        <img className="backgroundImg" src='https://static.vecteezy.com/system/resources/previews/005/637/993/non_2x/man-making-work-concept-in-front-of-computer-with-tutorial-free-vector.jpg' alt="logo" />
        <img className='logo' src="../../../../assets/images/App Logo.png" alt='' />
        <h3 className='navhead'>Fieldesk <span className='span-go'>Go</span></h3>
      </div>
      <div className='formSection'>
        <form onSubmit={handleSubmit}>
          <h4>Login</h4>
          <div className='inputWithIcon'>
            <FaEnvelope className='icon' />
            <input
              type='email'
              placeholder='Email'
              style={{ paddingLeft: "30px" }}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <div className="error">{errors.email}</div>}
          <div className='inputWithIcon'>
            <FaLock className='icon' />
            <input
              type={show ? "text" : "password"}
              placeholder='Password'
              style={{ paddingLeft: "30px" }}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {show ? <FaEye className="eye-icon" onClick={togglePassword} /> : <FaEyeSlash onClick={togglePassword} className='eye-icon' />}
          </div>
          {errors.password && <div className="error">{errors.password}</div>}
          <div className='forgotSection'>
            <a href='/forgot'>Forgot password?</a>
          </div>
          <button className='subBtn' type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
