import React,{Component}from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDom from 'react-dom';

class List extends Component{
    render(){
      return (
          <ol>
            {this.props.tasks.map((task,index) => <li key= {index}>{task}</li>)}
        </ol>)
    }
  }

  export default List