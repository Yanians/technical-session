

import Container from '@mui/material/Container'

import Box from '@mui/material/Box';


import PropTypes from 'prop-types';

import Main from './main';

function App({ dark }){
    return(
       <Container maxWidth="lg">
            <Box
            sx={{
            mx:'auto',
            width:'100%',
            bgcolor:(theme)=>theme.palette.mode === 'dark'?'#c2185b':'grey.50',
            color:(theme)=>theme.palette.mode === 'dark'?'grey.300':'grey.800',
            border:'1px solid',
            borderColor:(theme)=>theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
            p: 1,
            m: 1,
            borderRadius:2,
            textAlign: 'center',
            fontSize: '0.875rem',
            fontWeight: '700',
            }}
        >
            <Main />
        </Box>
     </Container>
    )
}

App.propTypes ={
    dark:PropTypes.bool,
}

export default App;