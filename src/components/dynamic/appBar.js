import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';


export default function Appbar() {
  let history = useHistory();
  function navig(){
    history.push({
      pathname: '/'
  });
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{"text-align":"center","padding":"20px 0"}}>
        <Toolbar>
          <Link  to="/" style={{ textDecoration: 'none', color: 'unset' ,textAlign: 'center',margin:"auto" }} >
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} style={{"font-family": 'Lobster Two'}}>
            Lymira
          </Typography>
          </Link>
          
        </Toolbar>
      
      </AppBar>
    </Box>
  );
}