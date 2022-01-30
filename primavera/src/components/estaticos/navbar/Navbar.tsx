import './Navbar.css';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { AppBar, Avatar, Box, Button, Toolbar, Typography } from '@material-ui/core';
import { UserState } from '../../../store/user/userReducer';
import { addName, addTipo, addToken } from '../../../store/user/actions';

function Navbar() {
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
    const name = useSelector<UserState, UserState["names"]>(
        (state) => state.names
    );
    const tipo = useSelector<UserState, UserState["tipos"]>(
        (state) => state.tipos
    );
    const foto = useSelector<UserState, UserState["fotos"]>(
        (state) => state.fotos
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        dispatch(addName(''));
        dispatch(addTipo(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }
    var navbarComponent;
    var cadastrarTema;
    if (tipo == 'admin') {
        cadastrarTema = <Link to="/formularioTema" className="text-decorator-none">
            <Box mx={1} paddingTop={1} fontWeight="bold" className='cursor'>
                <Typography>
                    CADASTRAR TEMA
                </Typography>
            </Box>
        </Link>
    }
    if (token != "") {
        navbarComponent = <AppBar position="static" style={{ backgroundColor: "#F26B9C" }}>
            <Toolbar style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                <Box display='flex'>
                    <Box  paddingLeft={8} className='cursor'>
                        <Link to='/homelogin'>
                            <Box >
                                <img src="https://media.discordapp.net/attachments/936380315709091900/937084833123958805/user.png?width=473&height=473" alt="logo primavera" className='logo' />
                            </Box>
                        </Link>
                    </Box>
                    <Box display="flex" justifyContent="start">
                        {cadastrarTema}
                    </Box>
                </Box>
                <Box display='flex' paddingRight={5}>
                    <Box mx={1} paddingTop={1} className='cursor' onClick={goLogout}>
                        <Typography>
                            SAIR
                        </Typography>

                    </Box>
                    <Link to='/homelogin'>
                        <Avatar alt="Foto de perfil" src={foto} className='avatar' />
                    </Link>
                </Box>

            </Toolbar>
        </AppBar>
    }
    else {
        navbarComponent = <AppBar position="static" style={{ backgroundColor: "#F26B9C" }} >
            <Toolbar style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                <Link to='/home' className='text-decorator-none'>
                    <Box paddingLeft={8}>
                        <Box>
                            <img src="https://media.discordapp.net/attachments/936380315709091900/937084833123958805/user.png?width=473&height=473" alt="logo primavera" className='logo' />
                        </Box>
                    </Box>
                </Link>
                <Box paddingRight={5}>
                    <Link to='/login' className='text-decorator-none'>
                        <Button style={{ color: 'white', fontWeight: "bold" }}>Entrar</Button>
                    </Link>
                    <Link to='/cadastrar' className='text-decorator-none'>
                        <Button style={{ fontWeight: "bold" }} className='btn-cadastre-se'>Cadastre-se</Button>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar >

    }
    return (
        <>
            {navbarComponent}

        </>
    )
}

export default Navbar;
