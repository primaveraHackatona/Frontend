import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuaria from './pages/cadastroUsuaria/CadastroUsuaria';
import Feed from './pages/feed/Feed';
import ChatPage from './chatprimavera/pages/chat';

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

          <Route path='/feed'>
            <Feed />
          </Route>

          <Route path='/chat'>
            <ChatPage />
          </Route>      

        </Switch>
        <Footer />
      </Router >
    </>
  );
}

export default App;
