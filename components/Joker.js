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
      <div className='joker-div-conteiner'>
        <button className='joker-div' type='button'
                onClick={this.fiftyFifty}
                >50/50</button>
        <button className='joker-div' type='button'
                onClick={this.help}
                >audience</button>
        <button className='joker-div' type='button'
                onClick={this.friend}
                >call a friend</button>
      </div>
    )
  }
}