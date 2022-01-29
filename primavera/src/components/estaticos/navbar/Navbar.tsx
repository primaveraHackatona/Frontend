import { AppBar, Box, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <AppBar position="static" id="navegacao">
                <Toolbar variant="dense" >
                    <Box mx={1}>
                        <img src="" alt="logo" />
                    </Box>
                    <Box style={{ flexGrow: 1 }} >
                        <Link to='/home' className="text-decorator-none">
                            <h2>
                                Primavera
                            </ h2>
                        </Link>
                    </Box>
                    <Box display="flex">
                        <Box mx={1} className='cursor'>
                            <Link to='/home' className="text-decorator-none">
                                <h3>
                                    Home
                                </h3>
                            </Link>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Link to='/cadastroUsuaria' className="text-decorator-none">
                                <h3>
                                    Cadastre-se
                                </h3>
                            </Link>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Link to='/login' className='text-decorator-none'>
                                <h3>
                                    Entrar
                                </h3>
                            </Link>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;
