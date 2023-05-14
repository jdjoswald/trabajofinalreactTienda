import { Button, Grid, TextField } from '@mui/material'
import React, { Component } from 'react'
import LabelInput from "../css/LabelInput"
import axios from 'axios'
import Select from 'react-select';

export default class ArticuloForm extends Component {4
  state={
      cantidad:0,
      articulo:null,

      result:[],
      categorias:[],
      categoria:null,
      nombre:"",
      cantidadForm:0,
      precio:0,
      descripcion:"",
      imagenbase64:""}
      
      chageHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        // console.log(e.target.name)
    
      };
      componentDidMount(){
        axios.get('https://localhost:7289/api/Articulo')
        .then(response => {
            // Aquí puedes manejar la respuesta de la API
            console.log(response.data);
            this.setState({result:response.data})
        })
        .catch(error => {
            // Aquí puedes manejar el error si ocurre
            console.error(error);
         });
         axios.get('https://localhost:7289/api/Categoria')
        .then(response => {
            // Aquí puedes manejar la respuesta de la API
            console.log(response.data);
            this.setState({categorias:response.data})
        })
        .catch(error => {
            // Aquí puedes manejar el error si ocurre
            console.error(error);
         });

      }

      changeArticulo = (e) => {
        console.log(e);
        this.setState({ articulo: e });
        // console.log(e.target.name)
        //console.log(e.target.value)
      };
      changeCategoria= (e) => {
        console.log(e);
        this.setState({ categoria: e });
        // console.log(e.target.name)
        //console.log(e.target.value)
      };
      handleSubmit1= (e) => {
        e.preventDefault();
        if(this.state.articulo!=null){
          axios
        .put(`https://localhost:7289/api/Articulo/${this.state.articulo.id}/aumentar-cantidad/${this.state.cantidad}`, {
          
         
        })
        .then((response) => {
          console.log(response);
          alert("Artiuclo editado");
          window.location.reload();
          
        })
        .catch((error) => {
          console.log(error);
          alert("Error");
        });
        }
        
      }
      handleSubmit2= (e) => {
        e.preventDefault();
        if(this.state.categoria!=null){
        axios
        .post(`https://localhost:7289/api/Articulo`, {

          nombre: this.state.nombre,
          cantidad: this.state.cantidadForm,
          precio: this.state.precio,
          imagen: "imagenBase64",
          descripcion: this.state.descripcion,
          categoriaId: this.state.categoria.id,
          categoria:{
            id:0,
            nombre:"asdasdsa"
          }
        })
        .then((response) => {
          console.log(response);
          alert("Articulo añadido");
          window.location.reload();
          
        })
        .catch((error) => {
          console.log(error);
          alert("Error");
        });}
        
      }
  chageHandler(){}
  render() {
    const {cantidad, result, articulo, categorias , categoria,cantidadForm,descripcion,precio,nombre}=this.state
    return (
   
      <Grid>
        <Grid item xs={12} textAlign={"center"}>
             <h1>Stock de articulos</h1>
        </Grid>
        <Grid container  xs={12} justifyContent={"center"} >     
          <Grid item xs={12} spacing={1}>
            <form onSubmit={this.handleSubmit1} method="post">
            <Grid  item xs={12}>
              <LabelInput name="Articulo" />
              <Select
                  name="pilotos"
                  options={result}
                  value={articulo}
                  onChange={this.changeArticulo}
                  getOptionLabel={(result) => result.nombre+`(${result.cantidad})`}
                  getOptionValue={(result) => result}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </Grid>
              <Grid item xs={12}>
                <LabelInput name="Cantidad" />
                <TextField
                fullWidth
                value={cantidad}
                onChange={this.chageHandler}
                required
                id="cantidad"
                name="cantidad"
                type='number'/>
              </Grid>
              <br/>
              <Grid item xs={12} justifyContent={"center"}>
              <Button type="submit" variant="contained" style={{ backgroundColor: '#1976d2', color: '#fff' }}>
                Añadir</Button>
              </Grid>
            
            
              
          </form>
          </Grid>    
            

        </Grid>


        <Grid item xs={12} textAlign={"center"}>
          <h1>Añadir  articulos</h1>
        </Grid>
        
        <Grid container xs={12}>
        <Grid item xs={12} spacing={1}>
            <form onSubmit={this.handleSubmit2} method="post">
              
              <Grid item xs={12}>
                <LabelInput name="Nombre" />
                <TextField
                fullWidth
                value={nombre}
                onChange={this.chageHandler}
                required
                id="nombre"
                name="nombre"/>
              </Grid>
              <Grid item xs={12}>
                <LabelInput name="Cantidad" />
                <TextField
                fullWidth
                value={cantidadForm}
                onChange={this.chageHandler}
                required
                id="cantidadForm"
                name="cantidadForm"
                type='number'/>
              </Grid>
              <Grid item xs={12}>
                <LabelInput name="Precio" />
                <TextField
                fullWidth
                value={precio}
                onChange={this.chageHandler}
                required
                id="precio"
                name="precio"
                type='number'/>
              </Grid>
              <Grid item xs={12}>
                <LabelInput name="Descripcion" />
                <TextField
                fullWidth
                value={descripcion}
                onChange={this.chageHandler}
                required
                id="descripcion"
                name="descripcion"/>
              </Grid>
              <Grid  item xs={12}>
              <LabelInput name="Categoria" />
              <Select
                  name="categoria"
                  options={categorias}
                  value={categoria}
                  onChange={this.changeCategoria}
                  getOptionLabel={(categoria) => categoria.nombre}
                  getOptionValue={(categoria) => categoria}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </Grid>


              <Grid item xs={12}>
              <LabelInput name="Imagen" />
                <input type='file'/>
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
