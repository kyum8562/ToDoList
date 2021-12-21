import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Control from './components/Control';

// 메인 컴포넌트, 컴포넌트를 선언하는 코드(JSX, JS와 유사하지만 다름)
class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'create',
      selected_content_id:2,
      welcome:{title:'welcome', desc:'hello React!'},
      a:{
        title:'WEB', 
        sub:'World Wide Web!!!!'},
      b:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JS', desc:'JS is for interactive'}
      ]
  }
  }
    render () {
      var _title, _desc, _article = null;
      if(this.state.mode === 'welcome'){
        _title = this.state.welcome.title; 
        _desc = this.state.welcome.desc; 
        _article = <ReadContent title ={_title} ccc={_desc}></ReadContent>

      }
      else if(this.state.mode ==='read'){
        var i = 0;
        while(i < this.state.b.length){
          var data = this.state.b[i];
          if(data.id === this.state.selected_content_id){
            _title = data.title;
            _desc = data.desc;
            break;
          }
          i = i + 1;
        }
        _article = <ReadContent title ={_title} ccc={_desc}></ReadContent>
      }
      else if(this.state.mode === 'create'){
        _article = <CreateContent onSubmit={function(_title, _desc){
          console.log(_title, _desc);
          this.max_content_id += 1;
          this.setState()
        }.bind(this)}></CreateContent>
      }

      return (
      <div className="App">

          <Subject 
            title={this.state.a.title}
            sub={this.state.a.sub}
            onChangePage = {function(){
              this.setState({mode: 'welcome'});
            }.bind(this)}
          >
          </Subject>

          {/* <Subject title="React" sub="wide!"></Subject> */}
          <TOC data = {this.state.b}
            onChangePage = {function(id){
              this.setState({
                mode: 'read',
                selected_content_id : Number(id)});
            }.bind(this)}
          >
          </TOC>
          <Control onChangeMode={function(_mode) {
            this.setState({
              mode: _mode
            })
          }.bind(this)}></Control>
          {_article}
      </div>
    );
  }
}

export default App;