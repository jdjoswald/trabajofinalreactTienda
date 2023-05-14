import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    const {pagina}= this.props
    const navLinkStyle = {
        textDecoration: 'none' 
      };
      
    return (
      <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    <img src="ruta-de-tu-logo" alt="logo" height="40" />
                </Typography>
                <Button color="inherit">   
                    <NavLink style={navLinkStyle} className='App-header-letter' to="/">Inicio</NavLink>
                </Button>
                <Button color="inherit">    
                    <NavLink style={navLinkStyle} className='App-header-letter' to="articulo">Artículos</NavLink>
                </Button>
                <Button color="inherit">
                    <NavLink style={navLinkStyle} className='App-header-letter' to="categoria">Categoría</NavLink>
                </Button>
            </Toolbar>
        </AppBar>
      
      </div>
    )
  }
}
