import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Grid, Box, Typography } from "@material-ui/core";
import './Footer.css';


function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="box1" >
                        <Box display='flex' alignItems='center' justifyContent='center' >

                        <a href="https://github.com/primaveraHackatona" target="_blank">
                            <FacebookIcon className='redes' />
                        </a>
                        <a href="https://github.com/primaveraHackatona" target="_blank">
                            <GitHubIcon className='redes' />
                        </a>
                        <a href="https://github.com/primaveraHackatona" target="_blank">
                            <InstagramIcon className='redes' />
                        </a>
                    </Box>
                    </Box>

                    <Box className='box2'>
                        <Box paddingTop={2}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© Projeto Primavera - Hacatona 2022  Todos os direitos reservados</Typography>
                        </Box>

                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;