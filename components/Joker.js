import React, { Component } from 'react';

export default class Joker extends Component{
  constructor(props){
    super(props)
  }
  fiftyFifty=()=>{
    this.props.fiftyJoker();
  }
  help=()=>{
    this.props.audienceHelp();
    console.log('help')
  }
  friend=()=>{
    this.props.callFriend();
    console.log('friend')
  }
  render(){
    return(
      <div id='joker-div-conteiner'>
        <button type='button'
                onClick={this.fiftyFifty}
                >50/50</button>
        <button type='button'
                onClick={this.help}
                >audience</button>
        <button type='button'
                onClick={this.friend}
                >call a friend</button>
      </div>
    )
  }
}