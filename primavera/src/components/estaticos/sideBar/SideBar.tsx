import React from 'react';
import { Paper, Typography, Box} from '@material-ui/core';
import './SideBar.css'

function SideBar() {
    return (
        <>
            <Box display='flex'>
                <Paper className='barra'>
                    <Box mx={1} className='cursor margin' paddingTop={2}>
                        <Typography variant="h6" className='margin'>
                            Home
                        </Typography>
                    </Box>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit" className='margin'>
                            Perfil
                        </Typography>
                    </Box>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit" className='margin'>
                            Alguma Coisa
                        </Typography>
                    </Box>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit" className='margin'>
                            Alguma Coisa
                        </Typography>
                    </Box>
                    <Box mx={1} className='cursor margin'>
                        <Typography variant="h6" color="inherit" className='margin'>
                            Logout
                        </Typography>
                    </Box>


                </Paper>
            </Box>
        </>
    );
}

export default SideBar;
