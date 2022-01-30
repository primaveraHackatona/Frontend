import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import CadastroUsuario from './pages/cadastroUsuaria/CadastroUsuario';
import ChatPage from './chatprimavera/pages/chat';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListaTema from './pages/temas/listaTema/ListaTema';
import ListaPostagem from './pages/postagens/listapostagem/ListaPostagem';
import HomeLogin from './pages/HomeLogin/HomeLogin';
import CadastroPost from './pages/postagens/cadastroPost/CadastroPost';
import CadastroTema from './pages/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './pages/postagens/DeletarPostagem/DeletarPostagem';
import DeletarTema from './pages/temas/deletarTema/DeletarTema';
import ListaPostagemUser from './pages/postagens/listapostagemuser/ListaPostagemUser';

function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
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

            <Route path='/homelogin'>
              <HomeLogin />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

            <Route path='/cadastrar'>
              <CadastroUsuario />
            </Route>
            <Route path='/temas'>
              <ListaTema />
            </Route>
            <Route path='/posts'>
              <ListaPostagem />
            </Route>
            <Route exact path='/formularioPostagem'>
              <CadastroPost />
            </Route>
            <Route exact path='/formularioPostagem/:id'>
              <CadastroPost />
            </Route>
            <Route exact path='/formularioTema'>
              <CadastroTema />
            </Route>
            <Route exact path='/formularioTema/:id'>
              <CadastroTema />
            </Route>
            <Route path='/deletarPostagem/:id'>
              <DeletarPostagem />
            </Route>
            <Route path='/deletarTema/:id'>
              <DeletarTema />
            </Route>
            <Route path='/postsuser'>
              <ListaPostagemUser />
            </Route>
            <Route path='/chat'>
              <ChatPage />
            </Route>

          </Switch>
         
        </Router >
      </Provider>
    </>
  );
}

export default App;
