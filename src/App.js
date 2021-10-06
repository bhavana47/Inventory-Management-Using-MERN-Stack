import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar.component"
import ProductList from "./components/product-list.component";
import CreateProduct from "./components/create-product.component";
import EditProduct from "./components/edit-product.component";
import CreateUser from "./components/create-user.component";
import Dashboard from "./components/dashboard.component";
import Login from "./components/login.component";

function App() {
    return (
      <Router>
      <div className="outer-body">
      <Navbar />
      <br/>
      <Route path="/viewStock" component={Dashboard} />
      <Route path="/" exact component={ProductList} />
      <Route path="/create" component={CreateProduct} />
      <Route path="/edit/:id" component={EditProduct} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
    );
}
export default App;
