import * as React from 'react';
import Text from './Text';

export default function ExpandingTile({image = "/refinery2.png", title="Refining the refinery: Machine learning for sustainable production", logo="hawaii.png", caption="foobar", renderingDelay=1000, hidden=false}) {

  const [expanded, setExpanded] = React.useState(false)
  const [visible, setVisible] = React.useState(true)
  const [windowDimensions, setWindowDimensions] = React.useState(window.getWindowDimensions());

  // https://jsfiddle.net/ybktodLc/

  const style = {
    tileBorder: {
      border: "0px solid gray",
      width: "15.0em",
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
    topPhoto: {
      height: expanded ? "23em" : "19em",
      backgroundImage: "url(" + image + ")",
      backgroundSize_: "15em 15em",
      backgroundSize: "cover",
      filter: expanded ? "none" : "brightness(75%)",
      zIndex: 0,
      _backgroundImage: expanded ? `url("${image}")` : `linear-gradient( to top, rgba(8, 8, 37, 0.85), rgba(0, 15, 80, 0.675)), url("${image}")`,
    },
    photoTextContainer: {
      padding: "90% 0 0 5%",
      zIndex: 10,
       _background: "linear-gradient(to bottom, rgba(255,0,0,0) 0%,rgba(255,0,0,0.65) 100%)",
      textColor: "white",
      fontWeight: "bold",
      textShadow: "black 4px 4px 20px",
      fontSize: "1.1em",
      textAlign: "left"
    },
    statsBox: {
      height: "4em",
      display: "flex"
    },
    footer: {
      lineHeight: "2.3em",
      height: "2.7em", 
      textAlign: "center",
      backgroundColor: window.getTheme().fileManagerIconColor,
      textColor: "white",
      cursor: "pointer"
    }
  }

  // 
  // Implement delayed rendering for effect
  //
  React.useEffect(() => {
  	const timer = setInterval(() => {
				if (!visible) setVisible(true)
	  }, renderingDelay);
	  return () => clearInterval(timer);
  }, []);

  //if (!visible) return null
  //else 
  return (
    <div id="tileBorder" style={style.tileBorder} onMouseOut={() => {setExpanded(false)}} onMouseOver={() => {setExpanded(true)}}>
      <div id="topPhoto" style={style.topPhoto}>
        <div id="photoTextContainer" style={style.photoTextContainer}>
					<Text color={style.photoTextContainer.textColor} fontWeight={style.photoTextContainer.fontWeight} fontSize={style.photoTextContainer.fontSize} textShadow={style.photoTextContainer.textShadow}>
						{title}
					</Text>
        </div>
      </div>
      {
        !expanded && 
          <div style={style.statsBox}>
            <div style={{width: "75%", padding: "0.5em 0 0.5em 0.5em"}}>
					    <Text fontSize="0.7em" lineHeight="0.7" fontWeight="none">
						    {caption}
              </Text>
            </div>
            <div style={{width: "25%", display: "flex", alignItems: "center", justifyContent: "center"}}>
              <img src={logo} style={{width: "60%", margin: "auto"}} />
            </div>
				</div>
      }
      <div style={style.footer}>
        <Text fontWeight="bold" color={style.footer.textColor}>
          Learn More { expanded && <>&rsaquo;</> }
        </Text>
      </div>
    </div>
  );
}
