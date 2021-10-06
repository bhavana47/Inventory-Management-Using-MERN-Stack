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
    <td>
    <div class="mb-3">
        <span>
            <i class="fas fa-edit"></i>
        </span>
        <Link to={"/edit/"+props.product._id}>Edit</Link> |
        |
        <span>
            <i class="fas fa-trash"></i>
        </span>
            <a href="#" onClick={() => { props.deleteProduct(props.product._id) }}>Delete</a>
    </div>
    </td>
  </tr>
)

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.deleteProduct = this.deleteProduct.bind(this)

    this.state = {products: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/products/')
      .then(response => {
        this.setState({ products: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteProduct(id) {
    axios.delete('http://localhost:5000/products/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      products: this.state.products.filter(el => el._id !== id)
    })
  }

  productList() {
    return this.state.products.map(currentproduct => {
      return <Product product={currentproduct} deleteProduct={this.deleteProduct} key={currentproduct._id}/>;
    })
  }

  render() {
    return (
      <div className="Product-List">
        <h3>Items in Store</h3>
        <div className="Table">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Product Code</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>PricePerUnit</th>
              <th>Inventory value</th>
              <th>Actions</th>
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