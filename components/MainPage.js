import React, { Component } from 'react';
import Logo from './Logo';

import axios from 'axios';

export default class MainPage extends Component{
  constructor(props){
    super(props);
    this.state={
      items: {},
      currentQ:''
      
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
  setLocalStorageData=()=>{
    const { items }=this.state;
    const toLS = JSON.stringify(items);
    //console.log(toLS)
    localStorage.setItem('data',toLS);
  }
  setQuestion=()=>{
    const { items } = this.state;
    var ran = Math.floor(Math.random() * Math.floor(15));
    const inQ = items[ran].incorrect_answers.map((i,index)=>{
      return i
    })
    this.setState({
      currentQ:items[ran],
      incorrect_answers:inQ
    }) 
  }
    render() {
      return (
        <div>
        <div>{this.state.currentQ.question}</div>
        <Menu />
        </div>
      )
    }
  }
  
