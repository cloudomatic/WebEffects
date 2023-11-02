import * as React from 'react';

//import AppBarLite from './AppBarLite'
import EmptyComponent from './EmptyComponent'
import Text from "./Text.js";
import ExpandingTileSet from "./ExpandingTileSet.js";
import SpinningNumbers from "./SpinningNumbers.js";
import SiteFooter from './SiteFooter.js';
import Masthead from './Masthead.js';
import WhatWeDo from './WhatWeDo.js';
import AppBarLite from './AppBarLite.js';


export default function HostManager() {

  document.body.style.backgroundColor=window.getTheme().componentAreaBackgroundColor

  const styles = {
    rowDiv : {
      padding: "0 0 2.0em 0"
    }
  }

  return (
    <>
          <div id="div-app-bar">
          </div>
          <div style={styles.rowDiv}>
            <Masthead />
          </div>
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
            <SiteFooter />
          </div>
    </>
  )
}
