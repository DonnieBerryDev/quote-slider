import React from "react"

let element = document.querySelector(".input")

class Dimensions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: "",
      projection: "",
      inputStage: "1",
      leaving: false,
      inputStageName: "Dimensions",
    }
  }

  setWidth = (e) => {
    this.setState({ width: e.target.value })
    this.props.setWidth(e.target.value)
  }

  setProjection = (e) => {
    this.setState({ projection: e.target.value })
    this.props.setProjection(e.target.value)
  }

  advanceUserInput = () => {
    this.setState({ leaving: true })
    let delay = setInterval(() => {
      this.setState({ leaving: false })
      this.props.setInputStage("1")
      clearInterval(delay)
    }, 500)
  }

  handleBack = () => {
    this.props.setStage("1")
  }

  render() {
    return (
      <div className="input-container">
        <div className="advance_button">
          <button
            className="btn_advance"
            onClick={() => this.advanceUserInput()}
          >
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
            this.state.leaving ? "leaving-anim input" : "input entering-anim"
          }
        >
          <form>
            <label for="width">Width (mm)</label>
            <select
              id="width"
              value={this.state.width}
              onChange={this.setWidth}
            >
              <option value="n/a">Please Select a Size</option>
              <option value="1m">1m</option>
              <option value="2m">2m</option>
              <option value="3m">3m</option>
              <option value="4m">4m</option>
            </select>
            <label for="projection">Projection</label>
            <select
              id="projection"
              value={this.state.projection}
              onChange={this.setProjection}
            >
              <option value="n/a">Please Select a Size</option>
              <option value="5m">5m</option>
              <option value="6m">6m</option>
              <option value="7m">7m</option>
              <option value="8m">8m</option>
            </select>
          </form>
        </div>
      </div>
    )
  }
}

export default Dimensions
