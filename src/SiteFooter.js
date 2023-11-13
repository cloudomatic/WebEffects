import * as React from 'react';
import Text from "./Text.js";
import ImageWithBottomLabel from "./ImageWithBottomLabel.js";
import DocumentToC from "./DocumentToC.js";

export default function SiteFooter({content}) {

  const styles = {
    root: {
      padding: "3.0em 0 2.0em 0", display: "flex", backgroundColor: "rgb(26,24,31)", minHeight: "15em",  display: "flex", flexWrap: "wrap",  justifyContent: "center", alignItems: "center" 
    }
  }

  return (
        <div style={styles.root}>
          <div style={{marginBottom: "2.0em"}}>
						<ImageWithBottomLabel
							imageRef={window.getContent()["companyLogo"]}
							label={window.getContent()["companyName"]}
							margin="0.9em 0.0em 0 0"
						/>
          </div>
          <div id="spacer" style={{width: "5.0em"}} />
          <div>
            <DocumentToC 
              toc={window.getContent()["siteMap"]} 
            />
          </div>
          <div>
            <Text color="white" fontSize="1.1em" fontWeight="bold"> 
              Global Headquarters
            </Text>
            <div style={{ margin: "0.5em 0 0.5em 0", borderBottom: "1px solid white", width: "12.0em"}} />
            <Text color="white" fontSize="0.7em" fontWeight="bold">
              101 Southeastern Expressway<br />
              Dallas, Texas<br />
              75001
            </Text>
            <div style={{ margin: "0 0 0 0", borderBottom: "0px solid white", height: "2.0em"}} />
            <Text color="white" fontSize="0.9em" fontWeight="bold">
              EMEA Headquarters
            </Text>
            <div style={{ margin: "0.5em 0 0.5em 0", borderBottom: "1px solid white", width: "12.0em"}} />
            <Text color="white" fontSize="0.7em" fontWeight="bold">
              One Central, Trade Centre <br /> Sheikh Zayed Rd <br /> Dubai <br />United Arab Emirates
            </Text>
          </div>
        </div>
  );


}
