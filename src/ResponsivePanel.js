import * as React from 'react';
import Text from "./Text.js";

export default function ResponsivePanel() {

  return (
        <div style={{display: "flex", flexWrap: "wrap", height: "10.0em", backgroundColor: "red", justifyContent: "center"}}>
          <div id="item-1" style={{width: "20em", backgroundColor: "green", height: "10em"}} />
          <div id="item-1" style={{width: "20em", backgroundColor: "blue", height: "10em"}} />
          <div id="item-1" style={{width: "20em", backgroundColor: "yellow", height: "10em"}} />
        </div>
  );

}
