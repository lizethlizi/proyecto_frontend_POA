import React, { Component } from 'react'
import { render } from 'react-dom';
import Objetivo from '../ObjetivosGestion/Objetivo'
import { Table } from 'reactstrap';
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
} from 'reactstrap';
class ObjetivoList extends Component {
  render () {
    return (
    <Table responsive>
        <thead>
         <tr>
          <th>Codigo</th>
          <th>Descripcion</th>
          <th>Resultado</th>
          <th>Beneficiario</th>
          </tr>
        </thead>
        <tbody>
        {this.props.objetivos.map(function(u, i) {
            return (
               <tr key = {i}>
               <td>{i+1}</td>
               <td>{u.Descripcion}</td>
               <td>{u.Resultados}</td>
               <td>{u.Beneficiarios}</td>
               <Button type="reset" size="md" color="danger" className="mr-1" onClick={this.eliminar.bind(this)}>Cancelar</Button>
               </tr>
            )
         })}
        </tbody>
      </Table>
    );
  }
}
export default ObjetivoList;


