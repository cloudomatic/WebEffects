import * as React from 'react';
import Text from "./Text.js";
import ExpandingTile from "./ExpandingTile.js";
import useOnScreen from "./useOnScreen.js";
import { useRef } from 'react';

export default function UpcomingEvents() {

  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef);

  return (
    <>
        <div ref={elementRef}>{isOnScreen}</div>
        {
          isOnScreen && 
            <div style={{ margin: "auto", maxWidth: "50%", backgroundColor: window.getTheme().fileManagerIconColor, display: "flex", flexWrap: "wrap",  justifyContent: "center", alignItems: "center", textAlign: "center"}}>
              <div>
                <img src="ai_summit.webp" style={{height: "10.0em"}} />
              </div>
              <div style={{height: "9.9em", padding: "0 0 0 2.0em"}} >
                <div style={{padding: "1.0em 0 0 1.0em", maxWidth: "20em"}}>
									<Text color="white" fontWeight="bold" fontSize="1.4em">
										November 1st-2nd, 2023
									</Text><br/>
                  <Text color="white" fontWeight="bold" fontSize="1.0em">
                    Bletchley Park, London, UK
                  </Text><br/>
                  <Text color="white" fontSize="0.8em" lineHeight="0.9">
                    Visit the Drager booth at 1-G4 to learn about the Deep Space Kernel and how Drager is bringing next-generation deep learning to clients arond the globe
                  </Text>

                </div>
              </div>
  					</div>
        }
    </>
  );

}


