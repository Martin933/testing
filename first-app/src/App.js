import React from "react";
import CustomButton from "./Components/button.comppnent";

class App extends React.Component {
  constructor() {
    super();
    this.state = { name: "helo" };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = () => {
    console.log("worked");
    this.setState({
      name: this.state.name + "hey"
    });
  };

  render() {
    return (
      <div>
        {/* <button onClick={this.handleChange}>ahhsjhfjshdjfhs</button> */}
        <p>{this.state.name}</p>
        <CustomButton a={this.handleChange}></CustomButton>
      </div>
    );
  }
}
export default App;
