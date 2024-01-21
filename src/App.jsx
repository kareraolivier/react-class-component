import { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="m-4 text-lg">{this.state.count}</h1>
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}
          className="bg-green-600 text-white p-2 rounded-sm shadow-sm"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default MyComponent;
