import React, { Component } from 'react';
import { render } from 'react-dom';
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
  ModalHeader
} from 'reactstrap';
// import ObjetivoList from '../ObjetivosGestion/ObjetivoList';
import FormObjetivos from '../ObjetivosGestion/FormObjetivo';
// import Cabezera from '../ObjetivosGestion/Cabezera';
var url = 'http://localhost:8000/v1/Registrar/';
var url1 = 'http://localhost:8000/v1/RegistrarForm/';
class ObjetivosGestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objetivos:[],
      Cabezera: [],
      Personal:[],
      Cargos:[],
      formulario:1,
      Descripcion:'',
      Resultados:'',
      Beneficiarios:'',
      Gestion:'',
      Fecha:'',
      ResponsableInformacion:'',
      Cargo:'',
      bandera:false,
     }; 
     this.onFormSubmit = this.onFormSubmit.bind(this)
    //  this.fEditar = this.fEditar.bind(this); //arrglar el editar
  }
  handleOnAddObjetivo (event) {
    /*aqui voy haciendo el preguarado*/
    event.preventDefault();
    let obj = {
      Descripcion: event.target.descripcion.value,
      Resultados: event.target.resultados.value,
      Beneficiarios:event.target.beneficiarios.value,
      Formularios:4,  //arreglar se remplaza al guardar con el id del Formulario
    };
    this.setState({
      objetivos: this.state.objetivos.concat([obj]),
      bandera: true, 
    });
    event.target.reset();
  }
  onFormSubmit(e) {
    if(this.state.objetivos != ''){
    try {
      fetch(url1, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(this.state), // data can be string or {object}!
        headers:{
          'Content-Type': 'application/json',
        }
      }).then(res => {return res.json()})
      .then(resp => {
        /*aqui recorro el estado que me ayuda con el preguardado*/
        this.state.objetivos.map((data, i)=> {
          // alert(data.Descripcion)
          // alert(data.Resultados)
          // alert(data.Beneficiarios)
          // alert(resp.id)
          let data2 = {
            Descripcion: data.Descripcion,
            Resultados:  data.Resultados,
            Beneficiarios: data.Beneficiarios,
            Formularios:resp.id,
        }
        // alert(JSON.stringify(data2))
          try {
            fetch(url, {
              method: 'POST', // or 'PUT'
              body: JSON.stringify(data2), // data can be string or {object}!
              headers:{
                'Content-Type': 'application/json'
              }
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
          } catch (e) {
            console.log(e);
          }
        })
      });
    }
     catch (e) {
      console.log(e);
    }
  }else{
    this.setState({
      bandera: this.state.bandera,
    });
    }
}
async componentDidMount() {
  try {
    const respuesta = await fetch('http://localhost:8000/v1/DatosFormulario/');
    const Cabezera = await respuesta.json();
    const respuesta1 = await fetch('http://localhost:8000/v1/ListaPersonal/');
    const Personal = await respuesta1.json();
    const respuesta2 = await fetch('http://localhost:8000/v1/ListaCargos/');
    const Cargos = await respuesta2.json();
    this.setState({
      Cabezera, //la cabezera de formulario que recibimos de la ruta se muestra aqui,
      Personal,
      Cargos,
    });
  } catch (e) {
    console.log(e);
  }
}
fEditar(i){
  /*aun no funciona*/
  // console.log('remove'+i)
  let data=this.state.objetivos[i];
  console.log(data.Descripcion);
  let cambio=data.Descripcion 
}
fEliminar(i){
  const nuevo=this.state.objetivos.filter(objetivos=>{
    return objetivos !== i
  })
  if(this.state.objetivos.length!=1){
      this.setState({
        objetivos:[...nuevo]
      })
  }
  else{
    this.setState({
      objetivos:[...nuevo],
      bandera:false
    })
  }
}

  render() {
    console.log("estado actual");
    console.log(this.state.bandera);
    console.log(this.state.objetivos);
    // alert(this.state.bandera)
    return (
      <div className="animated fadeIn">
       
        {this.state.Cabezera.map(item => (
          <Row>
            <Col xs="12" md="12">
              <Card>
                <CardHeader>
                  <strong>Objetivos de Gestion</strong>
                </CardHeader>
                  <Form>
                    <CardBody>
                      <FormGroup row>
                        <Col xs="12" md="1">
                          <Label htmlFor="text-input">Codigo</Label>
                        </Col>
                        <Col xs="12" md="2">
                          <Input type="text" id="text-input" name="text-input" value={item.codigo} disabled />
                        </Col>
                        <Col md="6">
                          <Label htmlFor="disabled-input">NOMBRE DE LA ENTIDAD</Label>
                        </Col>
                        <Col xs="12" md="1">
                          <Label htmlFor="text-input">Gestion</Label>
                        </Col> 
                        <Col xs="12" md="2" >
                          <Input 
                            type="number" 
                            id="number-input"
                            name="Gestion"
                            placeholder="gestion"
                            required
                            value={this.state.Gestion}
                            onChange={e => this.setState({ Gestion: e.target.value })}
                          />
                        </Col>   
                      </FormGroup>
                      <FormGroup row>
                        <Col xs="12" md="1">
                          <Label htmlFor="text-input">Sigla</Label>                     
                        </Col>
                        <Col xs="12" md="2">
                          <Input type="text" id="text-input" name="text-input" value={item.sigla} disabled />
                        </Col>
                        <Col xs="12" md="5">
                          <Input type="text" id="disabled-input" name="disabled-input" disabled  value={item.nombre_entidad} align="center" />
                        </Col>
                        <Col md="1">
                          <Label htmlFor="text-input">Fecha</Label>
                        </Col>
                        <Col  md="3">
                          <Input 
                            type="date" 
                            id="date-input" 
                            name="Fecha" 
                            placeholder="Fecha"
                            required
                            value={this.state.Fecha}
                            onChange={e => this.setState({ Fecha: e.target.value })} 
                          />
                        </Col>
                       </FormGroup>
                      {/* <Cabezera/>  */}
                        <Card>
                          <Table responsive>
                          <thead>
                            <tr>
                              <th>Codigo</th>
                              <th>Descripcion</th>
                              <th>Resultado</th>
                              <th>Beneficiario</th>
                              <th>Acciones</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* parte que hace el llenado de un estado  */}
                            {this.state.objetivos.map((u, i)=> {
                              return (
                                <tr key = {i}>
                                  <td style={{maxWidth: '5px', textAlign: 'center'}}>{i+1}</td>
                                  <td style={{maxWidth: '50px'}} >{u.Descripcion} </td>
                                  <td style={{maxWidth: '50px'}}>{u.Resultados}</td>
                                  <td style={{maxWidth: '50px'}}>{u.Beneficiarios}</td>
                                  <td style={{maxWidth: '50px'}}>
                                    {/* <Button onClick={(e)=>this.fEditar(i)} type="button">Editar</Button> */}
                                    <Button onClick={(e)=>this.fEliminar(u)} color="danger" type="button">Eliminar</Button></td>
                                  </tr>
                                     )
                            })}
                             {/* parte que hace el llenado de un estado  */}
                          </tbody>
                          </Table>
                        </Card>
                      <FormObjetivos  onAddObjetivo={this.handleOnAddObjetivo.bind(this)} />
                        <Card>
                          <CardHeader>
                            <strong>Responsable de la Informacion </strong>
                          </CardHeader>
                          <CardBody>
                            <FormGroup row>
                              <Col xs="12" md="3">
                                <Label htmlFor="text-input">Nombre</Label>
                              </Col>
                              <Col xs="12" md="3">
                                <Label htmlFor="text-input">Cargo</Label>
                              </Col>
                              <Col xs="12" md="3">
                                <Label htmlFor="text-input">Firma</Label>
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Col md="3">
                                <Input 
                                  type="select" 
                                  name="Personal" 
                                  id="select" 
                                  required
                                  value={this.state.ResponsableInformacion}
                                  onChange={e => this.setState({ ResponsableInformacion: e.target.value })}
                                >
                                <option value="">Seleccionar</option>
                                {this.state.Personal.map(item1 => (
                                <option value={item1.id}>{item1.Nombre+" "+item1.Apellidos}</option>
                                ))}
                                </Input>
                              </Col>
                              <Col md="3">
                                <Input 
                                type="select" 
                                name="Cargos" 
                                id="select" 
                                required 
                                value={this.state.Cargo}
                                onChange={e => this.setState({ Cargo: e.target.value })}
                                > 
                                <option value="">Seleccionar</option>
                                 {this.state.Cargos.map(item2 => (
                                <option value={item2.id}>{item2.descripcion}</option>
                                  ))}
                              </Input>
                              </Col>
                              <Col xs="12" md="3">
                                <Input type="text" id="text-input" name="text-input" value="" disabled />
                              </Col>
                            </FormGroup>
                          </CardBody>
                        </Card>
                    </CardBody>
                      <CardFooter>
                        <hr/>
                          <FormGroup row>
                            <Col xs="12" md="4">
                            </Col>
                            <Col xs="12" md="4">
                            <Button type="submit" color="success" className="mr-1" disabled={!this.state.bandera} onClick={this.onFormSubmit}>Registrar</Button>
                              {/* <Button type="submit" color="success" className="mr-1" disabled={!this.state.bandera} onClick={this.state.bandera==='' ? this.onFormSubmit:this.toggleWarning}>Registrar</Button> */}
                            <Button type="reset" size="md" color="danger" className="mr-1" onClick = {this.handleClose}>Cancelar</Button>
                            </Col>
                            <Col xs="12" md="4">
                            </Col>
                          </FormGroup>
                     </CardFooter>
                  </Form>
              </Card>  
            </Col>
          </Row>
        ))} 
      </div>
     );
   }
 }

export default ObjetivosGestion;


