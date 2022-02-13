import React, { Component } from 'react';
import Counter from './Counter';
class Counters extends Component {
   

    render() { 
        return (
            <div>
                <button onClick={this.props.onreset} className='btn btn-warning m-2'>reset</button>
              { this.props.count.map(cnt=><Counter key={cnt.id} 
              count={cnt} 
              onincrement={this.props.onincrement} 
              ondel={this.props.ondelete}>
                 
              </Counter>)}
            </div>
        );
    }
}
 
export default Counters;