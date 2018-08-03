import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class ListaObjetivos extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      products: []
    };
  }
  
  componentDidMount () {
    let products = [
      {
        name: 'TV Samsung Curve',
        price: 1099.90,
        category: 2
      },
      {
        name: 'Play Station 4',
        price: 1899.90,
        category: 3
      },
      {
        name: 'Dell XPS 13',
        price: 1999.90,
        category: 1
      },
      {
        name: 'XBox 360 S',
        price: 769.90,
        category: 3
      }
    ];
    let categories = [
      {
        name: 'Computadoras',
        id: 1
      },
      {
        name: 'Televisores',
        id: 2
      },
      {
        name: 'Consolas',
        id: 3
      }
    ];
    this.setState({ products, categories });
    this.backup = products;
    this.category = 0;
  }
  componentWillUpdate (props, state, ctx) {
    if (this.category !== ctx.category) {
      this.category = ctx.category;

      // 0 = se muestra todo
      if (this.category === 0) {
        this.setState({
          products: this.backup
        });
      }
      else {
        let products = this.backup.filter(p => (
          p.category === this.category
        ));
        this.setState({ products });
      }
    }
  }
  getCategoryName (id) {
    let cat = this.state.categories.filter(c => (
      c.id === id
    ));
    return cat[0].name;
  }
  render () {
    return (
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.products.map(p => (
              <tr>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{this.getCategoryName(p.category)}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }
}

ListaObjetivos.contextTypes = {
  category: React.PropTypes.number
};
export default ListaObjetivos
