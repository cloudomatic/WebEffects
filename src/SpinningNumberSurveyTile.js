import * as React from 'react';
import useOnScreen from "./useOnScreen.js";
import { useRef } from 'react';
import Text from "./Text.js";
import CountUp from 'react-countup';

export default function SpinningNumberSurveyTile({number=0, description=""}) {

  const timerBasis = Date.now()
  const [timerSeconds, setTimerSeconds] = React.useState(null)
  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef, "-100px");

/*
  //
  // Start a timer so we can show the numbers spinning
  //
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimerSeconds(Date.now() - timerBasis)
    }, 10);
    return () => clearInterval(timer);
  }, []);
*/

  

  return (
    <>
              <>
                <div style={{textAlign: "left", borderBottom: "3px solid " + window.getTheme().fileManagerIconColor}} >
                  <Text fontSize="3.0em" fontWeight= "bold">
                    { isOnScreen ? <span><CountUp end={number} />%</span> : <span> &nbsp; </span> }
                  </Text>
                </div>
                <div style={{paddingTop: "0.7em"}}>
                  <Text>
                    {description}
                  </Text>
                </div>
              </>
              <div ref={elementRef}>{isOnScreen}</div>
    </>
  );
}
