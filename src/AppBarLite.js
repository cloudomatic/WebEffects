import * as React from 'react';
import Text from './Text';
import AppBar from '@mui/material/AppBar';

// https://jsfiddle.net/yX3p9/7/

export default function AppBarLite() {

  return (
    <AppBar color="transparent" position="fixed" elevation={0}>
    <div id="div-app-bar" style={{display: "table", backgroundColor: "black", width: "100%", margin: "0 0 0 0"}}>
      <div id="div-app-bar-top-row" style={{display: "table-cell", margin: "0 1.9vw 0 0", verticalAlign: "middle"}}>
        <div id="div-left-side-icons" style={{float: "left"}}>
          <div style={{padding: "0.4em 0 0.5em 0.4em", display: "flex", float: "left"}}>
            <img style={{width: "2em", paddingRight: "0.5em"}} src="logo.png"  />
            <Text color="white" fontWeight="bold" fontSize="1.4em">
              Drager AI
            </Text>
          </div>
        </div>
        <div id="div-right-side-icons" style={{float: "right", marginRight: "1vw"}}>
          <span style={{verticalAlign: "middle", marginRight: "0em"}}>
          </span>
          <span style={{verticalAlign: "middle", marginRight: "0em"}}>
          </span>
          <span>
            <Text fontSize="0.9em" fontWeight="bold">
            </Text>
          </span>
        </div>
      </div>
    </div>
    </AppBar>
  )
}

