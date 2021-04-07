import React from "react"
import axios from "axios"

class ChooseColours extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colours: [],

      selectedColour: "",
      leaving: false,
    }
  }

  setInputStage = () => {
    this.props.setInputStage("3")
  }

  componentDidMount() {
    axios.get("./api/colours.php").then((res) => {
      this.setState({ colours: res.data })
    })
  }

  testArray = () => {
    console.log(this.state.colours)
  }

  handleBack = () => {
    this.props.setInputStage("1")
  }

  setColour = (selectedColour) => {
    this.props.setColour(selectedColour)
    this.props.setInputStage("3")
  }

  render() {
    return (
      <div className="input-container">
        <div className="advance_button">
          <button className="btn_advance" onClick={() => this.setInputStage()}>
            Next
          </button>
        </div>
        <div className="back_button">
          <button className="btn_back" onClick={() => this.handleBack()}>
            Back
          </button>
        </div>
        <div
          className={
            this.state.leaving
              ? "leaving-anim input additionalWidth"
              : "input entering-anim additionalWidth"
          }
        >
          <div className="list-colours">
            {this.state.colours.map((colour) => (
              <div
                style={{ background: colour.hex }}
                className="colour-block"
                onClick={() => this.setColour(colour.colour)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ChooseColours
