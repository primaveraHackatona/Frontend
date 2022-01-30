import React, { } from 'react'
import { Typography, Box, Grid, } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Home.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function SobreNos() {
    return (
        <>
            <Grid>
                <Grid xs={12}  >
                    <Grid container justifyContent="center">
                        <Grid item xs={12}>
                            <Box paddingTop={10} alignItems= 'center'>
                                <Box display='flex' alignItems='center' justifyContent='center' >
                                <img src="https://i.imgur.com/dBhQmlU.png" alt="logo primavera" className='logoSobre' />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingRight={7} paddingLeft={7}>
                                <Box >
                                <Typography variant='h3' component='h3' align='center'>
                                    O que é?
                                </Typography>
                                </Box>
                                <Box paddingTop={2}>
                                <Typography className='espaco-letras'>
                                Com o intuito de promover Saúde da Mulher e conectar pessoas, 
                                criamos uma rede social onde as pessoas que precisam de ajuda ou 
                                informação podem entrar e ter contato com profissionais da saúde que 
                                divulgam informações importantes sobre saúde e bem estar, além de se 
                                dispor a ajudar a quem precisa.
                                </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingLeft={7} paddingRight={7}>
                                <Box >
                                <Typography variant='h3' component='h3' align='center'>
                                    Como?
                                </Typography>
                                </Box>
                                <Box paddingTop={2}>
                                <Typography className='espaco-letras'>
                                Contando com o apoio de profissionais da saúde e da população, 
                                o site busca pessoas com intensão de ajudar e pessoas que precisam de ajuda. 
                                É um espaço onde todos podem entrar para procurar informações ou ter contato 
                                com profissionais capacitados que divulgam informações sobre saúde e bem estar, 
                                além de se dispor a ajudar a quem precisa.
                             </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingRight={7} paddingLeft={7}>
                                <Box >
                                <Typography variant='h3' component='h3' align='center'>
                                    Para quem?
                                </Typography>
                                </Box>
                                <Box paddingBottom={12} paddingTop={2}>
                                <Typography className='espaco-letras'>
                                Contando com o apoio de profissionais da saúde e da população, 
                                o site busca pessoas com intensão de ajudar e pessoas que precisam de ajuda. 
                                É um espaço onde todos podem entrar para procurar informações ou ter contato 
                                com profissionais capacitados que divulgam informações sobre saúde e bem estar, 
                                além de se dispor a ajudar a quem precisa.
                                </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingLeft={7} paddingRight={7}>
                                <Box >
                                <Typography variant='h3' component='h3' align='center'>
                                    Objetivos
                                </Typography>
                                </Box>
                                <Box paddingBottom={12} paddingTop={2}>
                                <Typography className='espaco-letras'>
                                Incentivar a participação ativa da população e de profissionais da 
                                área da saúde que podem trazer informações e até se dispor a dar suporte 
                                e tratamento as pessoas que precisam; Identificar possíveis parceiros para 
                                essa causa; Colaboração das pessoas sem fins lucrativos; 
                                </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item xs={6} >
                        <Box paddingBottom={7} >
                            <Typography variant='h3' component='h3' align='center' className='box-texto'>
                                Quem fez a primavera?
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container xs={12} justifyContent='center' alignItems='center' >
                <Box justifyContent="center" alignItems="center">
                    <Box  justifyContent="center" alignItems="center" >
                            <img className='box-fotos' src="https://i.imgur.com/qukKYZm.jpg" alt="Dev Juliana" />
                            </Box>
                            <Box >
                                <Typography variant='h5' component='h5' align='center'>
                                    Juliana Macedo
                                </Typography>
                                <Typography align='center'>
                                    Desenvolvedora Full Stack 
                                </Typography>
                                <Typography align='center'>
                                    Ciências e Humanidades
                                </Typography>
                            </Box>
                        <Box alignItems="center" justifyContent="center"  className='box-icones' >
                            <a href=" https://github.com/julianacsmacedo" target="_blank">
                                <GitHubIcon className='iconeGithub' />
                            </a>
                            <a href=" https://www.linkedin.com/in/juliana-cs-macedo/" target="_blank">
                                <LinkedInIcon className='iconeLinkedin' />
                            </a>
                        </Box>
                    
                    </Box>
                    <Box>
                    <Box justifyContent="center" alignItems="center">
                        <img className='box-fotos' src="https://i.imgur.com/clh8TOd.jpg" alt="Dev Maria" />
                    </Box>

                    <Box >
                                <Typography variant='h5' component='h5' align='center'>
                                    Maria Carolina S. N. Xavier
                                </Typography>
                                <Typography align='center'>
                                    Desenvolvedor Full Stack 
                                </Typography>
                                <Typography align='center'>
                                    Design Gráfico
                                </Typography>
                            </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones' >

                            <a href="https://github.com/mcsnsx" target="_blank">
                                <GitHubIcon className='iconeGithub' />
                            </a>
                            <a href="https://www.linkedin.com/in/maria-carolina-s-n-xavier-05340b191/" target="_blank">
                                <LinkedInIcon className='iconeLinkedin' />
                            </a>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                        <img className='box-fotos' src="https://i.imgur.com/u8VuNA2.jpg" alt="Dev Talita" />
                        </Box>

                        <Box >
                                <Typography variant='h5' component='h5' align='center'>
                                    Talita Ribeiro
                                </Typography>
                                <Typography align='center'>
                                    Desenvolvedor Full Stack 
                                </Typography>
                                <Typography align='center'>
                                    Web Design
                                </Typography>
                            </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>

                            <a href=" https://github.com/talitarribeiro" target="_blank">
                                <GitHubIcon className='iconeGithub' />
                            </a>
                            <a href="https://www.linkedin.com/in/talita-ribeiro-b5a105186/" target="_blank">
                                <LinkedInIcon className='iconeLinkedin' />
                            </a>
                        </Box>
                    </Box>
                    
                    <Box>
                        <Box>
                        <img className='box-fotos' src="https://i.imgur.com/LKzPPf9.jpg" alt="Dev Thaís" />
                        </Box>

                        <Box >
                                <Typography variant='h5' component='h5' align='center'>
                                    Thaís Oliveira
                                </Typography>
                                <Typography align='center'>
                                    Desenvolvedora Full Stack 
                                </Typography>
                                <Typography align='center'>
                                    Engenheira de Produção
                                </Typography>
                            </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>

                            <a href=" https://github.com/tholivera" target="_blank">
                                <GitHubIcon className='iconeGithub' />
                            </a>
                            <a href=" https://www.linkedin.com/in/thais-oliveira-2341a0147/" target="_blank">
                                <LinkedInIcon className='iconeLinkedin' />
                            </a>
                        </Box>
                    </Box>                    
                         
                </Grid>
            </Grid>
        </>
    );
}

export default SobreNos;