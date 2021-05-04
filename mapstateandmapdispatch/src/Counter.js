/*import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './action';

class Counter extends Component {
  render(){
      let inc = 5;
    return(
      <div>
      {this.props.counter}
      <button onClick={() => this.props.onIncrement(inc)}>Icrement</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return{
        counter: counterSelect(state)
    }
}

const counterSelect = state => {
    return state.counter
}

const mapDispatchToProps = dispatch =>{
    return{
        onIncrement: value => dispatch({ type: actions.INCREMENT, payload: value })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);*/
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './actionType';

class Counter extends Component {
  render(){
      let inc = 5;
    return(
      <div>
      {this.props.counter}
      <button onClick={() => this.props.onIncrement(inc)}>Icrement</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return{
        counter: counterSelect(state)
    }
}

const counterSelect = state => {
    return state.counter
}

const mapDispatchToProps = dispatch =>{
    return{
        onIncrement: value => dispatch({ type: actions.INCREMENT, payload: value })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);