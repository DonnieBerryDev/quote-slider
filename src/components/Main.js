import React from "react"
import axios from "axios"
import SelectedProduct from "./SelectedProduct.jsx"

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: "",
      stage: "1",
    }
  }

  componentDidMount() {
    axios.get("./api/").then((res) => {
      console.log(res)
    })
  }

  // When the user clicks a product, it is added to state and passed to App.js, the stage is moved to stage: 1
  setProduct = (product) => {
    this.setState({ selected: product })
    this.setState({ stage: "1" })
    this.props.setStage("1")
    this.props.setSelected(product)
  }

  render() {
    return (
      <div className="render-items">
        <div className="list-container height-100">
          <div className="list-box" onClick={() => this.setProduct("windows")}>
            <div className="main-box-img">
              <img
                src="products/windows/main.jpg"
                className="main-img"
                alt=""
              />
              <div className="main-box-text">
                <h4>Windows</h4>
                <p>
                  Double glazed windows add style, security and energy
                  efficiency to your home.
                </p>
              </div>
            </div>

            <div className="main-box-quote">
              <h5>Window Quote</h5>
            </div>
          </div>

          <div className="list-box" onClick={() => this.setProduct("doors")}>
            <div className="main-box-img">
              <img src="products/doors/main.jpg" className="main-img" alt="" />
              <div className="main-box-text">
                <h4>Doors</h4>
                <p>
                  Strong and secure. Choose from a wide range of uPVC, composite
                  and aluminium doors.
                </p>
              </div>
            </div>

            <div className="main-box-quote">
              <h5>Door Quote</h5>
            </div>
          </div>

          <div className="list-box" onClick={() => this.setProduct("doors")}>
            <div className="main-box-img">
              <img
                src="products/conservatories/conservatories.jpeg"
                className="main-img"
                alt=""
              />
              <div className="main-box-text">
                <h4>Conservatories</h4>
                <p>
                  Strong and secure. Choose from a wide range of uPVC, composite
                  and aluminium doors.
                </p>
              </div>
            </div>

            <div className="main-box-quote">
              <h5>Conservatories Quote</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
