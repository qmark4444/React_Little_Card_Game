import React, { Component } from "react";

class Logo extends Component {
  static displayName = "Logo";

  render() {
    return (
      <svg
        width="200"
        height="100"
        viewBox="0 0 200 350"
        id="svgLogo"
      >
        <g>
          <rect
            style={{
              fill:'lightblue',
              fillOpacity:1,
              stroke:'',
              strokeWidth:2,
              strokeMiterlimit:4,
              strokeDasharray:'none',
              strokeOpacity:1
            }}
            id="OL"
            width="211.28172"
            height="199.94244"
            x="5.4841413"
            y="37" />
          <rect
            id="LV"
            width="41.577381"
            height="153.45834"
            x="24.190477"
            y="61.898811"
            style={{
              strokeWidth:0.37226507,
              fill:'red'
            }} />
          <rect
            id="LH"
            width="146.65477"
            height="19.654755"
            x="24.190462"
            y="195.70238"
            style={{
              strokeWidth:0.31524804,
              fill:'red'
            }} />
          <rect
            id="QH"
            width="99.029762"
            height="18.142857"
            x="71.815475"
            y="61.898819"
            style={{
              strokeWidth:0.25593761
            }} />
          <rect
            id="QV"
            width="20.410706"
            height="130"
            x="150.43452"
            y="61.898819"
            style={{
              strokeWidth:0.23363407
            }} />
          <path
            id="QA"
            style={{
              fill:'none',
              fillOpacity:1,
              stroke:'yellow',
              strokeWidth:19.21442986,
              strokeMiterlimit:4,
              strokeDasharray:'none',
              strokeOpacity:1
            }}
            type="arc"
            cx="159.50595"
            cy="131.14861"
            rx="35.289242"
            ry="33.480274"
            d="m 194.79519,131.14861 a 35.289242,33.480274 0 0 1 -17.7583,29.05677 35.289242,33.480274 0 0 1 -35.4022,-0.18722 35.289242,33.480274 0 0 1 -17.41579,-29.24278"
          />
        </g>
      </svg>
    )
  }
}

export default Logo;