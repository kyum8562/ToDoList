import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Control from './components/Control';

// 메인 컴포넌트, 컴포넌트를 선언하는 코드(JSX, JS와 유사하지만 다름)
class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'welcome',
      selected_content_id:2,
      welcome:{title:'welcome', desc:'hello React!'},
      a:{
        title:'WEB', 
        sub:'World Wide Web!!!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JS', desc:'JS is for interactive'}
      ]
    }
  }
  getReadContent(){
    var i = 0;
    while(i < this.state.contents.length){
      var data = this.state.contents[i];
      if(data.id === this.state.selected_content_id){
        return data;
        break;
      }
      i = i + 1;
    }
  }
  getContent(){
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title; 
      _desc = this.state.welcome.desc; 
      _article = <ReadContent title ={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode ==='read'){
      var _content = this.getReadContent();
      _article = <ReadContent title ={_content.title} desc={_content.desc}></ReadContent>
    }
    else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.max_content_id += 1;
        var _contents = Array.from(this.state.contents);
        _contents.push({id: this.max_content_id, title:_title, desc:_desc});
        this.setState({
          contents:_contents,
          mode:'read'
        });
      }.bind(this)}></CreateContent>
    }
    else if(this.state.mode === 'update'){
      _content = this.getReadContent();
      _article = <UpdateContent data ={_content} onSubmit={function(_id, _title, _desc){
        var _contents = Array.from(this.state.contents);
        var i = 0;
        while(i < _contents.length){
          if(_contents[i].id === _id){
            _contents[i] = {id:_id, title:_title, desc:_desc};
            break;
          }
          i = i + 1;
        }
        this.setState({
          contents:_contents,
          mode:'read'
        });
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }

  render () {
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
        <TOC data = {this.state.contents}
          onChangePage = {function(id){
            this.setState({
              mode: 'read',
              selected_content_id : Number(id)});
          }.bind(this)}
        >
        </TOC>
        <Control onChangeMode={function(_mode) {
          if(_mode === 'delete'){
            if(window.confirm('really??')){
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while(i < _contents.length){
                if(_contents[i].id === this.state.selected_contnet_id){
                  _contents.splice(i,1);
                  break;
                }
                i = i + 1;
              }
              this.setState({
                mode:'welcome',
                contents:_contents
              });
              alert('deleted!');
            }
          }
          else{
            this.setState({
              mode: _mode
            });
          }
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;