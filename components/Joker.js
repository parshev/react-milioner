import React, { Component } from 'react';

export default class Joker extends Component{
  constructor(props){
    super(props);
  }
  fiftyFifty=()=>{
    this.props.fiftyJoker();
  }
  help=()=>{
    this.props.audienceHelp();
  }
  friend=()=>{
    this.props.callFriend();
  }
  render(){
    return(
      <div className='joker-div-conteiner'>
        <button className='joker-div' 
                disabled={this.props.isUsed50} 
                type='button'
                onClick={this.fiftyFifty}
                >50/50</button>
        <button className='joker-div'
                disabled={this.props.isUsedPublic} 
                type='button'
                onClick={this.help}
                >audience</button>
        <button className='joker-div' 
                type='button'
                disabled={this.props.isUsedFriend}
                onClick={this.friend}
                >call a friend</button>
      </div>
    )
  }
}