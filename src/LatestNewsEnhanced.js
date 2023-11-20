import * as React from 'react';
import Text from "./Text.js";
import Slide from '@mui/material/Slide';
import Paper from '@mui/material/Paper';

export default function LatestNews({mobile=false, content}) {

  const timerBasis = Date.now()
  const [timerSeconds, setTimerSeconds] = React.useState(null)
  const [showImage, setShowImage] = React.useState(false)
  const [showButton, setShowButton] = React.useState(false)
  const [showHeadline, setShowHeadline] = React.useState(false)
  const [hoverOverButton, setHoverOverButton] = React.useState(false)

  //
  // Start a timer so we can show the numbers spinning
  //
  React.useEffect(() => {
    const timer = setInterval(() => {
      const secondsSincePageLoaded = Date.now() - timerBasis
      setTimerSeconds(secondsSincePageLoaded)
      if (secondsSincePageLoaded > 500) {
        if (!showHeadline) setShowHeadline(true)
      }
      if (secondsSincePageLoaded > 1100) if (!showImage) setShowImage(true)
      if (secondsSincePageLoaded > 3500) if (!showButton) setShowButton(true)
    }, 500);
    return () => clearInterval(timer);
  }, []);

  const styles = {
    root: { 
      minHeight: "28em",
      background: "linear-gradient(to bottom, rgba(2,0,36,1) 0%, rgba(0,0,38,1) 32%, rgba(0,212,255,1) 100%)",
      textColor: "white",
      width: "100%"
    },
    row: {
      display: "flex", flexWrap: "wrap", minHeight: "3.0em", justifyContent: "center",
      padding: "0 2.0em 0 2.0em",
      backgroundColor: "none",
    },
    spacer: {
      backgroundColor: "none"
    },
    image: {
      _opacity: .75,
      _filter: "brightness(50%)", 
      margin: "3.2em 0 0 20%", 
      height: "19em"
    }
  }


  return (
    <div id="news-root" style={styles.root}>

      <div style={{height: "0em"}}>
        {!mobile && showImage && <img src={content.imageRef} style={styles.image}/>}
      </div>
      
        <div id="headline-row" style={styles.row}>
          
          {!mobile && <div id="spacer" style={{...styles.spacer, width: "8vw"}} />}
          <div id="content" style={{marginTop: "4.0em", width: "60vw", maxWidth: "50%", textAlign: "center" }} >
            { 
              showHeadline && <Text color={styles.root.textColor} fontSize={!mobile ? "2.8em" : "1.5em"} fontWeight="bold">
                                    {content.headline}
                                  </Text>
            }
          </div>
         
        </div>
    
        <div id="caption-row" style={{...styles.row, backgroundColor: "none"}}>
          {!mobile && <div id="spacer" style={{...styles.spacer, width: "10%", backgroundColor: "none"}} />}
          <div id="content" style={{maxWidth: "15em"}}>
          {
            showButton &&
                 <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                    <Paper sx={{backgroundColor: 'transparent'}} elevation={0} variant="elevation">
                      <div style={{ marginTop: "2.5em", textAlign: "left", _boxShadow: "inset 0 0 0 100vmax rgba(0,0,0,.3)"}}>
                        <Text color={styles.root.textColor} fontSize="0.9em" fontWeight="bold">
                          {content.caption}
                        </Text>
                      </div>
                    </Paper>
                  </Slide>
          }
          </div>
        </div>
        
        <div id="button-row" style={styles.row}>
          {!mobile && <div id="spacer" style={{...styles.spacer, width: "25vw" }} />}
          <div id="content" style={{ }}>
          {
            showButton &&
               <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                  <Paper sx={{backgroundColor: 'transparent'}} elevation={0} variant="elevation">
                    <div 
                      id="div-button" style={
                      {
                        margin: "2em 0 0 0em", 
                        border: hoverOverButton  ? "2px solid " + styles.root.textColor : "2px solid " + styles.root.textColor,
                        padding: "0.5em",  
                        width: "7em", 
                        cursor: "pointer",
                        background: hoverOverButton ? "rgba(0,0,0,0.25)" : "none",
                      }} 
                      onMouseOver={() => setHoverOverButton(true)} onMouseOut={() => setHoverOverButton(false)}
                    >
                    <Text color={styles.root.textColor} fontSize="1.2em">
                      {content.buttonText} &rsaquo;
                    </Text>
                    </div>
                  </Paper>
                </Slide>
          }
          </div>
        </div>
       
    </div>
  )
  }
