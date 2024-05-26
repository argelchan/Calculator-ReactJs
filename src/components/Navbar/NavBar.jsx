import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
export default NavBar;

function NavBar() {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#101118' }}>
        <Toolbar>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            Calculator
          </Typography>
        </Toolbar>
      </AppBar>  
    );
}