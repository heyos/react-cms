import React from 'react';

function Header(){

    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      
            <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" data-widget="pushmenu" href="#/">
                      <i className="fas fa-bars"></i>
                  </a>
                </li>
          
            </ul>

            <ul className="navbar-nav ml-auto">
            
                <li className="nav-item">
                  <a className="nav-link" href="#/">
                      <i className="fas fa-sign-out-alt"></i>
                  </a>
                </li>

            </ul>
        </nav>
    );

}

export default Header;