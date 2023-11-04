import * as React from 'react';
import useOnScreen from "./useOnScreen.js";
import { useRef } from 'react';
import Text from "./Text.js";
import CountUp from 'react-countup';
import SpinningNumberSurveyTile from "./SpinningNumberSurveyTile.js";


const defaultData = [
  { value: 97, description: "of our clients had never previously used machine learning or deep learning in their organizations" },
  { value: 66, description: "of our model implementations use existing on-premise compute, with no additional capacity investment"},
  { value: 68, description: "of our clients say that they have a need for generative AI"},
  { value: 48, description: "of CIOs surveyed said that they have already incorporated ML or DL software in their organizations"},
  { value: 36, description: "of of our clients feel that they could be getting more from their data, if they had the right partner"},
  { value: 66, description: "of our clients have used our platform for at least four years"}
]

export default function SpinningNumbers({data=defaultData}) {

  const timerBasis = Date.now()
  const [timerSeconds, setTimerSeconds] = React.useState(null)
  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef, "1000px");

  //
  // Start a timer so we can show the numbers spinning
  //
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimerSeconds(Date.now() - timerBasis)
    }, 10);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
		 <div id="div-tile-file-view" style={{  display: "flex", flexWrap: "wrap", margin: "auto", maxWidth: "80em", backgroundColor: "white", justifyContent: "center", visibility: isOnScreen ? "visible" : "hidden"}}>
			 {
				 isOnScreen && data.map( (item, index) => (
								<div key={index} style={{border: "0px solid black", marginTop: "0.0em", width: "20em", margin: "10px", textAlign: "left", padding: "0.4em 0 0.4em 0.8em"}}>
									<SpinningNumberSurveyTile number={data[index].value}  description={item.description} />
								</div>
					))
				}
			</div>
			<div ref={elementRef}>{isOnScreen}</div>
    </>
  );

}
