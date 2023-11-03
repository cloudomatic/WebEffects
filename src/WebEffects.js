import * as React from 'react';

import AppBarLite from './AppBarLite'
import EmptyComponent from './EmptyComponent'
import Text from "./Text.js";
import ExpandingTileSet from "./ExpandingTileSet.js";
import SpinningNumbers from "./SpinningNumbers.js";
import SiteFooter from './SiteFooter.js';
import Masthead from './Masthead.js';
import WhatWeDo from './WhatWeDo.js';
import LatestNews from './LatestNews.js';
import UpcomingEvents from './UpcomingEvents.js';
import SimpleStatement from './SimpleStatement.js';
import CoolMenu from './CoolMenu.js';
import MenuPanel from './MenuPanel.js';
import Toolbar from './Toolbar.js';
import DocumentToC from './DocumentToC.js';

export default function WebEffect() {

  document.body.style.backgroundColor="white"

  const styles = {
    rowDiv : {
      padding: "0 0 2.0em 0"
    }
  }

  const mobile = false;

  return (
    <>
          <AppBarLite />
          <div id="app-bar-spacer" style={{height: "0.0em"}} />
          <div style={styles.rowDiv}>
            <LatestNews mobile={mobile} />
            <MenuPanel />
          </div>
          <div style={styles.rowDiv}>
            <SpinningNumbers />
          </div>
          <div style={styles.rowDiv}>
						<UpcomingEvents
								 date="November 1st-2nd, 2023"
								 location="Bletchley Park, London, UK"
								 description="Visit the Drager booth at 1-G4 to learn about the Deep Space Kernel and how Drager is bringing next-generation deep learning to clients arond the globe"
								 image="ai_summit.webp"
							 />
          </div>
          <div style={styles.rowDiv}>
            <ExpandingTileSet mobile={true} />
          </div>
          <div style={styles.rowDiv}>
             <UpcomingEvents
               date="Dec 10 – Dec 16, 2023"
               location="New Orleans - Ernest N. Morial Convention Center"
               description="Co-founder and CTO Gerhard Bauer will deliver the Tuesday 10am keynote address, and join academic and industry leaders for an AI safety panel on Thursday at 1pm"
               image="nips2023.jpeg"
             />
            <SiteFooter />
          </div>
    </>
  )
}
