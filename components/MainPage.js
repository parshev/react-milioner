import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import axios from 'axios';

export default class MainPage extends Component{
  constructor(props){
    super(props);
    this.state={
      items: {},
      currentQ:'',
      corectA:'',
      incorectA:[],
      identy:'btn',
      gameover:'',
      playAgainId:'btns',
      countCorrectAnswer: 0,
      secAmount:''
      
    }
  }
  componentDidMount(){
    axios.get('https://opentdb.com/api.php?amount=15&type=multiple')
    .then(response=>{
      //console.log(response)
      this.setState({
        items:response.data.results
      },()=>this.setQuestion())
           
    })
  }
  secureAmount=()=>{
    const { countCorrectAnswer } = this.state;
    if(countCorrectAnswer==5){
      this.setState({
        secAmount:'first secure amount . congrats $500'
      })
    }else if(countCorrectAnswer==10){
      this.setState({
        secAmount:'second secure amount . congrats $1000'
      })
    }else if(countCorrectAnswer==15){
      this.setState({
        secAmount:'Winner. congrats $1500'
      },()=>console.log(this.state.secAmount))
    }
  }
  gameOver=()=>{
    this.setState({
      currentQ:'',corectA:'',incorectA:'',identy:'btns',
      gameover:'game over', playAgainId:'',countCorrectAnswer:0
    })
  }
  setQuestion=()=>{
    const { items } = this.state;
    var ran = Math.floor(Math.random() * Math.floor(15));
    const inQ = items[ran].incorrect_answers.map((i,index)=>{
      //console.log(items)
      return i
    })
    this.setState({
      currentQ:items[ran],
      corectA:items[ran].correct_answer,
      incorectA:inQ,
      identy:'btn',
      playAgainId:'btns',
      gameover:''
      
    })
  }
  startAgain=()=>{
    this.setQuestion()
    
  }
  nextQuestion=()=>{
    const { items } = this.state;
    var ran = Math.floor(Math.random() * Math.floor(15));
    const inQ = items[ran].incorrect_answers.map((i,index)=>{
      //console.log(items)
      return i
    })
    this.setState({
      currentQ:items[ran],
      corectA:items[ran].correct_answer,
      incorectA:inQ,
      identy:'btn',
      playAgainId:'btns',
      gameover:'',
      countCorrectAnswer: this.state.countCorrectAnswer+1
      
    },()=>this.secureAmount()) 
  }
    render() {
      return (
        <div>
        <br/>
        <div>{this.state.secAmount}</div><br/>
        <div>{this.state.currentQ.question}</div><br/>
        <Menu nameA={this.state.incorectA[0]}
              nameB={this.state.corectA}
              nameC={this.state.incorectA[1]}
              nameD={this.state.incorectA[2]}
              burn={this.gameOver}
              levelUp={this.levelUp}
              identy={this.state.identy}
              gameover={this.state.gameover}
              playAgainId={this.state.playAgainId}
              startAgain={this.startAgain}
              nextQuestion={this.nextQuestion}/>
        </div>
      )
    }
  }
  
