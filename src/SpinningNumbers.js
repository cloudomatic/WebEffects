import * as React from 'react';
import Text from "./Text.js";

// https://stackoverflow.com/questions/34507924/how-to-create-an-animated-counter-in-react-js
const data = [
  { value: 97, description: "of our clients had never previously used machine learning or deep learning in their organizations" },
  { value: 66, description: "of our model implementations use existing on-premise compute, with no additional capacity investment"},
  { value: 68, description: "of our clients who have a need for generative AI"},
  { value: 48, description: "of CIOs surveyed said that they have already incorporated ML or DL software in their organizations"},
  { value: 36, description: "of of our clients feel that they could be getting more from their data, if they had the right partner"},
  { value: 66, description: "of our clients are on their 4th (or higher) project using our platform"}
]

export default function SpinningNumbers() {

  const timerBasis = Date.now()
  const [timerSeconds, setTimerSeconds] = React.useState(null)
  const [spinningNumbers, setSpinningNumbers] = React.useState([0, 0, 0, 0, 0, 0])
  
  //
  // Start a timer so we can show the numbers spinning
  //
  React.useEffect(() => {
    const timer = setInterval(() => {
/*
      setTimerSeconds(Date.now() - timerBasis)
      var _spinningNumbers = [ ...spinningNumbers ]
      for (var i in _spinningNumbers) _spinningNumbers[i] = Math.min(data[i].value, _spinningNumbers[i] + (Date.now() - timerBasis))
      setSpinningNumbers(_spinningNumbers)
*/
    }, 10);
    return () => clearInterval(timer);
  }, []);



  return (
   <div id="div-tile-file-view" style={{  maxWidth: "80%", backgroundColor: "white", display: "flex", flexWrap: "wrap",  justifyContent: "center", alignText: "center", alignItems: "start",  paddingTop: "0.0em"}}>
     {
       data.map( (item, index) => (
              <div key={index} style={{border: "0px solid black", marginTop: "0.0em", width: "20em", margin: "10px", textAlign: "left", padding: "0.4em 0 0.4em 0.8em"}}>
                <div style={{textAlign: "left", borderBottom: "3px solid " + window.getTheme().fileManagerIconColor}}>
                  <Text fontSize="3.0em" fontWeight= "bold">
                    {Math.max(data[index].value, spinningNumbers[index])}%
                  </Text>
                </div>
                <div style={{paddingTop: "0.7em"}}>
                  <Text>
                    {item.description}
                  </Text>
                </div>
              </div>
        ))
      }
    </div>
  );

}
