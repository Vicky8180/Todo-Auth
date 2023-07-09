import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';




export default function Cardd() {

const BBox= styled(Box)`
width:500px;
height:100px;
`

  return (
    <BBox>
   <React.Fragment> 
      <CssBaseline />
    
      <GlobalStyles
        styles={(theme) => ({
          body: { backgroundColor: theme.palette.background.paper },
        })}
      />
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
           
            <Typography variant="h5" color="inherit" component="div">
              App bar yaha heading rahega 
            </Typography>
          </Toolbar>
        </AppBar>
        <Fab
          color="secondary"
          sx={{
            position: 'absolute',
            bottom: (theme) => theme.spacing(49),
            right: (theme) => theme.spacing(3),
          }}
        >
          <AddIcon />
        </Fab>
        <Button
        variant="contained" color ="success"
        
          sx={{
            position:'fixed',
            bottom: (theme) => theme.spacing(49),
            right: (theme) => theme.spacing(14),
          }}
        >
          <AddIcon />
        </Button>
       
      </div>
     </React.Fragment> 
     </BBox>
  );
}
