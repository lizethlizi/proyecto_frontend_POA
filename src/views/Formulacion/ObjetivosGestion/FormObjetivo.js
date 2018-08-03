import React, { Component } from 'react';
import { render } from 'react-dom';
// import Tables from '../Tables/Tables';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  Label,
  Row,
  Modal,
  FormGroup,
  Form,
  Table,
} from 'reactstrap';

class FormObjetivo extends Component {
  // limpiar() {
  //   txtAge.focus();
  // }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
           <Card>
              <CardHeader>
                <strong>Registrar Nuevos Objetivos</strong>
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.props.onAddObjetivo}>
                  <FormGroup row>
                    <Col xs="12" md="1">
                      <Label htmlFor="textarea-input">Descripción</Label>
                    </Col>
                    <Col xs="12" md="3">
                      <Input 
                        type="textarea" 
                        name="descripcion"
                        id="textarea-input" 
                        rows="3"
                        placeholder="Contenido"
                        ref="descripcion"
                        required
                        autoFocus
                      />
                    </Col>
                    <Col xs="12" md="1">
                      <Label htmlFor="textarea-input">Resultados <br/>Esperados</Label>
                    </Col>
                    <Col xs="12" md="3">
                      <Input 
                        type="textarea"
                        name="resultados" 
                        id="textarea-input" 
                        rows="3"
                        placeholder="Contenido"
                        required
                      />
                    </Col>
                    <Col xs="12" md="1">
                      <Label htmlFor="select">Beneficiario<br/> ó Destinatarios </Label>
                    </Col>
                    <Col xs="12" md="3">
                      <Input 
                        type="select" 
                        name="beneficiarios" 
                        id="select"
                        required 
                       >
                        <option value="">Seleccionar</option>
                        <option value="Estudiantes en General">Estudiantes General</option>
                        <option value="Estudiantes Afiliados">Estudiantes Afiliados</option>
                      </Input>
                    </Col>
                      <hr/>
                  </FormGroup>
                    <Button type="submit" color="success" className="mr-1">Adicionar</Button>
                    <Button type="reset" size="md" color="danger" className="mr-1" onClick = {this.handleClose}>Cancelar</Button>         
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>  
      </div>
     );
   }
 }
export default FormObjetivo;