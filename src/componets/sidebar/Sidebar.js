import React from 'react';
import Logo from './AdminLTELogo.png';
import Photo from './user2-160x160.jpg';
import { Link } from 'react-router-dom';

function Sidebar(){


    return (
        <aside className = "main-sidebar sidebar-dark-primary elevation-4">

            <Link to="/" className="brand-link">

                <img src={Logo}  className="brand-image img-circle elevation-3"
                     style={{opacity: .8}} alt="logo" />
                <span className="brand-text font-weight-light">CMS</span>
                
            </Link>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                  <div className="image">
                    <img src={Photo} className="img-circle elevation-2" alt="User" />
                  </div>
                  <div className="info">
                    <Link to="/perfil" className="d-block">Alexander Pierce</Link>
                  </div>
                </div>

                <nav className ="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                        
                        <li className="nav-item">
                          <Link to="/" className="nav-link">
                            <i className="nav-icon fas fa-th"></i>
                            <p>
                              Administradores
                              
                            </p>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/slide" className="nav-link">
                            <i className="nav-icon fas fa-th"></i>
                            <p>
                              Slide
                              
                            </p>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/galeria" className="nav-link">
                            <i className="nav-icon fas fa-th"></i>
                            <p>
                              Galeria
                              
                            </p>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/articulos" className="nav-link">
                            <i className="nav-icon fas fa-th"></i>
                            <p>
                              Articulos
                              
                            </p>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/usuarios" className="nav-link">
                            <i className="nav-icon fas fa-th"></i>
                            <p>
                              Usuarios
                              
                            </p>
                          </Link>
                        </li>
                    </ul>
                </nav>
                
            </div>
        </aside>

    );


}

export default Sidebar;