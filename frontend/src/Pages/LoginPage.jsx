import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './Login.css';
import signinImage from '../assets/images/signin.avif';

function LoginPage() {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add sign-in logic here
    console.log("Sign In clicked");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <div className="auth-container">
      <CSSTransition in={true} appear={true} timeout={500} classNames="page">
        <div className="auth-card">
          {/* Left Side with Image */}
          <div className="auth-left">
            <img src={signinImage} alt="Sign In Illustration" className="auth-image" />
          </div>

          {/* Right Side with Form */}
          <div className="auth-right">
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="form-control"
                  aria-label="Email Address"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="form-control"
                  aria-label="Password"
                  required
                />
              </div>

              <button type="submit" className="submit-btn" aria-label="Continue to your account">
                CONTINUE
              </button>
            </form>

            <div className="auth-link">
              <p>
                Don't have an account?{' '}
                <a href="#register" onClick={handleSignUp} aria-label="Sign up for a new account">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default LoginPage;
