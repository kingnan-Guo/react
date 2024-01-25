import React from "react";

export default class MyClassComponent extends React.Component{
    constructor(props){
        super(props)
        console.log("props ==", this.props);
    }

    render(){
        return <span>MyClassComponent {this.props.number}</span>
    }
}