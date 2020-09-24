import React, { Component } from "react";
import Button from "./Button";
import Joker from "./Joker";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btn1: "btn1",
      btn2: "btn2",
      btn3: "btn3",
      btn4: "btn4",
      audienceResult: "",
      isUsed50: false,
      isUsedPublic: false,
      isUsedFriend: false
    };
  }
  isCorrectAnswer = event => {
    if (this.props.corectA === event.target.value) {
      console.log("correct");
      this.setState(
        {
          btn1: "btn1",
          btn2: "btn2",
          btn3: "btn3",
          btn4: "btn4",
          audienceResult: ""
        },
        () => this.props.nextQuestion()
      );
    } else {
      console.log("incorrect");
      this.setState(
        {
          btn1: "btn1",
          btn2: "btn2",
          btn3: "btn3",
          btn4: "btn4",
          audienceResult: ""
        },
        () => {
          this.props.burn();
          this.resetJoker();
        }
      );
    }
  };
  resetJoker = () => {
    this.setState({
      isUsed50: false,
      isUsedFriend: false,
      isUsedPublic: false
    });
  };
  joker50Function = () => {
    const names = this.props.name;
    const ca = this.props.corectA;
    var indexOfCorect = names.indexOf(ca);
    switch (indexOfCorect) {
      case 0:
        this.setState({ btn3: "btn33", btn4: "btn44" });
        break;
      case 1:
        this.setState({ btn1: "btn11", btn4: "btn44" });
        break;
      case 2:
        this.setState({ btn1: "btn11", btn4: "btn44" });
        break;
      case 3:
        this.setState({ btn1: "btn11", btn2: "btn22" });
        break;
    }
    this.setState({
      isUsed50: true
    });
  };
  audienceHelp = () => {
    var count0 = 0;
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;

    for (var i = 0; i < 10; i++) {
      var ran = Math.floor(Math.random() * Math.floor(4));
      switch (ran) {
        case 0:
          count0++;
          break;
        case 1:
          count1++;
          break;
        case 2:
          count2++;
          break;
        case 3:
          count3++;
          break;
      }
      this.setState({
        isUsedPublic: true
      });
    }
    console.log(
      "A:" +
        count0 * 10 +
        " " +
        "B:" +
        count1 * 10 +
        " " +
        "C:" +
        count2 * 10 +
        " " +
        "D:" +
        count3 * 10
    );
    this.setState({
      audienceResult:
        "A:" +
        count0 * 10 +
        "% " +
        "B:" +
        count1 * 10 +
        "% " +
        "C:" +
        count2 * 10 +
        "%  " +
        "D:" +
        count3 * 10 +
        "% "
    });
  };
  callFriend = () => {
    const names = this.props.name;
    var ran = Math.random();
    if ((ran <= 0, 7)) {
      this.setState({
        audienceResult: this.props.corectA
      });
    } else {
      var i = 0;
      if (name[i] != this.props.corectA) {
        console.log(name[i]);
        console.log(ran);
      } else {
        i++;
        console.log(name[i]);
        console.log(ran);
      }
    }
    this.setState({
      isUsedFriend: true
    });
  };
  render() {
    return (
      <div className="con-menu">
        <div>
          {this.props.gameover}
          <button
            id={this.props.playAgainId}
            onClick={this.props.startAgain}
            type="button"
          >
            play again
          </button>
        </div>
        <div className="first-group-answers">
          <div id={this.props.identy}>
            <button
              type="button"
              className="disabled"
              id={this.state.btn1}
              value={this.props.name[0]}
              onClick={this.isCorrectAnswer}
            >
              {this.props.name[0]}
            </button>
            <button
              type="button"
              id={this.state.btn2}
              value={this.props.name[1]}
              onClick={this.isCorrectAnswer}
            >
              {this.props.name[1]}
            </button>
          </div>
          <div className="second-group-answers">
            <button
              type="button"
              id={this.state.btn3}
              value={this.props.name[2]}
              onClick={this.isCorrectAnswer}
            >
              {this.props.name[2]}
            </button>
            <button
              type="button"
              id={this.state.btn4}
              value={this.props.name[3]}
              onClick={this.isCorrectAnswer}
            >
              {this.props.name[3]}
            </button>
          </div>
        </div>
        <br />
        <br />
        <p id="joker-label">jokers</p>
        <Joker
          isUsed50={this.state.isUsed50}
          isUsedPublic={this.state.isUsedPublic}
          isUsedFriend={this.state.isUsedFriend}
          fiftyJoker={this.joker50Function}
          audienceHelp={this.audienceHelp}
          callFriend={this.callFriend}
        />
        <br />
        <div>{this.state.audienceResult}</div>
      </div>
    );
  }
}
