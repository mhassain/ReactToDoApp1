import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component{
  state = {
    ninjas: [
      {name: 'Mahade', age: 30, learning: 'React JS', id: 1},
      {name: 'Hasan', age: 20, learning: 'Angular JS', id: 2},
      {name: 'Karim', age: 15, learning: 'Vue JS', id: 3}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState ({
      ninjas: ninjas
    })
  }
  render(){
    return(
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;