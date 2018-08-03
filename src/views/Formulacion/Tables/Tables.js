
import React, { Component } from 'react';

// import ListaObjetivos from '../Tables/ListaObjetivos';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  Input,
  Label,
  Row,
  Table,
  FormGroup,
  PaginationItem,
  PaginationLink,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
 

} from 'reactstrap';
import ReporteObjetivo from './ReporteObjetivo';
const tdStyle = {
  fontSize: '0.9em'
}

class Tables extends React.Component {
    constructor(props){
      super(props) 
        this.state = {
          data: [],
          data1: [],
          mostrar:[],
          objetivos:[],
          showResults: false
        };
        this.mostrarLista = this.mostrarLista.bind(this)
      }

async componentDidMount() {
      try {
        const respuesta = await fetch('http://localhost:8000/v1/ListaFormularios/');
        const data = await respuesta.json();
        const respuesta1 = await fetch('http://localhost:8000/v1/ListaObjetivosGestion/');
        const data1 = await respuesta1.json();

        this.setState({
          data,
          data1,
          
        });
      } catch (e) {
        console.log(e);
      }
    }

    mostrarLista(idF){
       console.log("hola")
      // {this.state.data1.map(function(item, key) {
      //   if(idF===item.Formularios){
          
      //   }
      // })}
    }
    render() {
      return (
        <div>
          {this.state.data.map((u)=> {
            return(
              <Card>
                <CardHeader>
                  <h3>Formulario N° {u.id}</h3>
                  </CardHeader>
                <Table responsive>
                        <tbody>  
                          <tr>
                            <th></th>
                            <th></th>
                          <th>Gestion</th>
                          <th>Fecha</th>
                          </tr>
                         <tr key = {u.id}>
                              <td style={{maxWidth: '50px',border:'0'}}></td>
                              <td style={{maxWidth: '50px',border:'0'}}></td>
                              <td>{u.Gestion}</td>
                              <td>{u.Fecha}</td>
                              <td></td>
                         </tr>
                        
                        <tr>
                          <td></td>
                          <td><b>Codigo</b><br/>429 </td>
                          <td><b>SIGLA    </b><br/>SSULPZ</td>
                          <td><b>NOMBRE DE LA ENTIDAD</b><br/> PROMES</td>
                        </tr>
                        <tr>
                          <th style={{textAlign:'center'}}>CODIGO</th>
                          <th>DESCRIPCION DE OBJETIVOS DE GESTION</th>
                          <th>RESULTADOS</th>
                          <th>BENEFICIARIOS</th>
                        </tr>
                              {this.state.data1.map((u1,i)=> {
                                     if(u.id==u1.Formularios){           
                                return(
                                  <tr key = {u1.id}>
                                  <td style={{textAlign:'center'}}>{i+1}</td>
                                  <td>{u1.Descripcion}</td>
                                  <td>{u1.Resultados}</td>
                                  <td>{u1.Beneficiarios}</td>
                                  </tr>
                                )
                              }   
                              })}
                              <tr>
                              <th style={{textAlign:'center'}}>Responsable Informacion</th>
                              <th>Nombre</th>
                              <th>Cargo</th>
                              <td></td>
                              </tr>
                              <tr>
                              <td></td>
                              <td>{u.ResponsableInformacion.Nombre} {u.ResponsableInformacion.Apellidos}</td>
                              <td>{u.ResponsableInformacion.Cargo.descripcion}</td>
                              <td></td>
                              </tr>

                        </tbody>
                        </Table>
              <CardFooter>
                <Button color="danger" type="button">Editar</Button>  <Button color="success" type="button">Guardar</Button>
              </CardFooter>
              </Card>
                  
            )
            })}

        </div>
      )

     
    }
 
}
export default Tables
