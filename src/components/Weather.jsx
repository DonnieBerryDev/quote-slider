import axios from "axios"
import React from "react"

class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        selected: this.props.selected;
    }
  }
  componentDidMount() {
    axios.get("http://localhost/tmd_media_quote_slider/server/api/").then((res) => {
      this.setState({ doors: res.data.door, windows: res.data.window })
      console.log(this.state.doors)
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.doors.map((product) => (
            <li key={product.id}>{product.subproduct}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Weather
