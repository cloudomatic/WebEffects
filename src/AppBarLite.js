import * as React from 'react';
import Text from './Text';
import AppBar from '@mui/material/AppBar';
import MastheadLogo from './MastheadLogo.js';

// https://jsfiddle.net/yX3p9/7/

export default function AppBarLite({companyName, companyLogo}) {

  return (
    <AppBar color="transparent" position="fixed" elevation={0}>
    <div id="div-app-bar" style={{display: "table", backgroundColor: "black", width: "100%", margin: "0 0 0 0"}}>
      <div id="div-app-bar-top-row" style={{display: "table-cell", margin: "0 1.9vw 0 0", verticalAlign: "middle"}}>
        <div id="div-left-side-icons" style={{float: "left"}}>
          <MastheadLogo
            imageRef={companyLogo}
            label={companyName}
          />
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

