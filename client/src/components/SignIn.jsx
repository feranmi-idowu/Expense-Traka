import React, { useState } from "react";
import {
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";


import "../index.css";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="loginContainer">

      {/* LEFT ANIMATED SECTION */}
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">

            {/* Animated circles */}
            <div className="floating-circle circle1"></div>
            <div className="floating-circle circle2"></div>
            <div className="floating-circle circle3"></div>
            <div className="floating-circle circle4"></div>

            <h1 className="title">Expense Traka</h1>
            <h4>Smart Invoice Scanning with Total Financial Clarity</h4>
            <hr className="title-line"></hr>
            <div className="hero-card">
              <p>
              Take Complete control of your personal and business finances.
              Sign up or log in to start tracking your financial journey today!
            </p>
            </div>

          </div>
        </div>
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="form-section">
        <div className="form-wrapper">

          <header className="form-header">
            <h2 className="brand-logo-script">Expense Traka</h2>
            <h3 className="form-title">Create your Account</h3>
          </header>

          <form className="login-form">

            {/* EMAIL */}
            <div className="input-group">
              <label>Email</label>

              <div className="input-with-icon">
                <span className="icon-placeholder">
                  <Mail size={20} />
                </span>

                <input
                  className="email-text"
                  type="email"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
            </div>

            {/* PHONE */}
            <div className="input-group">
              <label>Phone Number</label>

              <div className="input-with-icon">
                <span className="icon-placeholder">
                  <Phone size={20} />
                </span>

                <input
                  className="email-text"
                  type="tel"
                  placeholder="0800 0000 000"
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="input-group">
              <label>Password</label>

              <div className="input-with-icon">

                <span className="icon-placeholder">
                  <Lock size={20} />
                </span>

                <input
                  className="email-text"
                  type={showPassword ? "text" : "password"}
                  placeholder="******"
                  required
                />

                <button
                  type="button"
                  className="toggle-password"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <Eye size={20} />
                  ) : (
                    <EyeOff size={20} />
                  )}
                </button>

              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="input-group">
              <label>Confirm Password</label>

              <div className="input-with-icon">

                <span className="icon-placeholder">
                  <Lock size={20} />
                </span>

                <input
                  className="email-text"
                  type={showPassword ? "text" : "password"}
                  placeholder="******"
                  required
                />

                <button
                  type="button"
                  className="toggle-password"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <Eye size={20} />
                  ) : (
                    <EyeOff size={20} />
                  )}
                </button>

              </div>
            </div>

            {/* BUTTON */}
            <div className="btnContainer">
              {/*<Link to="/login">*/}
                <button className="btn1">
                  Continue
                </button>
              {/*</Link>*/}
            </div>

            {/* DIVIDER */}
            <div className="divider">
              <p className="dividerText">
                Or continue with
              </p>
            </div>

            {/* SOCIAL LOGIN */}
            <div className="social-login">

              <button className="btn-social">
                {/*<img
                  className="social-icon"
                  src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                  alt="Google"
                />*/}
                <FcGoogle size={32}  />

                <p>Continue with Google</p>
              </button>

            </div>

            {/* FOOT NOTE */}
            <div className="foot-note">
              Already have an account?

              {/*<Link to="/login" className="foot-link">
                {" "}Sign In
              </Link>*/}
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;