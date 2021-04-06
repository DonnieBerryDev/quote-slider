import React from "react"
import Colours from "./Colours"

class Colours extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputStageName: "Colours",
      colours: [
        {
          colour: "red",
          hex: "#FF0000",
        },
        {
          colour: "brown",
          hex: "#964B00",
        },
        {
          colour: "grey",
          hex: "#808080",
        },
      ],
    }
  }
  render() {
    return {}
  }
}

export default Colours
