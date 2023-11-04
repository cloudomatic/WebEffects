import * as React from 'react';
import Text from "./Text.js";
import ExpandingTile from "./ExpandingTile.js";
import useOnScreen from "./useOnScreen.js";
import { useRef } from 'react';

export default function ExpandingTileSet({mobile = false}) {

  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef);

  const tiles = [
    {
      image: "refinery2.png",
      title: "Refining the refinery: Machine learning for sustainable production",
      caption: "Re-designed fluid routing in an existing refinery design eliminated 4 miles of piping",
      roi: "450",
      logo: "shell.png"
    },
    {
      image: "kim.png",
      title: "A DL approach to managing surveillance at scale",
      caption: "Better identification of baesinja reduced executions by 30% and lead to fewer human-rights sanctions",
      roi: "224",
      logo: "korea.png"
    },
    {
      image: "resort2.png",
      title: "Hawaiian Entropic: Generating repeat business in Maui",
      caption: "ML-driven decision support identified repeat-stay clients, resulting in an ROI of 4800%",
      roi: "488",
      logo: "hawaii.png"
    }
  ]

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


