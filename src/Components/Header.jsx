import React from "react";
import logo from "../logo.png";

const Header = () => {
  return (
    <div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 text-center'>
            <img className='logo' src={logo} alt='logo' />
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-6 text-center header-title font-normal'>
            Github Repo Finder And React Code Viewer
            <br />
            <small>by</small>
            <br />
            <h2>Shahjalal Mirza</h2>
            <br />
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='social-container text-center header-title'>
          <div className='ml-5 social-links'>
            <a href='https://www.facebook.com/shahjalal.bu'>
              <i className='fab fa-facebook-f'></i>
            </a>
            
            <a href='https://github.com/shahjalal-bu'>
              <i className='fab fa-github'></i>
            </a>
            <a href='https://www.linkedin.com/in/md-shahjalal-787b531a2/'>
              <i className='fab fa-linkedin-in'></i>
            </a>
            <a href=''>
              <i className='fab fa-instagram'></i>
            </a>
          </div>
          </div>
        </div>
        <div className='row'>
        
        </div>
      </div>
    </div>
  );
};

export default Header;
