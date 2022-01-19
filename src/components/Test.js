import React , { Component } from 'react';
import '../App.css';

class Test extends Component {
    render () {
        return(
            <h3>
                <a href ="/test"
                onClick = {function(e){
                      e.preventDefault();
                      this.props.onChangePage();
                    }.bind(this)}>{this.props.test}
                </a>
            </h3>
        );
    }
}

export default Test;
