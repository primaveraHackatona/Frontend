import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';

export default function ChatPage() {
    const [mensagem, setMensagem] = React.useState('');
    const [listaDeMensagens, setListaDeMensagens] = React.useState([]);

    function handleNovaMensagem(novaMensagem) {
        const mensagem = {
            id: listaDeMensagens.length + 1,
            de: 'Me',
            texto: novaMensagem,
        };

        setListaDeMensagens([
            mensagem,
            ...listaDeMensagens,
        ]);
        setMensagem('');
    }

    return ( <
        Box styleSheet = {
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffd6f1',
                backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundBlendMode: 'multiply',
                color: '#A6A6A6'
            }
        } >
        <
        Box styleSheet = {
            {
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                backgroundColor: '#ffd6f1',
                height: '100%',
                maxWidth: '95%',
                maxHeight: '95vh',
                padding: '32px',
            }
        } >
        <
        Header / >
        <
        Box styleSheet = {
            {
                position: 'relative',
                display: 'flex',
                flex: 1,
                height: '80%',
                backgroundColor: '#FFFFFF',
                flexDirection: 'column',
                borderRadius: '5px',
                padding: '16px',
            }
        } >
        <
        MessageList mensagens = { listaDeMensagens }
        /> {} <
        Box as = "form"
        styleSheet = {
            {
                display: 'flex',
                alignItems: 'center',
            }
        } >
        <
        TextField value = { mensagem }
        onChange = {
            (event) => {
                const valor = event.target.value;
                setMensagem(valor);
            }
        }
        onKeyPress = {
            (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    handleNovaMensagem(mensagem);
                }
            }
        }
        placeholder = "Insira sua mensagem aqui..."
        type = "textarea"
        styleSheet = {
            {
                width: '100%',
                border: '0',
                resize: 'none',
                borderRadius: '5px',
                padding: '6px 8px',
                backgroundColor: '#F2F2F2',
                marginRight: '12px',
                color: '#000000',
            }
        }
        /> < /
        Box > <
        /Box> < /
        Box > <
        /Box>
    )
}

function Header() {
    return ( <
        >
        <
        Box styleSheet = {
            { width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }
        } >
        <
        Text variant = 'heading5' >
        Chat <
        /Text> <
        Button variant = 'tertiary'
        colorVariant = 'neutral'
        label = 'Logout'
        href = "/" /
        >
        <
        /Box> < / >
    )
}

function MessageList(props) {
    console.log(props);
    return ( <
        Box tag = "ul"
        styleSheet = {
            {

                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: '#000000',
                marginBottom: '16px',
            }
        } > {
            props.mensagens.map((mensagem) => {
                return ( <
                    Text key = { mensagem.id }
                    tag = "li"
                    styleSheet = {
                        {
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            hover: {
                                backgroundColor: '#9CD9D3',
                            }
                        }
                    } >
                    <
                    Box styleSheet = {
                        {
                            marginBottom: '8px',
                        }
                    } >
                    <
                    Image styleSheet = {
                        {
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            display: 'inline-block',
                            marginRight: '8px',
                        }
                    }
                    src = { `https://media.discordapp.net/attachments/936380315709091900/937084833123958805/user.png?width=473&height=473` }
                    /> <
                    Text tag = "strong" > { mensagem.de } <
                    /Text> <
                    Text styleSheet = {
                        {
                            fontSize: '10px',
                            marginLeft: '8px',
                            color: appConfig.theme.colors.neutrals[300],
                        }
                    }
                    tag = "span" > {
                        (new Date().toLocaleDateString())
                    } <
                    /Text> < /
                    Box > { mensagem.texto } <
                    /Text>
                );
            })
        } <
        /Box>
    )
}