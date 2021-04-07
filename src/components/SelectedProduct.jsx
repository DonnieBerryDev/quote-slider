import axios from "axios"
import React from "react"

class SelectedProduct extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      doors: [],
      windows: [],
      stage: "1",
      selected: this.props.selected,
    }
  }

  // Api Call to main table
  componentDidMount() {
    axios.get("./api/").then((res) => {
      this.setState({ doors: res.data.door, windows: res.data.window })
    })
  }

  setAdditionalprod = (product) => {
    // Assign ID's of products which have additional products in the main DB. For e.g, Product ID 5 has additional products, so in this case,
    // move to stage two. IF a product is clicked which has no additional products, move to stage 3 instead
    if (product.id === 5 || product.id === 6 || product.styles === "Y") {
      this.props.setStage("2")
      this.props.setAdditionalprod(
        product.id,
        product.subproduct,
        product.img_url
      )
    } else {
      this.props.setStage("3")
      this.props.setAdditionalprod(
        product.id,
        product.subproduct,
        product.img_url
      )
    }
  }

  render() {
    return (
      <div className="render-items">
        {/* Simple back button, move back to stage 0 */}
        {/* <a
          href="#"
          className="btn_back"
          onClick={() => this.props.setStage("0")}
        >
          Back
        </a> */}
        <div className="list-container">
          {this.state[this.state.selected].map((product) => (
            <div
              className="list-box load-anim"
              key={product.id}
              onClick={() => this.setAdditionalprod(product)}
            >
              <div
                class="list-box-img"
                style={{ backgroundImage: `url(${product.img_url})` }}
              >
                {/* <img
                  src={product.img_url}
                  className="product_img contain"
                  alt="product-img"
                /> */}
              </div>
              <div className="list-box-text">
                <h5>{product.subproduct}</h5>
              </div>
              <div className="list-box-quote">
                <h5>Start {product.subproduct} quote</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default SelectedProduct
