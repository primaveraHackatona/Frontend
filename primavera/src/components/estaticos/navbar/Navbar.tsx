import { AppBar, Box, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <AppBar position="static" id="navegacao">
                <Toolbar variant="dense" >
                    <Box mx={1}>
                        <img src="https://media.discordapp.net/attachments/936380315709091900/937084833123958805/user.png?width=473&height=473" alt="logo" className='logo' />
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
