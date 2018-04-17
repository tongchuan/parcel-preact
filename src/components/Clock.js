import preact from 'preact';

export default class Clock extends preact.Component {
  constructor(props){
    super(props)
    this.state = {
      time: Date.now()
    }
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);
  }
  componentWillUnmount() {
    // 当不再渲染，停止计时器
    clearInterval(this.timer);
  }
  render(){
    let { time } = this.state
    time = new Date(time).toLocaleTimeString()
    return (
      <span>{ time }</span>
    )
  }
}