import React, { Component } from 'react';
import '../App.css';

class ReadContent extends Component {
    render (){
      return(
        <article>
              <h2>{this.props.title}</h2>
              {this.props.ccc}
        </article>
      );
      }
    }
    
export default ReadContent;