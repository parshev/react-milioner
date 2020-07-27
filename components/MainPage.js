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
      answers:[],
      identy:'btn',
      gameover:'',
      playAgainId:'btns',
      countCorrectAnswer: 0,
      secAmount:'',
      aId:'',
      randomIdAnswer:[]
    }
  }
  componentDidMount(){
    axios.get('https://opentdb.com/api.php?amount=15&type=multiple')
    .then(response=>{
      console.log(response)
      this.setState({
        items:response.data.results
      },()=>this.setQuestion())
    })
  }
 shuffle=(arr)=> {
  var currentIndex = this.state.randomIdAnswer.length, temporaryValue, randomIndex;
  const arrayShiffled = this.state.randomIdAnswer;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return arrayShiffled;
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
      },()=>this.gameOver())
    }
  }
  gameOver=()=>{
    this.setState({
      currentQ:'',corectA:'',incorectA:'',identy:'btns',
      gameover:'game over', playAgainId:'',countCorrectAnswer:0,secAmount:'YOU ARE THE WINNER'
    })
  }
  setQuestion=()=>{
    const { items } = this.state;
    var ran = Math.floor(Math.random() * Math.floor(15));
    const inQ = items[ran].incorrect_answers.map((i,index)=>{
      return i
    })
    const answerArr=[];
    answerArr.push(items[ran].correct_answer);
    answerArr.push(items[ran].incorrect_answers[0]);
    answerArr.push(items[ran].incorrect_answers[1]);
    answerArr.push(items[ran].incorrect_answers[2]);
    const shuffArr = this.shuffle(answerArr);
    console.log('ffff :'+shuffArr);
    console.log('hhhhh :'+answerArr)
    this.setState({
      currentQ:items[ran],
      secAmount:'',
      corectA:items[ran].correct_answer,
      identy:'btn',
      playAgainId:'btns',
      gameover:'',
      countCorrectAnswer:0,
      answers:answerArr,
      randomIdAnswer:shuffArr
    })
  }
  startAgain=()=>{
    this.setQuestion()
    
  }
  nextQuestion=()=>{
    const { items } = this.state;
    var ran = Math.floor(Math.random() * Math.floor(15));
    const answerArr=[];
    answerArr.push(items[ran].correct_answer);
    answerArr.push(items[ran].incorrect_answers[0]);
    answerArr.push(items[ran].incorrect_answers[1]);
    answerArr.push(items[ran].incorrect_answers[2]);
    const inQ = items[ran].incorrect_answers.map((i,index)=>{
      return i
    })
    this.setState({
      currentQ:items[ran],
      secAmount:'',
      corectA:items[ran].correct_answer,
      identy:'btn',
      playAgainId:'btns',
      gameover:'',
      answers:answerArr,
      randomIdAnswer:answerArr,
      countCorrectAnswer: this.state.countCorrectAnswer+1
    },()=>this.secureAmount()) 
  }
  se=()=>{
    const ids = [];
    var len = 0;
    while(len<4){
      var v = Math.floor(Math.random() * Math.floor(4));
      if(ids.includes(v)){
      }else{
        ids.push(v);
        len++;
      }
    }
    this.setState({
      aId:ids
    })
  }
    render() {
      const {randomIdAnswer, aId} = this.state;
      
      return (
        <div>
        <br/>
        <div>{this.state.secAmount}</div><br/>
        <div>{this.state.currentQ.question}</div><br/>
        <Menu name={randomIdAnswer}
             
              burn={this.gameOver}
              levelUp={this.levelUp}
              identy={this.state.identy}
              gameover={this.state.gameover}
              playAgainId={this.state.playAgainId}
              startAgain={this.startAgain}
              nextQuestion={this.nextQuestion}
              corectA={this.state.corectA}/>
        <button type='button' onClick={this.se}>rid</button>
        </div>
      )
    }
  }
  
