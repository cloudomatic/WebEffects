import * as React from 'react';
import Text from "./Text.js";
import ExpandingTile from "./ExpandingTile.js";
import useOnScreen from "./useOnScreen.js";
import { useRef } from 'react';

export default function SimpleStatementStandalone({removeSpacers = false, content}) {

  const timerBasis = Date.now()
  const [showStatement, setShowStatement] = React.useState(false)
  const [showSummary, setShowSummary] = React.useState(false)
  const [showButton, setShowButton] = React.useState(false)
  const [hoverOverButton, setHoverOverButton] = React.useState(false)
  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef);


  //
  // Start a timer to ease-in the text elements
  //
  React.useEffect(() => {
    const timer = setInterval(() => {
      const secondsSincePageLoaded = Date.now() - timerBasis
      //setTimerSeconds(secondsSincePageLoaded)
      if (secondsSincePageLoaded > 500) setShowStatement(true)
      if (secondsSincePageLoaded > 1100) setShowSummary(true)
      if (secondsSincePageLoaded > 2500) setShowButton(true)
    }, 500);
    return () => clearInterval(timer);
  }, []);


  return (
      <>
        <div style={{display: "flex", flexWrap: "wrap", minHeight: "16.0em", backgroundColor: "rgb(244, 244, 244)", justifyContent: "center"}}>
          <div id="item-1" style={{backgroundColor: "none"}}>
            <div style={{backgroundColor: "rgb(244, 244, 244)", padding: "2.0em 1.0em 1.0em 1.0em"}}>
              <div style={{ minHeight: "9.9em", padding: "0em 0 0 2.0em", maxWidth: "40em"  }} >
                { 
                  showStatement && <Text color="black" fontSize="2.7em">
                                     {content.statement}
                                   </Text> 
                }
                {
                  showSummary && 
                    <div style={{ padding: "2.0em 0 1.0em 0em", maxWidth: "30em"}}>
                      <Text color="black" fontSize="1.0em">
                        {content.summary}
                      </Text>
                    </div>
                }
                {
                  showButton && 
                    <div  onMouseOver={() => setHoverOverButton(true)} onMouseOut={() => setHoverOverButton(false)} style={
                      {
                        border: hoverOverButton ? "1px solid gray" : "1px solid black", 
                        width: (content.buttonText.length * 0.58) + "em", 
                        margin: "1.0em 0 2.0em 0.0em", 
                        padding: "0.4em 0.7em 0.5em 0.7em", 
                        cursor: "pointer",
                        background: hoverOverButton ? "rgba(0,0,0,0.05)" : "none",
                      }}
                    >
                      <Text color="black" fontWeight={hoverOverButton ? "bold" : "normal"}>
                        {content.buttonText} <>&rsaquo;</>
                      </Text>
                    </div>
                }
              </div>
  					</div>
          </div>
        </div>
        <div ref={elementRef}>{isOnScreen}</div>
      </>
        
  );

}


