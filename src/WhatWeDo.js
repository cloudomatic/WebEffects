import * as React from 'react';
import Text from "./Text.js";

export default function WhatWeDo() {

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
      if (secondsSincePageLoaded > 1000) setShowHeadline(true)
      if (secondsSincePageLoaded > 1600) setShowImage(true)
      if (secondsSincePageLoaded > 3000) setShowButton(true)
    }, 500);
    return () => clearInterval(timer);
  }, []);


  return (
        <div style={{
          display: "flex", 
          padding: "4.0em 0 0 0", 
          minHeight: "23em",
          backgroundColor: "white"
         }}>
          <div style={{backgroundImage: showImage ? "url(quant_computer.png)" : null, height: "20em", margin: "0em 0em 0em 20%", border: "0px solid black", width: "20em", backgroundSize: "contain"}}>
            <div style={{padding: "0.5em 0 0 10em", whiteSpace: "nowrap"}}>
              <div style={{padding: "1.5 0 0 10.0em"}}>
                { showHeadline && <Text color="white" fontSize="3.0em" fontWeight="bold">
                                    Drager wins third R&D 100 award 
                                  </Text>
                }
              </div>
              {showButton && <>
              <div style={{width: "15em", padding: "2.0em 0 0 15.0em", whiteSpace: "wrap"}}>
                <Text color="white" fontSize="0.9em" fontWeight="bold">
                  Drager's next-generation Deep Space Kernel was acknowledged with the 2023 R&D 100 Breakthrough Award for most innovative product
                </Text>
              </div>
              <div style={{margin: "2em 0 0 25em", border: "2px solid white", padding: "0.5em",  width: "7em"}}>
                <Text color="white" fontSize="1.2em">
                  Read More >
                </Text>
              </div>
              </>}
            </div>
          </div>
        </div>
  );

}
