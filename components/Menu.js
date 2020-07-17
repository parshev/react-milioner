import React, { Component } from 'react';
import Button from './Button';

export default class Menu extends Component{
   constructor(props){
    super(props);
    this.state={
      label:[],
      color:[]
    }
  }
  render(){
    return(
      <div>
      <button type='button' id={this.props.name}>{this.props.value}</button>
      <button type='button' id={this.props.name}>{this.props.value}</button>
      <button type='button' id={this.props.name}>{this.props.value}</button>
      <button type='button' id={this.props.name}>{this.props.value}</button>
      </div>
    )
  }
}