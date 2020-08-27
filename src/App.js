import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount() {
    setTimeout( () => {
      this.setState({ isLoading: false });
      // ***** state를 직접적으로 바로 건들이는 것은 매우 위험한 습관. setState를 습관하하자.
    }, 6000);
  }

  render() {
    const { isLoading } = this.state; // Q. 정확한 이해 필요
    return <div>{isLoading ? "Loading..." : "Complete!"}</div>;
  }
}

export default App;
