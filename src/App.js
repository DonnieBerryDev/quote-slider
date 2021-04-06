import SelectedProduct from "./components/SelectedProduct"
import Main from "./components/Main"
import SubProducts from "./components/SubProducts"
import UserInput from "./components/UserInput"
import React from "react"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: "",
      stage: "0",
      additionalprod: {
        name: "",
        id: "",
        img: "",
      },
      additionalprod2: "",
    }
  }

  // 'stage' is passed from child components to parent (app.js) and that as assigned to state for child components to use
  setStage = (stage) => {
    this.setState({ stage: stage })
  }

  setSubProd = (additionalprod2) => {
    this.setState({ additionalprod2: additionalprod2 })
  }

  // 'selected' is passed from child components to parent (app.js) and that as assigned to state for child components to use
  setSelected = (selected) => {
    this.setState({ selected: selected })
  }

  // 'additionalprod' is passed from child components to parent (app.js) and that as assigned to state for child components to use
  setAdditionalprod = (productid, productsubproduct, productimg) => {
    this.setState({
      additionalprod: {
        name: productsubproduct,
        id: productid,
        img: productimg,
      },
    })
  }

  render() {
    return (
      <>
        {/* Renders content depending on what the "stage" state is currently at. Stage 0 is the first page. */}

        {this.state.stage === "0" ? (
          <Main
            stage={this.state.stage}
            setStage={this.setStage.bind(this)}
            setSelected={this.setSelected.bind(this)}
          />
        ) : null}

        {this.state.stage === "1" ? (
          <SelectedProduct
            stage={this.state.stage}
            selected={this.state.selected}
            setStage={this.setStage.bind(this)}
            setSelected={this.setSelected.bind(this)}
            setAdditionalprod={this.setAdditionalprod.bind(this)}
          />
        ) : null}

        {this.state.stage === "2" ? (
          <SubProducts
            stage={this.state.stage}
            selected={this.state.selected}
            additionalprod={this.state.additionalprod}
            setStage={this.setStage.bind(this)}
            setSelected={this.setSelected.bind(this)}
            setSubProd={this.setSubProd.bind(this)}
            additionalprod2={this.state.additionalprod2}
          />
        ) : null}

        {this.state.stage === "3" ? (
          <UserInput
            stage={this.state.stage}
            selected={this.state.selected}
            additionalprod={this.state.additionalprod}
            setStage={this.setStage.bind(this)}
            setSubProd={this.setSubProd.bind(this)}
            additionalprod2={this.state.additionalprod2}
          />
        ) : null}
      </>
    )
  }
}

export default App
