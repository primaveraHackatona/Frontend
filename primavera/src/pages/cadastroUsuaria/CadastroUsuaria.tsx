import React, { ChangeEvent, useState } from 'react';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import './CadastroUsuaria.css';
import User from '../../models/User';

function CadastroUsuaria() {

    let history = useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id !== 0) {
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
        if (confirmarSenha === user.senha) {
            CadastroUsuaria(`/usuarios/cadastrar`, user, setUserResult)
            alert('Usuario cadastrado com sucesso')
        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <>
            <Grid container justifyContent='center' >
                <Grid item xs={12} >
                    <Box display="flex" justifyContent="center" alignItems="center" style={{ opacity: 1 }}>
                        <Box marginTop={12} paddingLeft={4} paddingRight={4} justifyContent="center" alignItems="center">
                            <Box marginY={6}>
                                <h1 className="txtCadastro" >
                                    Cadastro
                                </ h1>
                                <form >
                                    <Box >
                                        <TextField id='nome' label='Nome' variant='standard' name='nome' margin='normal' fullWidth />
                                    </Box>
                                    <Box  >
                                        <TextField id='usuario' label='Usuário' variant='standard' name='usuario' margin='normal' fullWidth />
                                    </Box >
                                    <Box  >
                                        <TextField id='fotoPerfil' label='url: Foto Perfil' variant='standard' name='fotoPerfil' margin='normal' fullWidth />
                                    </Box >
                                    <Box >
                                        <TextField id='senha' label='Senha' variant='standard' name='senha' margin='normal' type='password' fullWidth />
                                    </Box >
                                    <Box  >
                                        <TextField id='confirmarSenha' label='Confirmar Senha' variant='standard' name='confirmarSenha' margin='normal' type='password' fullWidth />
                                    </Box >
                                    <Box display='flex' justifyContent='center' marginTop={2} textAlign='center'>
                                        <Link to='/login' className='text-decorator-none'>
                                            <Button variant='contained' className='botaoCancelar'>
                                                Cancelar
                                            </Button>
                                        </Link>
                                        <Button type='submit' variant='contained' className='botaoCadastro'>
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
            </Grid >
        </>
    );
}

export default CadastroUsuaria;
