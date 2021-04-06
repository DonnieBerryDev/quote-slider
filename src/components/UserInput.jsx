import React from "react"
import Dimensions from "./userInput/Dimensions.jsx"
import Postcode from "./userInput/Postcode.jsx"
import ChooseColours from "./userInput/ChooseColours.jsx"
import Quote from "./userInput/Quote.jsx"

class UserInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: "",
      projection: "",
      inputStage: "0",
      postcode: "",
      colour: "",
      inputStageName: "",
    }
  }

  componentDidUpdate() {
    window.onpopstate = (e) => {
      alert("fft6f")
    }
  }
  handleWidthChange = (e) => {
    this.setState({ width: e.target.value })
    console.log(this.props.additionalprod2)
  }

  handleProjectionChange = (e) => {
    this.setState({ projection: e.target.value })
  }

  setColour = (colour) => {
    this.setState({ colour: colour })
  }

  handleBack = () => {
    // this.props.setSubProd("")
    // if (this.props.additionalprod2 == "") {
    //   this.props.setStage("1")
    // } else {
    //   this.props.setStage("2")
    // }

    this.props.setStage("0")
    this.props.setSubProd("")
  }

  setInputStage = (inputStage) => {
    this.setState({ inputStage: inputStage })
  }

  setPostcode = (postcode) => {
    this.setState({ postcode: postcode })
  }

  setWidth = (width) => {
    this.setState({ width: width })
  }

  setProjection = (projection) => {
    this.setState({ projection: projection })
  }

  render() {
    window.onbeforeunload = function () {
      return "Leaving this page will reset the wizard"
    }
    return (
      <>
        <div className="container">
          <div className="container-5050">
            <div className="userinput-left">
              {this.state.inputStage == "0" ? (
                <img src="products/windows/userinput/stock_1.jpeg" alt="" />
              ) : this.state.inputStage == "1" ? (
                <img src="products/windows/userinput/stock_2.jpeg" alt="" />
              ) : this.state.inputStage == "2" ? (
                <img src="products/windows/userinput/stock_4.jpeg" alt="" />
              ) : this.state.inputStage == "3" ? (
                <img src="products/windows/userinput/stock_3.jpeg" alt="" />
              ) : null}
            </div>
            <div className="userinput-right">
              <div id="progress-bar">
                <div id="progress-bar-bg">
                  <div
                    id="progress-bar-progress"
                    style={{
                      width:
                        this.state.inputStage == "0"
                          ? "25%"
                          : this.state.inputStage == "1"
                          ? "50%"
                          : this.state.inputStage == "2"
                          ? "75%"
                          : this.state.inputStage == "3"
                          ? "100%"
                          : "",
                    }}
                  ></div>
                </div>
                <div id="progress-bar-header">
                  <h3>{this.state.selected}</h3>
                </div>
              </div>
              {this.state.inputStage === "0" ? (
                <Dimensions
                  additionalprod={this.props.additionalprod}
                  additionalprod2={this.props.additionalprod2}
                  selected={this.props.selected}
                  setStage={this.props.setStage.bind(this)}
                  setInputStage={this.setInputStage.bind(this)}
                  setWidth={this.setWidth.bind(this)}
                  setProjection={this.setProjection.bind(this)}
                />
              ) : null}

              {this.state.inputStage === "1" ? (
                <Postcode
                  additionalprod={this.props.additionalprod}
                  additionalprod2={this.props.additionalprod2}
                  selected={this.props.selected}
                  setInputStage={this.setInputStage.bind(this)}
                  setPostcode={this.setPostcode.bind(this)}
                />
              ) : null}

              {/* {this.state.inputStage === "2" ? (
          <Postcode
            additionalprod={this.props.additionalprod}
            additionalprod2={this.props.additionalprod2}
            selected={this.props.selected}
            setInputStage={this.setInputStage.bind(this)}
            setPostcode={this.setPostcode.bind(this)}
          />
        ) : null} */}

              {this.state.inputStage === "2" ? (
                <ChooseColours
                  additionalprod={this.props.additionalprod}
                  additionalprod2={this.props.additionalprod2}
                  selected={this.props.selected}
                  setInputStage={this.setInputStage.bind(this)}
                  width={this.state.width}
                  projection={this.state.width}
                  postcode={this.state.postcode}
                  setColour={this.setColour.bind(this)}
                  setPostcode={this.setPostcode.bind(this)}
                />
              ) : null}

              {this.state.inputStage === "3" ? (
                <Quote
                  additionalprod={this.props.additionalprod}
                  additionalprod2={this.props.additionalprod2}
                  selected={this.props.selected}
                  setInputStage={this.setInputStage.bind(this)}
                  width={this.state.width}
                  projection={this.state.width}
                  postcode={this.state.postcode}
                  colour={this.state.colour}
                />
              ) : null}
            </div>
          </div>
        </div>
        {/* {this.state.inputStage === "0" ? (
          <Dimensions
            additionalprod={this.props.additionalprod}
            additionalprod2={this.props.additionalprod2}
            selected={this.props.selected}
            setStage={this.props.setStage.bind(this)}
            setInputStage={this.setInputStage.bind(this)}
            setWidth={this.setWidth.bind(this)}
            setProjection={this.setProjection.bind(this)}
          />
        ) : null}

        {this.state.inputStage === "1" ? (
          <Postcode
            additionalprod={this.props.additionalprod}
            additionalprod2={this.props.additionalprod2}
            selected={this.props.selected}
            setInputStage={this.setInputStage.bind(this)}
            setPostcode={this.setPostcode.bind(this)}
          />
        ) : null}

        {/* {this.state.inputStage === "2" ? (
          <Postcode
            additionalprod={this.props.additionalprod}
            additionalprod2={this.props.additionalprod2}
            selected={this.props.selected}
            setInputStage={this.setInputStage.bind(this)}
            setPostcode={this.setPostcode.bind(this)}
          />
        ) : null} */}
        {this.state.inputStage === "2" ? (
          <ChooseColours
            additionalprod={this.props.additionalprod}
            additionalprod2={this.props.additionalprod2}
            selected={this.props.selected}
            setInputStage={this.setInputStage.bind(this)}
            width={this.state.width}
            projection={this.state.width}
            postcode={this.state.postcode}
            setColour={this.setColour.bind(this)}
            setPostcode={this.setPostcode.bind(this)}
          />
        ) : null}
        {this.state.inputStage === "3" ? (
          <Quote
            additionalprod={this.props.additionalprod}
            additionalprod2={this.props.additionalprod2}
            selected={this.props.selected}
            setInputStage={this.setInputStage.bind(this)}
            width={this.state.width}
            projection={this.state.width}
            postcode={this.state.postcode}
            colour={this.state.colour}
          />
        ) : null}{" "}
        */}
      </>
    )
  }
}

export default UserInput
