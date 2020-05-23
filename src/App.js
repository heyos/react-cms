import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './componets/login/Login';

import Header from './componets/header/Header';
import Sidebar from './componets/sidebar/Sidebar';

import Administradores from './componets/contents/administradores/Administradores';
import Articulos from './componets/contents/articulos/Articulos';
import Slide from './componets/contents/slide/Slide';
import Galeria from './componets/contents/galeria/Galeria';
import Usuarios from './componets/contents/usuarios/Usuarios';
import Error404 from './componets/contents/error404/Error404';


function App() {

  const auth = true;

  if(!auth){
    return <Login />;
  }

  return (
    <div className="sidebar-mini">
      <div className = "wrapper">
        <Header/>
        <Sidebar/>
        
        <Switch>
          <Route exact path="/" component={Administradores} />
          <Route exact path="/articulos" component={Articulos} />
          <Route exact path="/slide" component={Slide} />
          <Route exact path="/galeria" component={Galeria} />
          <Route exact path="/usuarios" component={Usuarios} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;