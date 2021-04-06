import React from "react"
import axios from "axios"

const API = "http://localhost/contact/index.php"

class Quote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: "",
      mailSent: false,
      error: null,
      width: this.props.width,
      postcode: this.props.postcode,
      projection: this.props.projection,
      additionalprod: this.props.additionalprod.name,
      additionalprod2: this.props.additionalprod2,
      colour: this.props.colour,
      selected: this.props.selected,
    }
  }

  handleBack = () => {
    this.props.setInputStage("2")
  }

  handleFormSubmit = (e) => {
    e.preventDefault()

    axios({
      method: "post",
      url: `${API}`,
      headers: { "content-type": "application/json" },
      data: this.state,
    })
      .then((result) => {
        this.setState({
          mailSent: result.data.sent,
        })
      })
      .catch((error) => this.setState({ error: error.message }))
    console.log(this.state)
  }

  render() {
    return (
      <div className="input-container">
        <div className="advance_button">
          <button className="btn_advance" onClick={() => this.advanceUser()}>
            Next
          </button>
        </div>

        <div className="back_button">
          <button className="btn_back" onClick={() => this.handleBack()}>
            Back
          </button>
        </div>
        <div className="input-flex">
          <div className="input-left"></div>
          <div className="input-right">
            <div className="input-right-box">
              <div className="input-right-box-left">
                <img src={this.props.additionalprod.img} alt="" />
              </div>
              <div className="input-right-box-right"></div>
            </div>
            <div className="input-right-text">
              <div className="quote-form">
                <form method="POST" action="#">
                  <div>
                    <label for="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      value={this.state.name}
                      onChange={(e) => this.setState({ name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                      id="message"
                      value={this.state.message}
                      onChange={(e) =>
                        this.setState({ message: e.target.value })
                      }
                      required
                    />
                    <button
                      type="submit"
                      onClick={(e) => this.handleFormSubmit(e)}
                    >
                      Submit
                    </button>
                  </div>
                  {this.state.mailSent && (
                    <div>Thank you for contcting us.</div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Quote
