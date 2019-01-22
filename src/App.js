import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    let coffees = [
      {'name': 'Liscio', 'counter': 0},
      {'name': 'Lungo', 'counter': 0},
      {'name': 'Macchiato', 'counter': 0},
      {'name': 'Brutto', 'counter': 0},
      {'name': 'Orzo', 'counter': 0},
      {'name': 'Orzo Macchiato', 'counter': 0},
      {'name': 'Cappuccino', 'counter': 0},
      {'name': 'Liscio Deca', 'counter': 0},
      {'name': 'Lungo Deca', 'counter': 0},
      {'name': 'Macchiato Deca', 'counter': 0},
      {'name': 'Brutto Deca', 'counter': 0},
      {'name': 'Cappuccino Deca', 'counter': 0},
      {'name': 'Caffè al ginseng', 'counter': 0},
      {'name': 'Orange Juice', 'counter': 0}
    ];
    this.state = { coffees: coffees };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase(coffeType) {
    let newArray = this.state.coffees.slice();
    newArray.find(x => x.name === coffeType).counter++;
    this.setState({coffees: newArray});
  }

  decrease(coffeType) {
    let newArray = this.state.coffees.slice();
    if (newArray.find(x => x.name === coffeType).counter > 0){
      newArray.find(x => x.name === coffeType).counter--;
    }
    this.setState({coffees: newArray});
  }

  render() {
    return (
      <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="list-group">
              {this.state.coffees.map((item) => (
                <div key={item.name}>
                  <div className="row">
                    <div className=" text-center col-2">
                      <button type="button" className="list-group-item list-group-item-action" onClick={() => this.decrease(item.name)}>
                          <span>-</span>
                      </button>
                    </div>
                    <div className="col-10">
                      <button type="button" className="list-group-item list-group-item-action" onClick={() => this.increase(item.name)}>
                        {item.name}
                        <span className="badge badge-primary badge-pill ml-2">{item.counter}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 alert alert-primary">
          <h3>Total coffees: {this.state.coffees.reduce((total, current) => total + current.counter, 0)}</h3>
          <ul>
            {this.state.coffees.filter(x => x.counter > 0).map(item => (
              <li key={item.name}>
                <span>{item.name}: {item.counter}</span>
              </li>
            ))
            }
          </ul>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
