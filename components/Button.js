import React, { Component } from 'react';

export default class Button extends Component{
  constructor(props){
    super(props);
    this.state={
      allColor:'red',
      isSelect:false
    }
  }
  isAnySelected=()=>{
    if(this.state.isSelect)
    {
      console.log(this.state.allColor)
      this.setState({
        allColor:'red'
      })
    }
    this.selectAnswer();
  }
  selectAnswer=()=>{
    console.log(this.state.allColor)
    this.setState({
      isSelect:true,
      allColor:'blue'
    })
  }
  render(){
return(
  <div >
    <button id={this.state.allColor} onClick={this.isAnySelected}>{this.props.name}</button>
  
    </div>
)
  }
}