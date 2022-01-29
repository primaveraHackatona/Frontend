import React from 'react'
import { CardHeader, CardContent, CardActions, Typography, Card, Avatar, IconButton, Button, Link } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MessageIcon from '@material-ui/icons/Message';
import './PostCard.css';
import { useHistory } from 'react-router-dom';

function PostCard() {

    let history = useHistory();

    const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        history.push("/chat")
      };

    return (
        <Card className='card'>

            <CardHeader
                avatar={
                    <Avatar aria-label="">
                        Teste1
                    </Avatar>
                }
                action={
                    <IconButton aria-label="">

                    </IconButton>
                }
                title="Ariana"
                subheader="Lugar ai"

            />
            <CardContent>
                <Typography variant="h5" component="h2">
                    Postagem
                </Typography>
                <Typography variant="body2" component="p">
                    Texto
                </Typography>
                <img src="" alt="" />
                <Typography variant="body2" component="p">
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <Button onClick={handleMouseEvent} variant='contained' className='botaoCadastro'>
                    Fale Comigo!
            </Button>
                <IconButton aria-label='Like'>
                    <FavoriteIcon />
                    <Typography style={{ cursor: 'pointer' }}
                        color='textSecondary'
                        variant='body2'
                    >{'10'}</Typography>
                </IconButton>
                <IconButton aria-label='Comentario'>
                    <MessageIcon />
                    <Typography style={{ cursor: 'pointer' }}
                        color='textSecondary'
                        variant='body2'
                    >{'10'}</Typography>
                </IconButton>
                <IconButton>
                    <BookmarkIcon />
                </IconButton>
            </CardActions>
        </Card >

    );
}

export default PostCard;
