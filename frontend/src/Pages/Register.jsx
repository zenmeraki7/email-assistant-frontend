import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'; // Import CSSTransition
import './Login.css';
import signupImage from '../assets/images/signup.png';

function Register() {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate('/log-in');
  };

  return (
    <div className="auth-container">
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="page"
      >
        <div className="auth-card">
          <div className="auth-left">
            <img src={signupImage} alt="Sign Up" />
          </div>

          <div className="auth-right">
            <h2>Sign Up</h2>
            
            <form>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-control"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="form-control"
                />
              </div>
              
              <button type="submit" className="submit-btn">
                SIGN UP
              </button>
            </form>
            
            <div className="auth-link">
              <p>Already have an account? <a href="#" onClick={handleSignIn}>Sign In</a></p>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Register;
