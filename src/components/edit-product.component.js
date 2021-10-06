import React, { Component } from 'react';
import axios from 'axios';
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";
export default class EditProduct extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeQuantity= this.onChangeQuantity.bind(this);
        this.onChangePrice= this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          code: '',
          name: '',
          category: '',
          price: 0,
        }
      }

      componentDidMount() {
        axios.get('http://localhost:5000/users/'+this.props.match.params.id)
          .then(response => {
            this.setState({
                code: response.data.code,
                name: response.data.name,
                category: response.data.category,
                quantity: response.data.quantity,
                price: response.data.price
            })   
          })
          .catch(function (error) {
            console.log(error);
          })

    
      }
      onChangeCode(e) {
        this.setState({
          code: e.target.value
        })
      }
    
      onChangeName(e) {
        this.setState({
          name: e.target.value
        })
      }
    
      onChangeCategory(e) {
        this.setState({
          category: e.target.value
        })
      }

      onChangeQuantity(e) {
        this.setState({
          quantity: e.target.value
        })
      }

      onChangePrice(e) {
        this.setState({
          price: e.target.value
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const product = {
          code: this.state.code,
          name: this.state.name,
          category: this.state.category,
          quantity: this.state.quantity,
          price: this.state.price
        }
    
        console.log(product);
    
        axios.post('http://localhost:5000/products/update/'+ this.props.match.params.id, product)
          .then(res => console.log(res.data));
    
        window.location = '/';
      }
    
      render() {
        return (
        <div>
          <h3>Update Product</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>Code: </label>
              <input required className="form-control" value={this.state.code} onChange={this.onChangeCode}/>
            </div>
            <div className="form-group"> 
              <label>Name: </label>
              <input  type="text" required className="form-control" value={this.state.name} onChange={this.onChangeName}/>
            </div>
            <div className="form-group">
              <label>Category:</label>
              <input type="text" className="form-control" value={this.state.category} onChange={this.onChangeCategory}/>
            </div>
            <div className="form-group">
              <label>Quantity:</label>
              <input type="text" className="form-control" value={this.state.quantity} onChange={this.onChangeQuantity}/>
            </div>
            <div className="form-group">
              <label>Price:</label>
              <input type="text" className="form-control" value={this.state.price} onChange={this.onChangePrice}/>
            </div>
            <div className="form-group">
              <input type="submit" value="Update Product" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
      }
    }