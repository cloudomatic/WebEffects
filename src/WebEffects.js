import * as React from 'react';

import AppBarLite from './AppBarLite';
import ParallaxPanel from './ParallaxPanel';
import ContentEditor from './ContentEditor';
import ExpandingTileSet from "./ExpandingTileSet.js";
import SpinningNumbers from "./SpinningNumbers.js";
import SiteFooter from './SiteFooter.js';
import LatestNewsEnhanced from './LatestNewsEnhanced.js';
import UpcomingEvents from './UpcomingEvents.js';
import SimpleStatement from './SimpleStatement.js';
import SimpleStatementStandalone from './SimpleStatementStandalone.js';
import MenuPanel from './MenuPanel.js';


export default function WebEffects() {

  document.body.style.backgroundColor="white"
  const [windowDimensions, setWindowDimensions] = React.useState(window.getWindowDimensions());
  const [mode, setMode] = React.useState("site"); // "cms" = content management system
  const [viewportWidth, setViewportWidth] = React.useState("100%")
  const [mobile, setMobile] = React.useState(false)

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(window.getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
  }, []);

  // There are certain components that we can "help" along by starting them out in the mobile config
  // This is set when we are on a "known" mobile device, e.g. from the user-agent string
  if (windowDimensions.width < 700) if (!mobile) setMobile(true)

  const deviceOptions = [
    "Small phone (iPhone SE) 600px",
    "Large phone (iPhone 15) 1000px",
    "Tablet (iPad 3) 1500px",
    "Browser 100%"
  ]

  const setDeviceType = (type) => {
    if (type.includes("Small")) {
      setViewportWidth("500px")
      setMobile(true)
    } else if (type.includes("Large")) {
      setViewportWidth("800px")
      if (mobile) setMobile(false)
    }
    else if (type.includes("Tablet")) {
      setViewportWidth("1000px")
      if (mobile) setMobile(false)
    } else if (type.includes("Browser")) {
      setViewportWidth("100%")
      if (mobile) setMobile(false)
    }
  }

  const componentResolver = (name, content) => {
    if (name === "LatestNews") return <LatestNewsEnhanced mobile={mobile} content={content} />
    else if (name === "ParallaxPanel") return <ParallaxPanel mobile={mobile} content={content} />
    else if (name === "MenuPanel")  return <MenuPanel mobile={mobile} content={content} />
    else if (name === "Spacer") return <div id="Spacer" style={{backgroundColor: "white", height: "2.0em"}} />
    else if (name === "SpinningNumbers") return <SpinningNumbers mobile={mobile} content={content} />
    else if (name === "UpcomingEvents") return <UpcomingEvents mobile={mobile} content={content} />
    else if (name === "ExpandingTileSet") return <ExpandingTileSet mobile={mobile} content={content} />
    else if (name === "SimpleStatement") return <SimpleStatement mobile={mobile} content={content} />
    else if (name === "SimpleStatementStandalone") return <SimpleStatementStandalone mobile={mobile} content={content} />
    else if (name === "SiteFooter") return <SiteFooter mobile={mobile} content={content} />
    return <div>Unknown Panel</div>
  }

  return (
    <div>
        <AppBarLite companyName={window.getContent()["companyName"]} companyLogo={window.getContent()["companyLogo"]}  setMode={setMode} setDeviceType={setDeviceType} deviceOptions={deviceOptions} />
        <div id="app-bar-spacer" style={{height: "0.0em"}} />
        {
          mode == "cms" && (
            <div style={{marginTop: "3.0em"}}>
              <ContentEditor />
            </div>
          )
        }
        {
          mode === "site" && (
            <div style={{backgroundColor: "white", width: viewportWidth}}>
              { 
                window.getContent()["panels"] !== undefined && window.getContent()["panels"].map((panel,index) => {
                  return <React.Fragment key={index}>
                    {componentResolver(panel["component"], panel.hasOwnProperty("content") && panel["content"])}
                  </React.Fragment>
                })
              }
            </div>
          )
        }
    </div>
  )
}
