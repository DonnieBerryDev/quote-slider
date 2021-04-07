import React from "react"
import axios from "axios"

class Windows extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      windowStyles: [],
      selected: this.props.selected,
      additionalprod: this.props.additionalprod,
      additionalprod2: "",
    }
  }

  componentDidMount() {
    axios.get("./api/windowStyles.php").then((res) => {
      this.setState({ windowStyles: res.data })
      console.log(this.state.windowStyles)
    })
  }

  setSubProd = (product) => {
    this.setState({ additionalprod2: product })

    this.props.setStage("3")
    this.props.setSubProd(product)
    // history.pushState({}, "", "/newpage")
  }

  handleBack = () => {
    this.props.setStage("1")
  }

  render() {
    return (
      <div className="render-items">
        {/* Goes back to stage 1 on click, back button */}
        {/* <a href="#" class="btn_back" onClick={() => this.handleBack()}>
          Back
        </a> */}
        <div className="list-container">
          {this.state.windowStyles.map((product) => (
            <div
              className="list-box load-anim"
              onClick={() => this.setSubProd(product.style)}
            >
              <div className="list-box-img single-img">
                <img src={product.img_url} className="product_img contain" />
              </div>
              <div className="list-box-quote single-text">
                <h5> Select {product.style}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Windows
