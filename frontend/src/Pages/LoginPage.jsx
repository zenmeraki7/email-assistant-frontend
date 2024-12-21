import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'; 
import './Login.css';
import signinImage from '../assets/images/signin.avif';

function LoginPage() {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate('/register');
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
            <img src={signinImage} alt="Sign In" />
          </div>

          <div className="auth-right">
            <h2>Sign In</h2>
            
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
              
              <button type="submit" className="submit-btn">
                CONTINUE
              </button>
            </form>

            <div className="auth-link">
              <p>Don't have an account? <a href="#" onClick={handleSignUp}>Sign Up</a></p>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default LoginPage;