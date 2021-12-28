import React, {Component} from 'react';
import '../App.css';

class Subject extends Component {
    render () {
      return (
        <header>
          <title>test React</title>
          <h1><a href="/" onClick={function(e){
            e.preventDefault();
            this.props.onChangePage();
            console.log(' ');
          }.bind(this)}>{this.props.title}
              </a></h1>
          {this.props.sub}
        </header>
      );
    }
  }
  
export default Subject;