import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './Login.css';
import signupImage from '../assets/images/signup.png';

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add sign-up logic here
    console.log("Sign Up submitted");
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate('/log-in');
  };

  return (
    <div className="auth-container">
      <CSSTransition in appear timeout={500} classNames="page">
        <div className="auth-card">
          {/* Left Side with Image */}
          <div className="auth-left">
            <img src={signupImage} alt="Sign Up Illustration" className="auth-image" />
          </div>

          {/* Right Side with Form */}
          <div className="auth-right">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
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

              <div className="form-group">
                <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                <input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  className="form-control"
                  aria-label="Confirm Password"
                  required
                />
              </div>

              <button type="submit" className="submit-btn" aria-label="Complete Registration">
                SIGN UP
              </button>
            </form>

            <div className="auth-link">
              <p>
                Already have an account?{' '}
                <a href="#sign-in" onClick={handleSignIn} aria-label="Navigate to Sign In">
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Register;
