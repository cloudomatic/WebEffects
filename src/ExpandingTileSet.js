import * as React from 'react';
import Text from "./Text.js";
import ExpandingTile from "./ExpandingTile.js";
import useOnScreen from "./useOnScreen.js";
import { useRef } from 'react';

export default function ExpandingTileSet({content, mobile = true}) {

  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef);
  mobile = true

  const tiles = content.tiles

  return (
    <>
    <div style={{padding: "0 0 0 5.0em"}}>
      <Text fontSize="1.5em" fontWeight="bold">
      </Text>
    </div>
    <div style={{minHeight: "25em", border: "0px solid black"}}>
        {
          (true || isOnScreen || mobile) && 
            <div style={{ backgroundColor: "white", display: "flex", flexWrap: "wrap",  justifyContent: "center", alignItems: "center", textAlign: "center"}}>
							{tiles.map((tile, index) => (
								<div key={index} style={{minHeight: "20em", padding: "5% 0 0 5%"}}>
									<ExpandingTile 
                    hidden = {!isOnScreen}
										image = {tile.image}
										title = {tile.title}
										caption = {tile.caption}
										roi = {tile.roi}
										logo = {tile.logo}
										renderingDelay = {index * 100}
									/>
								</div>
							))}
					</div>
        }
    </div>
    <div ref={elementRef}>{isOnScreen}</div>
    </>
  );

}


