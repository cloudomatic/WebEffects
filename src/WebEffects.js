import * as React from 'react';

import AppBarLite from './AppBarLite'
import ContentEditor from './ContentEditor';
import ExpandingTileSet from "./ExpandingTileSet.js";
import SpinningNumbers from "./SpinningNumbers.js";
import SiteFooter from './SiteFooter.js';
import LatestNews from './LatestNews.js';
import UpcomingEvents from './UpcomingEvents.js';
import SimpleStatement from './SimpleStatement.js';
import MenuPanel from './MenuPanel.js';
import SimpleStatementStandalone from './SimpleStatementStandalone.js';


export default function WebEffects() {

  document.body.style.backgroundColor="white"
  const [windowDimensions, setWindowDimensions] = React.useState(window.getWindowDimensions());
  const [mode, setMode] = React.useState("site"); // "cms" = content management system
  const [viewportWidth, setViewportWidth] = React.useState("100%")

  const styles = {
    rowDiv : {
      backgroundColor: "white",
      margin: "0 0 2.0em 0"
    }
  }

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(window.getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
  }, []);

  // There are certain components that we can "help" along by starting them out in the mobile config
  var mobile = (windowDimensions.width < 700)

  const componentResolver = (name, content) => {
    if (name == "LatestNews") return <LatestNews mobile={mobile} content={content} />
    else if (name == "MenuPanel")  return <MenuPanel mobile={mobile} content={content} />
    else if (name == "Spacer") return <div id="Spacer" style={{backgroundColor: "white", height: "2.0em"}} />
    else if (name == "SpinningNumbers") return <SpinningNumbers mobile={mobile} content={content} />
    else if (name == "UpcomingEvents") return <UpcomingEvents mobile={mobile} content={content} />
    else if (name == "ExpandingTileSet") return <ExpandingTileSet mobile={mobile} content={content} />
    else if (name == "SimpleStatementStandalone") return <SimpleStatementStandalone mobile={mobile} content={content} />
    else if (name == "SiteFooter") return <SiteFooter mobile={mobile} content={content} />
    else return <a>Unknown Panel</a>
  }


  const simulateMobile = true
  return (
    <div style={{ width: viewportWidth}}>
        <AppBarLite companyName={window.getContent()["companyName"]} companyLogo={window.getContent()["companyLogo"]} setMode={setMode} />
        <div id="app-bar-spacer" style={{height: "0.0em"}} />
        {
          mode == "cms" && (
            <div style={{marginTop: "3.0em"}}>
              <ContentEditor />
            </div>
          )
        }
        {
          mode == "site" && (
            <div style={{backgroundColor: "white"}}>
              <LatestNews 
                mobile={mobile}
                imageRef="quant_computer.png"
                headline="Drager wins third R&D 100 award"
                caption="Drager's next-generation Deep Space Kernel was acknowledged with the 2023 R&D 100 Breakthrough Award for most innovative product"
                buttonText="Read More"
              />
              { 
                window.getContent()["panels"].map((panel,index) => {
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
