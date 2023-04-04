import Inputbar from './components/Inputbar';
import RemoveDuplicate from './pages/RemoveDuplicate';
import React from 'react';
import {BrowserRouter, Routes , Route } from 'react-router-dom';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      value : '',
      cards : [],
      index : null,
      prev : '',
      hasNoDuplicate : false
    }
  }

  handelInputValue = (event) => {
    this.setState({
      value : event.target.value,
      prev : event.target.value
    });
  };

  RemoveChar = (char,index) => {
    let string = '';
    for(let i = 0; i < this.state.value.length; i++){
      if((this.state.value[i] === char.toUpperCase() || this.state.value[i] === char.toLowerCase()) && i !== index)
        string += '';
      else
        string += this.state.value[i];
    }

    let map = new Array(256).fill(0);
    let stringLow = string.toLowerCase();

    for(let i = 0; i < stringLow.length; i++){
        map[stringLow[i].charCodeAt(0)] += 1;
    }

    let c = 0;

    for(let i = 0; i < 256; i++){
      if(map[i] > 1)
        c++;
    }

    if(c === 0){
      this.setState({
        hasNoDuplicate : true
      });
    }

    this.setState({
      value : string
    });
  };

  defaultAll = () => {
    this.setState({
      value : '',
      cards : [],
      index : null,
      prev : '',
      hasNoDuplicate : false
    });
  }

  render(){
    const {value,index,cards,prev,hasNoDuplicate} = this.state;
    return (
      <div style={styles.app} className="App">
        <BrowserRouter>        
          <Routes>

            <Route 
            exact path="/"
            element={<Inputbar onInputChange={this.handelInputValue} value={value} />} 
            />
            <Route
            path="/remove-duplicate"
            element={<RemoveDuplicate value={value} prev={prev} hasNoDuplicate={hasNoDuplicate}
            RemoveChar={this.RemoveChar} index={index} defaultAll={this.defaultAll}
            cards={cards} />} 
            />

          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

const styles = {
  app : {
    textAlign : 'center',
    marginTop : 60
  }
}

export default App;
