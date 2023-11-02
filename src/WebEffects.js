import * as React from 'react';

import AppBarLite from './AppBarLite'
import EmptyComponent from './EmptyComponent'
import Text from "./Text.js";
import ExpandingTileSet from "./ExpandingTileSet.js";
import SpinningNumbers from "./SpinningNumbers.js";
import SiteFooter from './SiteFooter.js';
import Masthead from './Masthead.js';
import WhatWeDo from './WhatWeDo.js';
import UpcomingEvents from './UpcomingEvents.js';

export default function HostManager() {

  document.body.style.backgroundColor="white"
//window.getTheme().componentAreaBackgroundColor

  const styles = {
    rowDiv : {
      padding: "0 0 2.0em 0"
    }
  }

  return (
        
    <>
      
          <AppBarLite />
          <div id="app-bar-spacer" style={{height: "0.0em"}} />
          <div style={styles.rowDiv}>
            <WhatWeDo />
          </div>
          <div style={styles.rowDiv}>
            <SpinningNumbers />
          </div>
          <div style={styles.rowDiv}>
            <ExpandingTileSet />
          </div>
          <div style={styles.rowDiv}>
            <UpcomingEvents />
          </div>
 
          <div style={styles.rowDiv}>
            <SiteFooter />
          </div>
    </>
  )
}
