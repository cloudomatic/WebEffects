import * as React from 'react';
//import { useParallax } from 'react-scroll-parallax';
import Text from './Text.js';
import SwimRace from './SwimRace.js';

export default function ParallaxPanel({content}) {

  const [hoverOverButton, setHoverOverButton] = React.useState(false)
  const [scrollHeight, setScrollHeight] = React.useState(0)

  React.useEffect(() => {
    function handleScroll(event) {
      setScrollHeight(window.pageYOffset)
    }
    window.addEventListener('scroll', handleScroll);
  }, []);


  const styles = {
    imageContainer: {
       height: "100%", backgroundColor: "black", backgroundAttachment: "fixed", 
       backgroundImage: hoverOverButton ? "url(" + content.imageRefHover + ")" : "url(" + content.imageRef + ")",
       backgroundSize: "contain", 
       backgroundPosition: "center",  
       backgroundRepeat: "no-repeat", 
       color: "white"
    },
    headline: {
      text: hoverOverButton ? <> &nbsp; </> : content.headline,
      _backgroundColor: "rgba(0,0,0,0.65)",
      fontColor: "white",
      maxWidth: "15em",
      fontSize: "2.0em",
      margin: "auto",
      padding: "1.0em"
    },
    caption: {
      text: hoverOverButton ? <a> </a> : content.caption,
      _backgroundColor: "rgba(255,255,255,0.25)",
      padding: "0em",
      margin: "0em",
      maxWidth: "15em",
      margin: "auto",
      height: "5.0em"
    },
    button: {
      backgroundColor: hoverOverButton ? "black" :"rgba(255,255,255,0.25)",
      margin: "2.0em auto 0 auto",
      border: "1px solid white",
      maxWidth: (content.buttonText.length * 0.60) + "em",
      cursor: "pointer",
      padding: "0.5em 0.5em 0.51em",
      buttonText: content.buttonText
    },
  }

  const topBase = 120
  const absolute = scrollHeight - 650
  const pct = (absolute - 10 ) / 5.5
  const spacerColOne = ((scrollHeight - 400) / 100) + "em"
  const showDebugPanel = true

  const column2Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 19]

  if (true) return (
    <div>
      <SwimRace />
    </div>
  )

  if (true) return (
      <div id="root" style={{height: "600px"}}>
        <div style={{display: "flex", flexWrap: "wrap", backgroundColor: "red", height: "100%", justifyContent: "center"}}>
          {
            showDebugPanel && 
              <div id="column-0" style={{width: "10em", backgroundColor: "green", height: "100%", position: "relative", border: "1px solid black"}}>
                <div  style={{ position: "absolute", left: 0, top: 0}}>
                  absolute: {absolute}<br />
                  scrollHeight: {scrollHeight}<br />
                  pct: {pct}<br />
                </div>
                <div  style={{ position: "absolute", left: 0, bottom: 0}}>
                  {absolute}<br />
                  {Math.min(0, scrollHeight - 400)} <br />
                  {Math.min(0, scrollHeight - 400) / 100} <br />
                </div>
              </div>
          }
          <div id="column-1" style={{width: "20em", backgroundColor: "green", height: "100%", border: "1px solid black"}}>
            <div id="spacer" style={{height: Math.max(50, pct) + "px"}} />
            <div style={{height: "25%",  backgroundColor: "gray", border: "1px solid black"}}>
              { Math.floor(0, pct) + "%"}
            </div>
            <div id="spacer" style={{height: 2*(100-pct) + "px"}} />
            <div style={{height: "25%", backgroundColor: "gray", border: "1px solid black"}}>
              { Math.floor(0, pct) + "%"}
            </div>
          </div>
          <div id="column-2" style={{width: "20em", backgroundColor: "yellow", height: "100%", border: "1px solid black", overflow: "hidden"}}>
            {
              column2Items.map((item, index) => {
                const spacerHeight = pct > 100 ? "0" : (100-pct) + "%"
                const itemHeight = (100 - pct) + "%"
                const minItemHeight = ((100 / column2Items.length) - (0.05 * column2Items.length)) + "%"
                return (
                  <>
                    <div style={{height: itemHeight, minHeight: minItemHeight, width: "100%",  backgroundColor: "red", border: "1px solid black"}}>
                      Spacer height: {spacerHeight}
                    </div>
                    {
                      index != column2Items.length - 1 && <div id="spacer" style={{height: spacerHeight}} />
                    }
                  </>
                )
              })
            }
          </div>
          <div id="column-3" style={{width: "20em", backgroundColor: "green", height: "100%", border: "1px solid black"}} />
        </div>
      </div>
  );


  /*
  if (true) return (
    <div>
      !!!
      <SwimRace />
    </div>
  )
  */
  return null
  /*
  return (
    <div id="parallax-panel-root" style={{display: "flex", justifyContent: "center", width: "100%"}}>
      <div id="parallax-panel-scroller"  style={{width: "100%", height: "30em", display: "flex", justifyContent: "center", backgroundColor: "black", overflow: "hidden"}}>
          <div id="image-container" style={styles.imageContainer}>
            <div style={{display: "block", textAlign: "center", padding: "10% 0 0 0", width: "50em", border: "0px solid yellow"}}>
              <div style={{width: "100%"}} />
              <div id="headline" style={styles.headline}>
                <Text fontSize={styles.headline.fontSize} color={styles.headline.fontColor}>
                  {styles.headline.text}
                </Text>
              </div>
              <div style={styles.caption}>
                {styles.caption.text}
              </div>
              <div onMouseOver={() => setHoverOverButton(true)} onMouseOut={() => setHoverOverButton(false)} style={styles.button}>
                {styles.button.buttonText}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
  */

}
