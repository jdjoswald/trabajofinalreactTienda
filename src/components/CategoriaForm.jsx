import { Grid, TextField,Button } from '@mui/material'
import React, { Component } from 'react'
import Select from 'react-select';
import LabelInput from '../css/LabelInput';
import axios from 'axios';




export default class CategoriaForm extends Component {
  state={
    nombre:""
    }
    chageHandler = (e) => {
      this.setState({ [e.target.name]: e.target.value });
      // console.log(e.target.name)
  
    };
    handleSubmit= (e) => {
      e.preventDefault();
      if(this.state.nombre!=""){
        axios
        .post("https://localhost:7289/api/Categoria", {

          nombre: this.state.nombre,
          
        })
        .then((response) => {
          console.log(response);
          alert("Categoria añadida");
          window.location.reload();
          
        })
        .catch((error) => {
          console.log(error);
          alert("Error");
        });}
    }
  render() {
    const {nombre}=this.state

    return (
      <Grid>
        <Grid item xs={12} textAlign={"center"}>
          <h1>Añadir Categoria</h1>
        </Grid>
        <Grid container  xs={12} justifyContent={"center"} >     
          <Grid item xs={12} spacing={1}>
            <form onSubmit={this.handleSubmit} method="post">
            
              <Grid item xs={12}>
                <LabelInput name="nombre" />
                <TextField
                fullWidth
                value={nombre}
                onChange={this.chageHandler}
                required
                id="nombre"
                name="nombre"/>
              </Grid>
              <br/>
              <Grid item xs={12} justifyContent={"center"}>
              <Button type='submit' variant="contained" style={{ backgroundColor: '#1976d2', color: '#fff' }}>
                Añadir</Button>
              </Grid>
            
            
              
          </form>
          </Grid>    
            

        </Grid>

      </Grid>
    )
  }
}
