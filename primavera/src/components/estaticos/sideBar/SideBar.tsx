import React from 'react';
import { Paper, Typography, Box} from '@material-ui/core';
import './SideBar.css'
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function SideBar() {
    
    let history = useHistory(); 
    const [token, setToken] = useLocalStorage('token'); 
    function logout() {
        setToken(''); 
        history.push('/login'); 
    }
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
                        <Typography variant="h6" color="inherit" className='margin' onClick={() => logout()}>
                            Logout
                        </Typography>
                    </Box>


                </Paper>
            </Box>
        </>
    );
}

export default SideBar;
