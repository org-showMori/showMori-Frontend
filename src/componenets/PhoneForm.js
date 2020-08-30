import React from 'react';

// input 다루기
class PhoneForm extends React.Component {
  state = {
    name: '',
    phone: ''
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // 상태값을 onCreate를 통해 부모에게 전달
    this.props.onCreate(this.state); 
    // 상태 초기화
    this.setState({
      name: '',
      phone: ''
    })

  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        ></input>
        <input
          placeholder="phone"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        ></input>
        <button type="submit">등록</button>
      </form>
    );
  }
  
}

export default PhoneForm;