import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from "../../../services/Service";
import { Box, Card, CardActions, CardContent, Button, Typography, Container, Grid, Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import './ListaPostagemUser.css';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/user/userReducer';

function ListaPostagemUser() {
    let history = useHistory();

    const [posts, setPosts] = useState<Postagem[]>([])

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
    const id = useSelector<UserState, UserState["ids"]>(
        (state) => state.ids
    );
    const foto = useSelector<UserState, UserState["fotos"]>(
        (state) => state.fotos
      );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/login")

        }
    }, [token])

    async function getPost() {
        await busca(`/postagens`, setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPost()

    }, [posts.length])

    var botoes: string
    const arrPost = posts.filter(function (ele, pos) {
        if (ele.usuario?.id === id) {
            return posts.indexOf(ele) === pos;
        }
    })

    arrPost.reverse();

    return (
        <>
            <Grid className="bg-postagens-users">
                <Container maxWidth="md">
                    <Box paddingTop={7} paddingLeft={6} paddingRight={6}>
                        {
                            arrPost.map(post => (
                                <Box m={2}  >
                                    <Card >
                                        <Box display="flex" justifyContent="center" >
                                            <CardContent>
                                                <Box display='flex'>
                                                    <Box>
                                                        <Avatar alt="Foto de perfil" src={post.usuario?.foto} className='avatar' />
                                                    </Box>
                                                    <Box paddingTop='4px' paddingLeft={2}>
                                                        <Typography variant="h6" component="h6" className='espaco-letras fonte-titulos'>
                                                            {post.usuario?.nomeCompleto}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Typography variant="h6" component="h6" className='fonte-titulos'>
                                                    {post.titulo}
                                                </Typography>

                                                <Box paddingTop={1}>
                                                    <Typography className='fonte-texto espaco-letras' component="p">
                                                        {post.texto}
                                                    </Typography>
                                                </Box>
                                                <Box paddingTop={1}>
                                                    <img src={post.midia} className='foto-post' />
                                                </Box>
                                                <Typography className="espaco-letras fonte-contato" variant="h6" component="h6">
                                                    Tema: {post.tema?.tema}
                                                </Typography>
                                            </CardContent>
                                        </Box>
                                        <Box display="flex" justifyContent="center" className={botoes} >
                                            <CardActions>
                                                <Box display="flex" justifyContent="center" mb={1.5}>
                                                    <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                                                        <Box mx={1}>
                                                            <Button variant='contained' className='btn-atualizar-post' >
                                                                ATUALIZAR
                                                            </Button>
                                                        </Box>
                                                    </Link>
                                                    <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                                                        <Box mx={1}>
                                                            <Button type='submit' variant='contained' className='btn-deletar-post'>
                                                                DELETAR
                                                            </Button>
                                                        </Box>
                                                    </Link>
                                                </Box>
                                            </CardActions>
                                        </Box>
                                    </Card>
                                </Box>
                            ))
                        }
                    </Box>
                </Container>
            </Grid>
        </>
    )
}

export default ListaPostagemUser;