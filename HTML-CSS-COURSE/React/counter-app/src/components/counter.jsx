import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps : ", prevProps);
    console.log("prevState : ", prevState);
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }
  render() {
    console.log("counter-Render");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  formateCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
