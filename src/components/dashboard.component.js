import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Product = props => (
  <tr>
    <td>{props.product.code}</td>
    <td>{props.product.name}</td>
    <td>{props.product.category}</td>
    <td>{props.product.quantity}</td>
    <td>Rs. {props.product.price}</td>
    <td>Rs. {props.product.price*props.product.quantity}</td>
  </tr>
)

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {products: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/products/viewStock')
      .then(response => {
        this.setState({ products: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  productList() {
    return this.state.products.filter(Product.quantity<=10).map(currentproduct => {
      return <Product product={currentproduct}/>;
    })
  }

  render() {
    return (
      <div className="Product-List">
        <h3>Stock Items</h3>
        <div className="Table">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Product Code</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>PricePerUnit</th>
            </tr>
          </thead>
          <tbody>
            { this.productList() }
          </tbody>
        </table>
        </div>
      </div>
    )
  }
}