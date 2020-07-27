import React, { Component } from 'react';
import Button from './Button';

export default class Menu extends Component{
   constructor(props){
    super(props);
  }
  isCorrectAnswer=(event)=>{
     if(this.props.corectA===event.target.value){
       console.log('correct');
       this.props.nextQuestion();
     }else{
       console.log('incorrect');
       this.props.burn();
     }
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
      <button type='button' value={this.props.name[0]} onClick={this.isCorrectAnswer}>{this.props.name[0]}</button>
      <button type='button' value={this.props.name[1]} onClick={this.isCorrectAnswer}>{this.props.name[1]}</button>
      <button type='button' value={this.props.name[2]}  onClick={this.isCorrectAnswer}>{this.props.name[2]}</button>
      <button type='button' value={this.props.name[3]}  onClick={this.isCorrectAnswer}>{this.props.name[3]}</button>
      </div>
      </div>
    )
  }
}