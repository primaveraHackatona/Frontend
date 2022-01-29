import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuaria from './pages/cadastroUsuaria/CadastroUsuaria';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch >

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>         

          <Route path='/login'>
            <Login />
          </Route> 

          <Route path='/cadastroUsuaria'>
            <CadastroUsuaria />
          </Route>       

        </Switch>
        <Footer />
      </Router >
    </>
  );
}

export default App;
