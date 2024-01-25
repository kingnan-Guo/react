import React from 'react';

class controlled extends React.Component{
  constructor(){
    super()
    this.state = {
        value: 0
    }
  }
  transformFunction = (e) => {
    console.log("transformFunction ==", e.target.value);
    console.log("this.state ==", this.state);
    this.setState({
      value: e.target.value.toUpperCase()
    })
  };

  render(){
    return  <div>
        <input type="text" value={this.state.value} onChange={this.transformFunction} />
    </div>
  }
}

export default  controlled