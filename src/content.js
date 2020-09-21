import React, { Component } from "react";

// console.log(data.posts[2].key);

class Content extends Component {
  render() {
    return (
      <button
        id="btn"
        className=" w-40 h-40 md:w-300 md:h-300 flex align-middle m-auto rounded-full justify-center focus:outline-none px-4 color bg-white"
        onClick={this.props.onClickHandler}
      >
        <h1
          className={
            this.props.data.key === 0
              ? "text-black m-auto text-3xl md:text-6xl whitespace-normal"
              : "text-black m-auto text-sm md:text-3xl whitespace-normal "
          }
        >
          {this.props.data.text}
          <br />
          {this.props.data.key === 0 ? "" : this.props.data.emoji}
        </h1>
      </button>
    );
  }
}

export default Content;
