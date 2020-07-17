import React, { Component} from 'react';


export default class Play extends Component{
  constructor(props){
    super(props);
    this.state={
      items:{},
      questions:[],
      currentQuestion:''
    }
  }
  componentDidMount(){
    const fromLS = localStorage.getItem('data');
    // const itemsObj = JSON.parse(fromLS);
    // console.log(itemsObj)
    // this.setState({
    //   items:itemsObj
    // }
    // )
  }
  getQuestionsTitle=()=>{
   console.log(Object.keys(this.state.items))
  }
  render(){
    return(
      <div>
      <ul>
        {this.state.questions}
      </ul>
        {this.state.currentQuestion}
      
      </div>
    )
  }
}