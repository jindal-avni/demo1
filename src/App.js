import React, { Component } from 'react';
import {ProductList} from './ProductList';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {products: [
                  {pname: "Product1", price: 100},
                  {pname: "Product2", price: 200},
                  {pname: "Product3", price: 300},
                  {pname: "Product4", price: 400}
                ]
                };
  }

  render(){
    return (
      <div>
        <header className='App-header'>
          FLIPKART
        </header>

        <div>
          <ProductList productslist={this.state.products} />
        </div>

        


        <footer className='App-header'>
          <a href="#"> About Us</a>
          <a href="#"> Contact Us</a>
          <a href="#"> Site Policy</a>
          <a href="#"> Returns & Cancellation Policy</a>
        </footer>
      </div>
    );
  }
}

export default App;