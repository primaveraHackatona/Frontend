import React from "react";
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
  return (
      <>
        <Grid container className="background1" >
            <Grid item xs={12} >
                <Box display="flex" justifyContent="center" alignItems="center" height="80vh" style={{ opacity: 1 }}>
                    <Box className="cardLogin" marginTop={12} display="flex" justifyContent="center" alignItems="center">
                        <Box marginY={2}>
                            <h1 className="textoLogin" >
                                Login
                            </h1>
                            <form >
                                <Box marginY={4}>
                                    <TextField id="usuario" label="usuário" variant="outlined" name="usuario" fullWidth />
                                </Box>
                                <Box marginY={4} >
                                    <TextField  id="senha" label="senha" variant="outlined" name="senha" type='password' fullWidth />
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
