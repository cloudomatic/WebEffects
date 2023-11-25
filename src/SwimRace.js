import * as React from 'react';
import Text from './Text.js';
import ExecBio from './ExecBio.js';

export default function SwimRace({content, mobile}) {

  const [hoverOverButton, setHoverOverButton] = React.useState(false)
  const [scrollHeight, setScrollHeight] = React.useState(0)

  React.useEffect(() => {
    function handleScroll(event) {
      setScrollHeight(window.pageYOffset)
    }
    window.addEventListener('scroll', handleScroll);
  }, []);


  const topBase = 128 + 350
  const absolute = scrollHeight - topBase; // The race starts at zero and goes to 1200
  const absoluteEnd = 1200
  const absoluteMax = 30
  const pct = ((scrollHeight - topBase) - 10 ) / 5.5
  const debugMode = false

  const column3Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 19]

  const baseSpeed = .01
  // The swimmer number denotes height in em
  const swimmers = [ 
    [8, 8, 8, 8], 
    [16, 16], 
    [10, 10, 10] 
  ]
  const laneStartHeights = [-5, -10, -20]
  const laneMaxHeights = [1.55, 2.2, 2.7]
  const laneSpeeds = [3,6,5]
  const lanePaddings = [1, 2, 2]

  const cardContent = [
    [
      <ExecBio data={content} name="April.Demolay" layout={mobile ? "vertical" : "horizontal"} />,
      <ExecBio data={content} name="Ivy.Bradford" layout={mobile ? "vertical" : "horizontal"} />,
      <ExecBio data={content} name="Laila.Dickens" layout={mobile ? "vertical" : "horizontal"} />,
      <ExecBio data={content} name="Clifford.Long" layout={mobile ? "vertical" : "horizontal"} />,
    ],
    [
      <ExecBio data={content} name="Jeilin.Wang" layout="vertical" />,
      <ExecBio data={content} name="Richard.Scruggs" layout="vertical" />
    ],
    [
      <ExecBio data={content} name="Dowd.Rollinson" layout={mobile ? "vertical" : "horizontal"} />,
      <ExecBio data={content} name="Rod.Sterlington" layout={mobile ? "vertical" : "horizontal"} />,
      <ExecBio data={content} name="Prince.Faisal.bin.Salam" layout={mobile ? "vertical" : "horizontal"} />,
    ]
  ]

  if (true) return (
      <div id="root" style={{padding: "3.0em 0 2.0em 0"}}>
        <div style={{marginLeft: "0", textAlign: "center", paddingBottom: "1.0em"}}>
          <Text fontWeight="bold" fontSize="1.8em" color={window.getTheme().fileManagerIconColor}>Leadership Team</Text>
        </div>
        <div style={{display: "flex", flexWrap: "wrap", backgroundColor: debugMode ? "red" : "none", height: "100%", justifyContent: "center"}}>
          {
            debugMode && 
              <div id="column-0" style={{width: "10em", backgroundColor: debugMode ? "green" : "none", height: "100%", position: "relative", border: "1px solid black"}}>
                <div  style={{ position: "absolute", left: 0, top: 0}}>
                  absolute: {absolute}<br />
                  scrollHeight: {scrollHeight}<br />
                  pct: {pct}<br />
                  hooey  Fooey
                </div>
                <div  style={{ position: "absolute", left: 0, bottom: 0}}>
                  {absolute}<br />
                  {Math.min(0, scrollHeight - 400)} <br />
                  {Math.min(0, scrollHeight - 400) / 100} <br />
                </div>
              </div>
          }
          {
            swimmers.map((lane, laneIndex) => (
              <div id={"lane-" + laneIndex} style={{width: "20em", backgroundColor: debugMode ? "green" : "none", height: "100%", border: debugMode ? "1px solid black" : "none", overflow: "hidden"}}>
                {
                  swimmers[laneIndex].length > 1 && swimmers[laneIndex].map((swimmer, index) => (
                    <>
                    <div id="swimmerN" style={
                      { 
                        width: "80%", 
                        margin: "auto", 
                        height: swimmer + "em", 
                        marginTop: index == 0 ? Math.min(laneMaxHeights[laneIndex], (absolute * baseSpeed * laneSpeeds[laneIndex]) + laneStartHeights[laneIndex]) + "em" : lanePaddings[laneIndex] + "em", 
                        border: "0px solid #FFFFFF",
                      }}>
                      {/* lane: {laneIndex}, swimmer: {index}<br /> marginTop: {Math.min(laneMaxHeights[laneIndex], (absolute * baseSpeed * laneSpeeds[laneIndex]) + laneStartHeights[laneIndex]) + "em"} */}
                      {cardContent[laneIndex][index]}
                    </div>
                    { mobile && <div id="spacer" style={{height: "2.0em"}} />}
                    </>
                  ))
                }
              </div>
            ))
          }
          {/*  This is the accordion thing
          <div id="lane-4" style={{width: "20em", backgroundColor: "yellow", height: "100%", border: debugMode ? "1px solid black" : "none", overflow: "hidden"}}>
            {
              column3Items.map((item, index) => {
                const spacerHeight = pct > 100 ? "0" : (100-pct) + "%"
                const itemHeight = (100 - pct) + "%"
                const minItemHeight = ((100 / column3Items.length) - (0.05 * column3Items.length)) + "%"
                return (
                  <>
                    <div style={{height: itemHeight, minHeight: minItemHeight, width: "100%",  backgroundColor: "red", border: "1px solid black"}}>
                      Spacer height: {spacerHeight}
                    </div>
                    {
                      index != column3Items.length - 1 && <div id="spacer" style={{height: spacerHeight}} />
                    }
                  </>
                )
              })
            }
          </div>
          */}
        </div>
      </div>
  );


}
