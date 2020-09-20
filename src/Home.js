import React from "react";
import Content from "./content";
import { qoutes } from "./data";

class Home extends React.Component {
  state = {
    key: 0,
    text: "8",
    emoji: "",
  };

  onClickHandler = (event) => {
    const random = Math.floor(Math.random() * 31) + 0;
    // console.log(random);
    const color = document.getElementsByClassName("color");
    color[0].classList.remove("bg-white");
    color[0].classList.add("color-animation");

    const disbaleBtn = document.getElementById("btn");
    disbaleBtn.setAttribute("disabled", "disabled");
    disbaleBtn.classList.add("cursor-not-allowed");

    this.setState({
      text: "",
      emoji: "",
    });

    setTimeout(() => {
      this.setState({
        text: qoutes[`${random}`].text,
        key: qoutes[`${random}`].key,
        emoji: qoutes[`${random}`].emoji,
      });

      const color = document.getElementsByClassName("color");
      color[0].classList.add("bg-white");
      color[0].classList.remove("color-animation");

      console.log(disbaleBtn);
    }, 5000);
  };

  onResetHandler = () => {
    this.setState({
      text: "8",
      key: 0,
    });
  };
  render() {
    return (
      <div className="bg-primary w-screen h-screen md:p-20 text-center py-5">
        <h1
          className="text-6xl whitespace-normal px-4 text-white mb-5"
          style={{ fontFamily: "Ranchers ,cursive" }}
        >
          Motivational 8 Ball
        </h1>
        <div className="bg-black rounded-full m-auto flex justify-center w-64 h-64 md:w-500 md:h-500 ">
          <Content onClickHandler={this.onClickHandler} data={this.state} />
        </div>
        <button
          onClick={this.onResetHandler}
          className="px-10 py-4 border-2 border-white block text-4xl text-white hover:bg-white hover:text-primary focus:bg-white focus:text-primary mx-auto mt-20"
          style={{ fontFamily: "Ranchers ,cursive" }}
        >
          reset
        </button>
      </div>
    );
  }
}

export default Home;
