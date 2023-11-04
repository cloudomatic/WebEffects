import * as React from 'react';
import Text from "./Text.js";
import ExpandingTile from "./ExpandingTile.js";
import useOnScreen from "./useOnScreen.js";
import { useRef } from 'react';

export default function SimpleStatement({ statement = "Take the next step, fool!", summary = "Learn more about what Drager can do for you.  We own AI, and you're ready to move forward with us", buttonText = "Discover Draper"}) {

  const timerBasis = Date.now()
  const [showStatement, setShowStatement] = React.useState(false)
  const [showSummary, setShowSummary] = React.useState(false)
  const [showButton, setShowButton] = React.useState(false)

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
            <div style={{width: "100%", minHeight: "15.0em", backgroundColor: "rgb(244, 244, 244)", padding: "2.0em 0 1.0em 2.0em"}}>
              <div style={{minHeight: "9.9em", padding: "0em 0 0 2.0em"}} >
                { showStatement && <Text color="black" fontSize="2.7em">
                                     {statement}
                                   </Text> 
                }
                <div style={{maxWidth: "40.0em", padding: "2.0em 0 1.0em 0em"}}>
									<Text color="black" fontSize="1.0em">
										{summary}
									</Text>
                </div>
                <div style={{border: "1px solid black", width: (buttonText.length * 0.58) + "em", margin: "1.0em 0 0em 0.0em", padding: "0.4em 0.7em 0.5em 0.7em", cursor: "pointer"}}>
									<Text color="black">
										{buttonText} <>&rsaquo;</>
									</Text>
                </div>
              </div>
  					</div>
        
    </>
  );

}


