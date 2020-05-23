import React from 'react';


export default function Usuarios(){

    return (
        <div className = "content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                  <div className="row mb-2">
                    <div className="col-sm-6">
                      <h1 className="m-0 text-dark">Usuarios</h1>
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
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                             <div className="card card-primary card-outline">
                                 <div className="card-header">
                                     <h5 className="m-0">Featured</h5>
                                 </div>

                                 <div className="card-body">
                                     <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card's
                                        content.
                                      </p>
                                      <a href="#/" className="card-link">Card link</a>
                                 </div>
                                     
                             </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    );
}