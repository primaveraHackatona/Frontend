import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Box, Typography, Button, TextField, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './CadastroUsuario.css';

function CadastroUsuario() {

    let history = useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nomeCompleto: '',
            usuario: '',
            foto: '',
            tipo: '',
            senha: '',
            bio: '',
            endereco: ''
        }
    )

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nomeCompleto: '',
            usuario: '',
            foto: '',
            tipo: '',
            senha: '',
            bio: '',
            endereco: ''
        }
    )

    useEffect(() => {
        if (userResult.id != 0) {
            history.push("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            try {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                toast.success('Usuário cadastrado com sucesso!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            } catch (error) {
                toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }

        } else {
            alert('Senhas incompatíveis!')
        }
    }
    return (
        <Grid container className='altura' >
            <Container maxWidth="xs">
                <Grid item xs={12} >
                    <Box display="flex" justifyContent="center" alignItems="center" height="80vh" style={{ opacity: 1 }}>
                        <Box marginTop={12} display="flex" justifyContent="center" alignItems="center">
                            <Box marginY={2}>
                                <Box paddingTop={20}>
                                <h1 className="textoLogin" >
                                    CADASTRAR
                                </h1>
                                </Box>
                                <form onSubmit={onSubmit}>
                                    <TextField value={user.nomeCompleto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nomeCompleto' label='Nome Completo' variant='outlined' name='nomeCompleto' margin='normal' fullWidth />
                                    <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário (E-mail)' variant='outlined' name='usuario' margin='normal' fullWidth />
                                    <TextField value={user.bio} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='bio' label='Bio (um pouco sobre você)' variant='outlined' name='bio' margin='normal' fullWidth />
                                    <TextField value={user.endereco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='endereco' label='Cidade' variant='outlined' name='endereco' margin='normal' fullWidth />
                                    <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='Link da Foto de Perfil (URL)' variant='outlined' name='foto' margin='normal' fullWidth />
                                    <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                                    <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />

                                    <Box my={2} display='flex' justifyContent='center' >
                                        <Link to='/home' className='text-decorator-none'>
                                            <Button variant='contained' className='btnCancelar transitionSize'>
                                                Cancelar
                                            </Button>
                                        </Link>
                                        <Button type='submit' variant='contained' className='btnCadastro transitionSize'>
                                            Cadastrar
                                        </Button>
                                    </Box>
                                </form>
                                <Box display='flex' justifyContent='center' marginTop={2}>
                                    <Box marginRight={1}>
                                        <Typography variant='subtitle1' gutterBottom align='center'>Já possui uma conta?</Typography>
                                    </Box>
                                    <Link to='/login' className='text-decorator-none'>
                                        <Typography variant="subtitle1" gutterBottom align='center' className='txt' >Logue-se</Typography>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Container>
        </Grid>
    );
}

export default CadastroUsuario;
