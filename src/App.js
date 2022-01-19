import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Control from './components/Control';
import Test from './components/Test';


// 메인 컴포넌트, 컴포넌트를 선언하는 코드(JSX, JS와 유사하지만 다름)
class App extends Component {
  constructor(props){
    super(props);
    // 초기값 설정
    this.max_content_id = 4;
    this.state = {
      test : 'test',

      mode:'welcome',
      selected_content_id:2,
      // title과 subtitle 
      main:{
        title:'TO DO LIST', 
        sub:`Please write down what to do today.\nTitle is 'simple' Desc is 'specific'`},

      // mode : welcome일때
      welcome:{title:'welcome', desc:'hello React!'},
      // 기본 목록
      contents:[
        {id:1, title:'Exercise', desc:'30 push-up, 30 sit-up repeat 3 times!'},
        {id:2, title:'Toy project', desc:'3 hours coding for toy project that I am working on right now!'},
        {id:3, title:'Algorithm', desc:'3 question resolving for algorithm!'},
        {id:4, title:'Stick to Studying time', desc:'Studying for at least 10 hours!'}
      ]
    }
  }
  // 현재 contents를 읽는다.
  // (contents의 length 만큼 반복하여,) 현재 id가 contents의 id와 일치할 경우 해당 id의 content를 리턴한다.
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

  // mode(welcome, read, create, update, delete)에 따른 기능 구현
  getContent(){
    var _title, _desc, _article = null;
    // mode : welcome
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title; 
      _desc = this.state.welcome.desc; 
      _article = <ReadContent title ={_title} desc={_desc}></ReadContent>
    }
    // mode : read
    else if(this.state.mode ==='read'){
      var _content = this.getReadContent();
      _article = <ReadContent title ={_content.title} desc={_content.desc}></ReadContent>
    }
    // mode : create
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
    // mode : update
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
        {/* subject 컴포넌트 실행 */}
        <Subject 
          title={this.state.main.title}
          sub={this.state.main.sub}
          onChangePage = {function(){
            this.setState({mode: 'welcome'});
          }.bind(this)}
        >
        </Subject>

        {/* TOC 컴포넌트 실행 */}
        <TOC data = {this.state.contents}
          onChangePage = {function(id){
            this.setState({
              mode: 'read',
              selected_content_id : Number(id)});
          }.bind(this)}
        >
        </TOC>
        
        {/* Control 컴포넌트 실행 */}
        <Control onChangeMode={function(_mode) {
          
          {/* mode : delete */}
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

          // mode : delete 이외의 모드
          else{
            this.setState({
              mode: _mode
            });
          }
        }.bind(this)}></Control>
        {this.getContent()}

        {/* Test 컴포넌트 실행 */}
        <Test 
           test = {this.state.test}
           onChangePage = {function() {
              this.setState ({
                mode : 'welcome'
              });
           }.bind(this)}
        >
        </Test>
      </div>
    );
  }
}

export default App;