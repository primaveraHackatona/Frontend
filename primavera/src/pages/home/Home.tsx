import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";

function Home() {

    return (

        <>
            <Grid container>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography variant="h1" color="initial">Bem vinda ao Primavera!</Typography>
                </Box>
            </Grid>
        </>
    );
}

export default Home;
