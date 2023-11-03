import * as React from 'react';
import Text from "./Text.js";
import Slide from '@mui/material/Slide';
import Paper from '@mui/material/Paper';

export default function LatestNews({mobile=false}) {

  const timerBasis = Date.now()
  const [timerSeconds, setTimerSeconds] = React.useState(null)
  const [showImage, setShowImage] = React.useState(false)
  const [showButton, setShowButton] = React.useState(false)
  const [showHeadline, setShowHeadline] = React.useState(false)

  //
  // Start a timer so we can show the numbers spinning
  //
  React.useEffect(() => {
    const timer = setInterval(() => {
      const secondsSincePageLoaded = Date.now() - timerBasis
      setTimerSeconds(secondsSincePageLoaded)
      if (secondsSincePageLoaded > 500) setShowHeadline(true)
      if (secondsSincePageLoaded > 1100) setShowImage(true)
      if (secondsSincePageLoaded > 3500) setShowButton(true)
    }, 500);
    return () => clearInterval(timer);
  }, []);

  const getPadding = (multiplier) => { 
    if (mobile == true) return multiplier * 0
    else return multiplier * 5
  }

  return (
        <div style={{
          display: "flex", 
          padding: "4.0em 0 0 0", 
          flexWrap: "wrap",
          _background: "linear-gradient(to top, rgba(31,50,83,0) 0%, rgba(13,14,68,0.65) 100%)", 
          minHeight: "23em",
          background: "linear-gradient(to bottom, rgba(2,0,36,1) 0%, rgba(0,0,38,1) 32%, rgba(0,212,255,1) 100%)"
         }}>
          <div style={{backgroundImage: showImage ? "url(quant_computer.png)" : null, minHeight: "20em", margin: "0em 0em 0em " + getPadding(4) + "%", border: "0px solid black", width: getPadding(4) + "em", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            <div style={{padding: "0.5em 0 0 " + getPadding(2) + "em", whiteSpace: "nowrap", display: "flex", flexWrap: "wrap"}}>
              <div id="div-headline" style={{padding: "1.5 0 0 " + getPadding(2) + "em"}}>
                { showHeadline && <Text color="white" fontSize="3.0em" fontWeight="bold">
                                    Drager wins third R&D 100 award 
                                  </Text>
                }
              </div>
              {showButton && <>
              <div id="div-caption" style={{minWidth: "15em", padding: "2.0em 0 0 " + getPadding(3) + "em", whiteSpace: "wrap"}}>
                <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                  <Paper sx={{backgroundColor: 'transparent'}} elevation={0} variant="outlined">
										<Text color="white" fontSize="0.9em" fontWeight="bold">
											Drager's next-generation Deep Space Kernel was acknowledged with the 2023 R&D 100 Breakthrough Award for most innovative product
										</Text>
                  </Paper> 
                </Slide>
              </div>
              <div id="div-button" style={{margin: "2em 0 0 " + getPadding(5) + "em", border: "2px solid white", padding: "0.5em",  width: "7em", cursor: "pointer"}}>
                <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                  <Paper sx={{backgroundColor: 'transparent'}} elevation={0} variant="outlined">
										<Text color="white" fontSize="1.2em">
											Read More >
										</Text>
                  </Paper>
                </Slide>
              </div>
              </>}
            </div>
          </div>
        </div>
  );

}
