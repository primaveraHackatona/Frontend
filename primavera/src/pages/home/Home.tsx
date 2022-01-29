import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";

function Home() {

    return (

        <>
            <Grid container justifyContent="center">
                <Box justifyContent="center" alignItems="center" paddingTop={7} >
                    <Typography variant="h2" color="initial" className="titulo">Bem vinda ao Primavera!</Typography>
                </Box>
            </Grid>
        </>
    );
}

export default Home;
