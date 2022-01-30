import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from "../../../services/Service";
import { Box, Card, Grid, Container, CardActions, CardContent, Button, Typography, Avatar } from '@material-ui/core';
import './ListaPostagem.css';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/user/userReducer';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  let history = useHistory();

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  const tipo = useSelector<UserState, UserState["tipos"]>(
    (state) => state.tipos
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
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])



  var botoes: string
  if (tipo != "admin") {
    botoes = "bottom-none"
  }



  const arrPost = posts.filter(function (ele, pos) {
    return posts.indexOf(ele) === pos;
  })

  arrPost.reverse();


  return (
    <>
      <Container maxWidth="md">
        <Box paddingTop={7} >
          {
            arrPost.map(post => (
              <Box m={2}  >
                <Card >
                  <Box display="flex" justifyContent="center" >
                    <CardContent>
                      <Box display='flex'>
                        <Box>
                          <Avatar alt="Foto de perfil" src={foto} className='avatar' />
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
                      <Box paddingTop={1}>
                        <Typography className='espaco-letras fonte-contato'>
                          Quer falar comigo? Clique no botão :)
                        </Typography>
                      </Box>
                      <Box className='text-decorator-none'>
                      <Link to={'/chat'}>
                        <Button variant='contained' className='btn-atualizar-post' >
                          Chat
                        </Button>
                      </Link>
                      </Box>
                    </CardContent>
                  </Box>
                  <Box display="flex" justifyContent="center">
                    <CardActions>
                      <Box display="flex" justifyContent="center" className={botoes} mb={1.5}>
                        <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                          <Box mx={1}>
                            <Button variant='contained' className='btn-atualizar-post' >
                              atualizar
                            </Button>
                          </Box>
                        </Link>
                        <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                          <Box mx={1}>
                            <Button type='submit' variant='contained' className='btn-deletar-post'>
                              deletar
                            </Button>
                          </Box>
                        </Link>
                      </Box>
                    </CardActions>
                  </Box>
                </Card>
              </Box >
            ))
          }
        </Box>
      </Container>
    </>
  )
}

export default ListaPostagem;