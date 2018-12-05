import React, { Component } from 'react';
import './App.css';
import CoffeeForm from './CoffeeForm';
import Orders from './Orders';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
          coffee: "",
          emailAddress: "",
          flavor: "",
          size: "",
          strength: "",
          orders: []
      };

    }

    _onSubmit = (e) => {
      e.preventDefault();
      fetch('https://dc-coffeerun.herokuapp.com/api/coffeeOrders', {
          method: 'POST',
          body: JSON.stringify({
              coffee: this.state.coffee,
              emailAddress: this.state.emailAddress,
              flavor: this.state.flavor,
              size: this.state.size,
              strength: this.state.strength
          }),
          headers: {
              "Content-Type": "application/json"
          }
      })
      .then(
        this.setState({
          coffee: "",
          emailAddress: "",
          flavor: "",
          size: "",
          strength: ""
        })
      )
    }


    _onChangeCoffee = (e) => {
      this.setState({
        coffee: e
      });
  };
  _onChangeEmail = (e) => {
      this.setState({
        emailAddress: e
      });
  };
    _onChangeFlavor = (e) => {
      this.setState({
        flavor: e
      });
  };
    _onChangeSize = (e) => {
      this.setState({
        size: e
      });
  };
    _onChangeStrength = (e) => {
      this.setState({
        strength: e
      });
  };

  _onReset = () => {
    this.setState({
      coffee: "",
      emailAddress: "",
      flavor: "",
      size: "",
      strength: ""
    })
  }

  _loadOrders = (e) => {
    fetch('https://dc-coffeerun.herokuapp.com/api/coffeeOrders', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(results => {
      console.table(results)
        this.setState({
          orders: Object.values(results)
        })        
    })
  }


  render() {
    return (
      <div>
        <div>
          <CoffeeForm 
              onSubmit = {this._onSubmit}

              onChangeCoffee={(event) => this._onChangeCoffee(event.target.value)}
              coffee = {this.state.coffee}
              
              onChangeEmail={(event) => this._onChangeEmail(event.target.value)}
              emailAddress= {this.state.emailAddress}
            
              onChangeFlavor={(event) => this._onChangeFlavor(event.target.value)}
              flavor= {this.state.flavor}
            
              onChangeSize={(event) => this._onChangeSize(event.target.value)}
              size= {this.state.size}
              
              onChangeStrength={(event) => this._onChangeStrength(event.target.value)}
              strength= {this.state.strength}
            
              onReset = {this._onReset}
              
              onLoadOrders = {this._loadOrders}
          />
        </div>
        <div>
          <Orders 
            orders = {this.state.orders}
          />
      </div>
    </div>
      

    );
  }
}

export default App;
