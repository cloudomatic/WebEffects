import * as React from 'react';
import Text from "./Text.js";
import ExpandingTile from "./ExpandingTile.js";
import useOnScreen from "./useOnScreen.js";
import { useRef } from 'react';

export default function CoolMenu({selectionChangeCallback, defaultSelected="none", menuItems=[]}) {

  const timerBasis = Date.now()

  const [selectedItemId, setSelectedItemId] = React.useState(defaultSelected)

  const styles = {
    menuItem: {
      padding: "0.0em 0 0 0",
      margin: "0em 0 0.0em 0",
      borderLeft: "3px solid lightGray",
      fontSize: "1.0em",
      height: "2.4em"
    },
    menuText: {
      fontSize: "1.0em",
      padding: "0.7em 0 0.8em 0.8em",
      margin: "auto",
      cursor: "pointer"
    }

  }

  //
  // Start a timer to ease-in the text elements
  //
  React.useEffect(() => {
    const timer = setInterval(() => {
/*
      const secondsSincePageLoaded = Date.now() - timerBasis
      //setTimerSeconds(secondsSincePageLoaded)
      if (secondsSincePageLoaded > 500) setShowStatement(true)
      if (secondsSincePageLoaded > 1100) setShowSummary(true)
      if (secondsSincePageLoaded > 2500) setShowButton(true)
*/
    }, 500);
    return () => clearInterval(timer);
  }, []);

  const handleMenuItemChange = (id) => {
    setSelectedItemId(id)
    selectionChangeCallback(id)
  }
  

  return (
    <>
            <div style={{width: "100%", height: "15.0em", backgroundColor: "rgb(244, 244, 244)"}}>
              <div style={{height: "9.9em", padding: "2.0em 0 0 2.0em"}} >
              {
                menuItems.map((item, index) => (
                  <div key={index} style={{...styles.menuItem, borderLeft: item.id == selectedItemId ? "3px solid " + window.getTheme().fileManagerIconColor : "3px solid lightGray"}}>
                    <div key={index} style={styles.menuText} onClick={() => handleMenuItemChange(item.id)} >
											<Text fontSize={styles.menuText.fontSize} fontWeight={item.id == selectedItemId ? "bold" : "normal"} color={item.id == "what" ? "black" : "black"}>
												{item.label}
											</Text>
                    </div>
                  </div>
                ))
              }
              </div>
  					</div>
        
    </>
  );

}


