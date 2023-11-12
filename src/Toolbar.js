import * as React from 'react';
import Text from './Text';

// https://jsfiddle.net/yX3p9/7/

//
// A component that shows two sets of icons, pushed to the far left and right of a top window bar
//

/*
Re-do with this
*/

export default function Toolbar(leftSideElements, rightSideElements, padding) {

  const styles = {
    root: {
			width: "100%",
			backgroundColor: "red",
			fontSize: "1.6em",
			display: "table",
    },
    row: {
			display: "table-cell",
			verticalAlign: "middle", 
    },
    leftSide: {
			marginLeft: "2%",
			float: "left",
			backgroundColor: "yellow"
    },
    rightSide: {
			marginRight: "1%",
			float: "right",
			backgroundColor: "green"
    }
  }

  return (
		<div id="div-toolbar-root" style={styles.root}>
				<div id="div-row" style={styles.row}>
						<div id="left-side-icons" style={styles.leftSide}>
							<img src="hawaii.png" />
              <img src="hawaii.png" />
						</div>
						<div id="right-side-icons" style={styles.rightSide}>
              <div style={{ }}>
								<img src="hawaii.png" style={{height: "2.0em"}} />
              </div>
            </div>
				</div>
		</div>
  )
}

