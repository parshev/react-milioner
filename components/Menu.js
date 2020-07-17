import React, { Component } from 'react';
import Button from './Button';

export default class Menu extends Component{
   constructor(props){
    super(props);
  }
  
  
  render(){
    return(
      <div>
      <div>
        {this.props.gameover}
        <button id={this.props.playAgainId} 
        onClick={this.props.startAgain} type='button'>play again</button>
      </div>
      <div id={this.props.identy}>
      <button type='button'  onClick={this.props.burn}>{this.props.nameA}</button>
      <button type='button' onClick={this.props.nextQuestion}>{this.props.nameB}</button>
      <button type='button'  onClick={this.props.burn}>{this.props.nameC}</button>
      <button type='button'  onClick={this.props.burn}>{this.props.nameD}</button>
      </div>
      </div>
    )
  }
}