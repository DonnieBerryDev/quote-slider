import React from "react"
import Doors from "./products/Doors.jsx"
import Windows from "./products/Windows.jsx"

class SubProducts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subproducts: [],
      selected: this.props.selected,
      additionalprod: this.props.additionalprod,
      additionalprod2: "",
    }
  }

  // Api Call to subproducts table

  render() {
    return (
      <div>
        {this.state.selected === "doors" ? (
          <Doors
            stage={this.state.stage}
            selected={this.state.selected}
            additionalprod={this.state.additionalprod}
            setStage={this.props.setStage.bind(this)}
            setSelected={this.props.setSelected.bind(this)}
            setSubProd={this.props.setSubProd.bind(this)}
            additionalprod2={this.state.additionalprod2}
          />
        ) : null}

        {this.state.selected === "windows" ? (
          <Windows
            stage={this.state.stage}
            selected={this.state.selected}
            additionalprod={this.state.additionalprod}
            setStage={this.props.setStage.bind(this)}
            setSelected={this.props.setSelected.bind(this)}
            setSubProd={this.props.setSubProd.bind(this)}
            additionalprod2={this.state.additionalprod2}
          />
        ) : null}
      </div>
    )
  }
}

export default SubProducts
