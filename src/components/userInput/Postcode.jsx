import React from "react"
import axios from "axios"

class Postcode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postcode: "",
      longitude: null,
      latitude: null,
      homeLongitude: -4.175721,
      homeLatitude: 55.828962,
      distance: "",
      postcodeResult: null,
      inputStage: "2",
      leaving: false,
      entering: false,
      error: null,
      inputStageName: "Postcode",
    }
  }

  advanceUser = () => {
    // if (this.state.postcodeResult && this.state.error == null) {
    //   this.props.setInputStage("1")
    // } else {
    //   this.setState({
    //     error: "Please enter a valid postcode",
    //   })
    // }

    if (this.state.postcodeResult && this.state.error == null) {
      this.setState({ leaving: true })
      let delay = setInterval(() => {
        this.setState({ leaving: false })
        this.props.setInputStage("2")
        clearInterval(delay)
      }, 500)
    } else {
      this.setState({
        error: "Please enter a valid postcode",
      })
    }
  }

  setPostcode = (input) => {
    this.setState({ postcode: input })
    this.props.setPostcode(input)
    this.CheckPostcode(input)
  }

  handleBack = () => {
    this.props.setInputStage("0")
  }

  handleForm = (e) => {
    e.preventDefault()
    this.advanceUser()
  }

  CheckPostcode = (input) => {
    console.log(input)
    if (input == null) {
      this.setState({
        error: "Enter something!",
      })
    } else {
      axios
        .get("http://api.postcodes.io/postcodes/" + input + "/validate")
        .then((postcodeValid) => {
          this.setState({ postcodeResult: postcodeValid.data.result })
          if (!this.state.postcodeResult && input.length >= 5) {
            this.setState({ error: "You have entered an invalid postcode" })
          } else {
            this.setState({ error: null })
          }
          axios
            .get("http://api.postcodes.io/postcodes/" + input)
            .then((postcode) => {
              this.setState({
                longitude: postcode.data.result.longitude,
                latitude: postcode.data.result.latitude,
              })

              // POSTCODE DISTANCE CALCULATOR, DO NOT TOUCH OR I WON'T BE HAPPY :)

              function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
                var R = 6371 // Radius of the earth in km
                var dLat = deg2rad(lat2 - lat1) // deg2rad below
                var dLon = deg2rad(lon2 - lon1)
                var a =
                  Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(deg2rad(lat1)) *
                    Math.cos(deg2rad(lat2)) *
                    Math.sin(dLon / 2) *
                    Math.sin(dLon / 2)
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
                var d = R * c // Distance in km
                var miles = d * 0.621371 // Distance in miles
                var roundedMiles = miles.toFixed(2)
                return roundedMiles
              }

              function deg2rad(deg) {
                return deg * (Math.PI / 180)
              }

              this.setState({
                distance: getDistanceFromLatLonInKm(
                  this.state.homeLatitude,
                  this.state.homeLongitude,
                  this.state.latitude,
                  this.state.longitude
                ),
              })

              if (this.state.postcodeResult) {
                // this.props.setInputStage("2")

                if (this.state.distance < 10) {
                  this.setState({
                    error: null,
                  })
                } else {
                  this.setState({
                    error:
                      "You have entered a postcode that is more than 10 miles away, we cannot service you. That postcode is " +
                      this.state.distance +
                      " miles away.",
                  })
                }
              } else {
              }
            })
        })
    }
  }

  render() {
    function renderPostcode() {
      return <h1>test</h1>
    }
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
        <div
          className={
            this.state.leaving ? "leaving-anim input" : "input entering-anim"
          }
        >
          <form onSubmit={(e) => this.handleForm(e)}>
            <div className="form_header">
              <h5>Enter Your Postcode</h5>
            </div>
            <input
              className={
                this.state.postcodeResult && !this.state.error
                  ? "highlight-green allCaps"
                  : this.state.error
                  ? "highlight-red allCaps"
                  : this.state.error == null
                  ? "allCaps"
                  : null
              }
              type="text"
              value={this.state.postcode}
              onChange={(e) => {
                this.setPostcode(e.target.value)
              }}
            />

            <div className="error_msg">
              <h5>{this.state.error}</h5>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Postcode
