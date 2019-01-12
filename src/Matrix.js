import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColour: null,
      colourPalette: null
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} setSelectedColour={this.setSelectedColour} updateColor={this.state.colourPalette}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  setSelectedColour =(newColour) => {
    this.setState({
      selectedColour: newColour
    })
  }
  setColourPalette =(newColour) => {
    this.setState({
      colourPalette: newColour
    })
  }


  render() {
    return (
      <div id="app">
        <ColorSelector setColourPalette={this.setColourPalette} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
