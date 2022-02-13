
import './App.css';
import Counters from "./Components/Counters"
import Navbar from './Components/Navbar';
import React from 'react';
import { render } from '@testing-library/react';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {

  state = { 
    counters:[
        {id:1, value:0},
        {id:2, value:5},
        {id:3, value:0}
    ]
 }

 handledlete=(counterid)=>{
  const counters= this.state.counters.filter(c=>c.id !== counterid)
  this.setState({counters})
 }

 handlereset =() =>{
     const counter=this.state.counters.map(c=>{c.value=0
    return c;})
     this.setState({counter})
 }

 increment = counter =>{
     const countern=[...this.state.counters]
     const index=countern.indexOf(counter);

     countern[index].value++;
     this.setState({countern})
            
 }
render(){
  return (
    <React.Fragment>
       <Navbar totalCount={this.state.counters.filter(c=>c.value>0).length}/>
       <main className='container'>
       <Counters  
        count={this.state.counters}
        onreset={this.handlereset}
        onincrement={this.increment}
         ondelete={this.handledlete}></Counters>
       </main>
   
    </React.Fragment>
   
  );
}
}

export default App;
