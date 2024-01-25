import React from 'react';
import Money from "./money";
// function App() {
//   return (
//     <div className="App">
//       Learn React
//     </div>
//   );
// }
// export default App;

class App extends React.Component{

  state = {
    value: 0
  }
  transformFunction = (value) => {
    // console.log("transformFunction ==", value);
    this.setState({
      value: value
    })
  };

  render(){
    return 
    <div>
       <Money text='none' value={this.state.value} transformFunction={this.transformFunction}/>
    </div>
  }
}

export default  App