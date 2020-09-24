import React, { Component } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import axios from "axios";
import Joker from "./Joker";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      currentQ: "",
      corectA: "",
      incorectA: [],
      answers: [],
      identy: "btn",
      gameover: "",
      playAgainId: "btns",
      countCorrectAnswer: 0,
      secAmount: "",
      aId: "",
      randomIdAnswer: [],
      column: "",
      as : [
      "100","200","300","400","500","600","700","800","900","1000",
      "1100","1200","1300","1400","1500"
    ]
    };
  }
  componentDidMount() {
    axios
      .get("https://opentdb.com/api.php?amount=15&type=multiple")
      .then(response => {
        console.log(response);
        this.setState(
          {
            items: response.data.results
          },
          () => this.setQuestion()
        );
      });
  }
  shuffle = () => {
    var currentIndex = this.state.randomIdAnswer.length,
      temporaryValue,
      randomIndex;
    const arrayShiffled = this.state.randomIdAnswer;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = arrayShiffled[currentIndex];
      arrayShiffled[currentIndex] = arrayShiffled[randomIndex];
      arrayShiffled[randomIndex] = temporaryValue;
    }
    console.log(arrayShiffled);
    this.setState({
      randomIdAnswer: arrayShiffled
    },()=>{this.setColum()});
  };
  secureAmount = () => {
    const { countCorrectAnswer } = this.state;
    if (countCorrectAnswer == 5) {
      this.setState({
        secAmount: "first secure amount . congrats $500"
      });
    } else if (countCorrectAnswer == 10) {
      this.setState({
        secAmount: "second secure amount . congrats $1000"
      });
    } else if (countCorrectAnswer == 15) {
      this.setState(
        {
          secAmount: "Winner. congrats $1500"
        },
        () => this.gameOver()
      );
    }
  };
  gameOver = () => {
    this.setState({
      currentQ: "",
      corectA: "",
      incorectA: "",
      identy: "btns",
      gameover: "game over",
      playAgainId: "",
      countCorrectAnswer: 0,
      secAmount: "YOU ARE THE WINNER"
    });
  };
  setColum = () => {
    const{ countCorrectAnswer, as } = this.state;
    const jsxAs = as.map((a, index) => {
      if(countCorrectAnswer==index){
      return (
          <button className="light-class" key={index}>
            {as[index]}
          </button>
      )
      }else{
       return (
          <button className="column-button" key={index}>
            {as[index]}
          </button>
        
      );
    }})
    this.setState({
      column: jsxAs.reverse()
    });
  };
  setQuestion = () => {
    const { items } = this.state;
    var ran = Math.floor(Math.random() * Math.floor(15));
    const inQ = items[ran].incorrect_answers.map((i, index) => {
      return i;
    });
    const answerArr = [];
    answerArr.push(items[ran].correct_answer);
    answerArr.push(items[ran].incorrect_answers[0]);
    answerArr.push(items[ran].incorrect_answers[1]);
    answerArr.push(items[ran].incorrect_answers[2]);
    console.log(answerArr);
    //const questionProgres = this.setColum();
    this.setState(
      {
        currentQ: items[ran],
        secAmount: "",
        corectA: items[ran].correct_answer,
        identy: "btn",
        playAgainId: "btns",
        gameover: "",
        countCorrectAnswer: 0,
        answers: answerArr,
        randomIdAnswer: answerArr
      },
      () => this.shuffle()
    );
  };
  startAgain = () => {
    this.setQuestion();
  };
  nextQuestion = () => {
    const { items } = this.state;
    var ran = Math.floor(Math.random() * Math.floor(15));
    const answerArr = [];
    answerArr.push(items[ran].correct_answer);
    answerArr.push(items[ran].incorrect_answers[0]);
    answerArr.push(items[ran].incorrect_answers[1]);
    answerArr.push(items[ran].incorrect_answers[2]);
    const inQ = items[ran].incorrect_answers.map((i, index) => {
      return i;
    });
    console.log(answerArr);
    this.setState(
      {
        currentQ: items[ran],
        secAmount: "",
        corectA: items[ran].correct_answer,
        identy: "btn",
        playAgainId: "btns",
        gameover: "",
        answers: answerArr,
        randomIdAnswer: answerArr,
        countCorrectAnswer: this.state.countCorrectAnswer + 1
      },
      () => {
        this.secureAmount();
        this.shuffle();
      }
    );
  };

  render() {
    const { randomIdAnswer, aId } = this.state;
    return (
      <div className="row-main-div">
        <div className="container-main">
          <div className="secure-amount">
            <br />
            <div>{this.state.secAmount}</div>
            <br />
            <div className="question-field">
              <em>{this.state.currentQ.question}</em>
            </div>
            <br />
          </div>
          <div className='all-menu-container'>
            <Menu
              name={randomIdAnswer}
              burn={this.gameOver}
              levelUp={this.levelUp}
              identy={this.state.identy}
              gameover={this.state.gameover}
              playAgainId={this.state.playAgainId}
              startAgain={this.startAgain}
              nextQuestion={this.nextQuestion}
              corectA={this.state.corectA}
            />
          </div>
        </div>
        <div className="column">{this.state.column}</div>
      </div>
    );
  }
}
