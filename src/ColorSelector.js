import React, { Component } from 'react';

export default class ColorSelector extends Component {

//   componentToHex =(c)=> {
//     var hex = c.toString(16);
//     return hex.length == 1 ? "0" + hex : hex;
// }
//
//   rgbToHex = (r, g, b)=> {
//     return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
// }

  whichColour = (e) =>{
    this.props.setColourPalette(e.target.style.backgroundColor)
  }


  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}} onClick={this.whichColour}/>
    })
  )

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
