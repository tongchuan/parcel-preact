import preact from 'preact';
import {bindActionCreators} from 'redux';
import {connect} from 'preact-redux'
import * as testAction from '../redux/actions/testAction'
class Index extends preact.Component {
  constructor(props){
    super(props);
    this.setText = this.setText.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  componentDidMount() {
    console.log(this)
    this.props.action.add({name:'111',age:1111})
  }
  addTodo() {
    let { todos, text } = this.props.testState;
    todos = todos.concat({ text });
    this.props.action.update({ todos, text: '' })
    // this.setState({ todos, text: '' });
  }
  setText(event){
    this.props.action.update({ text: event.target.value })
    // this.setState({ text: event.target.value });
  }
  render() {
    return (
      <form onSubmit={this.addTodo} action="javascript:">
        <input value={this.props.testState.text} onInput={this.setText} />
        <button type="submit">Add</button>
        <ul>
          { this.props.testState.todos.map( todo => (
              <li>{todo.text}</li>
          )) }
        </ul>
      </form>
    );
  }
};

export default connect((state,props)=>{
  console.log(state)
  return {testState: state.testState}
},(dispatch,state)=>{
  // console.log(dispatch,state)
  return {action: bindActionCreators(testAction, dispatch)}
},(stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}, {
  pure: false,
  withRef: false
})(Index)