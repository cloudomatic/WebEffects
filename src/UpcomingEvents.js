import * as React from 'react';
import Text from "./Text.js";
import ExpandingTile from "./ExpandingTile.js";
import useOnScreen from "./useOnScreen.js";
import { useRef } from 'react';

export default function UpcomingEvents({date, location, description, image}) {

  const elementRef = useRef(null);
  const isOnScreen = true; //useOnScreen(elementRef);

  return (
    <>
        {
          isOnScreen && 
            <div style={{ margin: "auto", padding: "1.0em 0 1.0em 0", width: "100%", minHeight: "10em", backgroundColor: window.getTheme().fileManagerIconColor, display: "flex", flexWrap: "wrap",  justifyContent: "center", alignItems: "center", textAlign: "center"}}>
              <div>
                <img src={image} style={{height: "11.2em", padding: "none", margin: "auto"}} />
              </div>
              <div style={{height: "100%", padding: "0 0 0 2.0em"}} >
                <div style={{padding: "1.0em 0 0 1.0em", maxWidth: "20em"}}>
									<Text color="white" fontWeight="bold" fontSize="1.4em">
										{date}
									</Text><br/>
                  <Text color="white" fontWeight="bold" fontSize="1.0em">
                    {location}
                  </Text><br/>
                  <Text color="white" fontSize="0.8em" lineHeight="0.9">
                    {description}
                  </Text>
                </div>
              </div>
  					</div>
        }
        <div ref={elementRef}>{isOnScreen}</div>
    </>
  );

}


