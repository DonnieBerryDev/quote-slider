import React from "react"
import axios from "axios"

class Doors extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subproducts: [],
      //   windowStyles: [],
      selected: this.props.selected,
      additionalprod: this.props.additionalprod,
      additionalprod2: "",
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost/tmd_media_quote_slider/server/api/subproducts.php")
      .then((res) => {
        this.setState({ subproducts: res.data[this.props.additionalprod.id] })
      })
  }

  setSubProd = (product) => {
    this.setState({ additionalprod2: product })
    this.setState({ stage: "3" })
    this.props.setStage("3")
    this.props.setSubProd(product)
  }

  renderState = () => {
    console.log(this.state.subproducts)
  }

  render() {
    return (
      <div>
        <div className="render-items">
          {/* Goes back to stage 1 on click, back button */}
          {/* <a href="#" class="btn_back" onClick={() => this.props.setStage("1")}>
            Back
          </a> */}
          <a href="#" onClick={() => this.renderState()}>
            Click
          </a>
          <div className="list-container">
            {this.state.subproducts.map((product) => (
              <div className="list-box load-anim">
                <a href="#" onClick={() => this.setSubProd(product.product)}>
                  <div className="list-box-img single-img">
                    <img
                      src={product.img_url}
                      className="product_img contain"
                    />
                  </div>
                  <div className="list-box-text single-text">
                    <h5>{product.product}</h5>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Doors
