import React, { useEffect, ChangeEvent, useState } from "react";
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import './Login.css'
import useLocalStorage from "react-use-localstorage";
import UserLogin from "../../models/UserLogin";
import { login } from "../../services/Service";

function Login() {

    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            bio: '',
            endereco: '',
            foto: '',
            nomeCompleto: '',
            senha: '',
            tipo: '',
            token: '',
            usuario: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token !== '') {
            history.push('/feed')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            alert('Usuário logado com sucesso!')
        } catch (error) {
            alert('Dados do usuário inconsistentes. Erro ao logar!')
        }
    }

    return (
        <>
            <Grid container className="background1" >
                <Grid item xs={12} >
                    <Box display="flex" justifyContent="center" alignItems="center" height="80vh" style={{ opacity: 1 }}>
                        <Box marginTop={12} display="flex" justifyContent="center" alignItems="center">
                            <Box marginY={2}>
                                <h1 className="textoLogin" >
                                    Login
                                </h1>
                                <form onSubmit={onSubmit}>
                                    <Box marginY={4}>
                                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="usuário" variant="outlined" name="usuario" fullWidth />
                                    </Box>
                                    <Box marginY={4} >
                                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="senha" variant="outlined" name="senha" type='password' fullWidth />
                                    </Box >
                                    <Box marginLeft={11}>
                                        <Button type="submit" variant="contained" color="secondary" className="botao1 btn-grad">
                                            Login
                                        </Button>
                                    </Box>
                                </form>
                                <Box display='flex' justifyContent='center' marginTop={2}>
                                    <Box marginRight={1}>
                                        <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                                    </Box>
                                    <Link to='/cadastroUsuaria' className='text-decorator-none'>
                                        <Typography variant="subtitle1" gutterBottom align='center' className='txt' >Cadastre-se</Typography>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Login;
