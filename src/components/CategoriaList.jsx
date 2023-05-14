import { Button, Grid } from '@mui/material'
import axios from 'axios'
import React, { Component } from 'react'

export default class CategoriaList extends Component {
    state = {
        results: [],
        
        
      };
    componentDidMount(){
      

    }
  render() {
    return (
      <Grid container spacing={0.5}>
        <Grid item>
            <Button variant="contained" style={{ backgroundColor: '#1976d2', color: '#fff' }}>Mostrar todo</Button>
        </Grid>
        
       
        {this.state.results?.map((cate) => (
            
            <Grid item>
                <Button variant="contained" style={{ backgroundColor: "#07c80d", color: '#fff' }}>
                    {cate.nombre}
                </Button>
            </Grid>
              
              
            ))}
      </Grid>
    )
  }
}
