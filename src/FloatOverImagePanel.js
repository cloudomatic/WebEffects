import * as React from 'react';
import Text from './Text.js';

export default function FloatOverImagePanel({content}) {

  const [hoverOverButton, setHoverOverButton] = React.useState(false)

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


  if (false) return (
    <div>
      <img src="laptop-woman.jpeg" style={{filter: "brightness(40%)"}}/>
    </div>
  )

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

}
