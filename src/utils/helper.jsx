import React, { Component } from 'react';

class DataViewer extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  componentWillUnmount() {
    // Clean up any resources here
  }

  render() {
    if (!this.state.data) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        {this.state.data.map(item => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default DataViewer;


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export Counter;



function MyComponent(props) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export MyComponent;
