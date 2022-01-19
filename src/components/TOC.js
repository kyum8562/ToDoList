import React, { Component } from 'react';
import '../App.css';

class TOC extends Component {
  shouldComponentUpdate(newProps, newState){
    // 파라미터는 newProps와 newState 이다.
    // 데이터를 Create 할 때 push가 아닌 concat을 사용해서 데이터 두 파라미터의
    // 차이를 이용해서 render() 호출 여부를 결정한다.
    console.log(`shouldComponentUpdate`);
    if(this.props.data === newProps.data){
    console.log(`this.props.data === newProps.data`);

      // 새로운 데이터가 들어오지 않는단면 render() 호출 X
      return false;
    }
    // 새로운 데이터가 들어오게 된다면 render() 호출
    return true;
  }

  render() {
    console.log(`TOC render`);
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while(i< data.length){
      lists.push(<li key={data[i].id}>
                    <a href = {data[i].id + ".html"}
                      data-id = {data[i].id}
                      onClick = {function(e){
                      e.preventDefault();
                      this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}>{data[i].title}
                    </a>
                </li>)
      i = i+1;
    }

    return(
      <nav>
          <ul>
              {lists}
          </ul>
      </nav>
    );
  }
}
  
  export default TOC;