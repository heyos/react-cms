import React from 'react';
import { Link } from 'react-router-dom';


export default function Error404(){


    return (

        <div className = "content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                  <div className="row mb-2">
                    <div className="col-sm-6">
                      <h1 className="m-0 text-dark">404 Error</h1>
                    </div>
                    <div className="col-sm-6">
                      <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#/">Home</a></li>
                        <li className="breadcrumb-item active">Starter Page</li>
                      </ol>
                    </div>
                  </div>
                </div>
            </div>

            <div className="content">
                <div class="error-page">
                    <h2 className="headline text-warning"> 404</h2>

                    <div className="error-content">
                      <h3><i className="fas fa-exclamation-triangle text-warning"></i> Oops! Page not found.</h3>

                      <p>
                        We could not find the page you were looking for.
                        Meanwhile, you may <Link to ="/">return to dashboard</Link> or try using the search form.
                      </p>

                      
                    </div>
                </div>
            </div>
        </div>

    );
}