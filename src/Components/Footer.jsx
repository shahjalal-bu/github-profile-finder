import React from "react";

const Footer = () => {
  return (
        <footer>
          <div className='bottom-details'>
            <div className='bottom_text'>
              <span className='copyright_text'>
                © Shahjalal Mirza
              </span>
              <div className='media-icons'>
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
        </footer>
  );
};

export default Footer;
