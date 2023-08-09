import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="v7_60">
      <div className="image-container">
        <div className="color-layer"></div>
        <div className="v8_74"></div>
      </div>
      <div className="v8_75"></div>
      <span className="v8_97">HR Management Platform</span>
      <span className="v8_98">
        Manage all HR Operations from the comfort of your home.
      </span>
      <div className="v8_99"></div>
      <div className="name"></div>
      <div className="v8_76">Welcome</div>
      <div className="v8_77">Register your account</div>
      <div className="v8_78">First Name</div>
      <input type="text" className="v8_87" />
      <div className="v8_86">Last Name</div>
      <input type="text" className="v8_95" />
      <div className="v8_79">E-mail Address</div>
      <input type="email" className="v8_88" />
      <div className="v8_80">Phone Number</div>
      <input type="tel" className="v8_89" />
      <div className="v8_85">Confirm Password</div>
      <input
        type="password"
        className="v8_94"
      />
      <div className="v8_81">Password</div>
      <input type="password" className="v8_90" />
      <input
        type="submit"
        className="v8_96"
        value="Create Account"
      />
      <div className="v8_83">
        Already have an account? Log In
      </div>
    </div>
  );
};

export default LoginPage;
