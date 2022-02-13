import React, { Component } from 'react';
class Navbar extends Component {
   
    render() { 
        return (
            <ul class="nav">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">NAV BAR  
    <span className='badge badge-pill badge-secondary'>{this.props.totalCount}</span>
    </a> 
  </li>
  
  </ul>
        );
    }
}
 
export default Navbar;