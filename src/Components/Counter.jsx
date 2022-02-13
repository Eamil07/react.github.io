import react from 'react';
import React, { Component } from 'react';

class Counter extends Component {
      
        //  constructor(){
        //  super();
        //     this.handleevent=this.handleevent.bind(this)
        //  } 

//  rendertags() {
//     if (this.state.tags.length === 0 ) return <h1>There is no tags</h1>

//     return  <ul>{this.state.tags.map( tag => <li key={tag}> {tag} </li>)}</ul>
//  }


  render() { 
   
        return (
          
           <div>
               
               <span className={this.getbadgeClasses()}>{this.formatcount()}</span>
               <button onClick={()=>this.props.onincrement(this.props.count)} className="btn btn-secondary m-2">Increment</button>
               <button onClick={()=>this.props.ondel(this.props.count.id)}  className='btn btn-danger m-2'>Delete</button>
              </div>)
        
        }

  getbadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.count.value === 0 ? "warning" : "primary";
       
        return classes;
      }

    formatcount(){
        const {value} =this.props.count;
        return value === 0? 'Zero'  : value
    }
}
 
export default Counter;