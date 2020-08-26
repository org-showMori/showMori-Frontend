import React from 'react';

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState(hey => ({count: hey.count + 1}));
  }
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  }
  // Component Life Cycle APIs
  // 컴포넌트가 DOM에 생성되기 전, 후나 업데이트되기 전, 후로 실행되는 메소드들
  //*** constructor(props) : 개인적으로 찾아보기 *** 

  // 1. when component is insulted into the DOM
  componentDidMount() {
    console.log("I created");
  }

  // 2. 실제 DOM이 업데이트하기 전에 업데이트 해야하는지 알아보기 위해 가상 DOM에 컴포넌트를 재 render하는 단계
  componentDidUpdate() {
    console.log("I'm updated");
  }
  // 3. 컴포넌트가 DOM에서 해제되는 단계
  componentWillUnmount() {
    console.log("I'm died");
  }

  render() {
    return (
      <div>
        <h1>The count is : {this.state.count} </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
