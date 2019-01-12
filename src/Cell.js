import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  // handleClickEvent =(e) => {
  //   this.props.setSelectedColour(this.state.color)
  // }
  handleClickEvent =(e) => {
    this.setState({
      color: this.props.updateColor
    })
  }




  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClickEvent}>
      </div>
    )
  }

}
