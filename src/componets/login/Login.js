import React from 'react';

export default function Login(){

    return (
        <div className="login-page" style={{ minHeight: "512.391px" }}>

            <div className="login-box">

                <div className="login-logo">

                    <b>CMS</b>

                </div>            

                <div className="card">

                    <div className="card-body login-card-body">

                        <p className="login-box-msg">

                            Llena los campos para iniciar sesión

                        </p>

                        <form >

                            <div className="input-group mb-3">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Usuario"
                                    name="usuario"
                    
                                />

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user"></span>
                                    </div>
                                </div>

                            </div>

                            <div className="input-group mb-3">

                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    name="password"
                                
                                />

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                    
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                            >
                                Ingresar
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
}