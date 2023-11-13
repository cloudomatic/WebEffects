import * as React from 'react';
import Text from "./Text.js";
import DocumentToCColumn from "./DocumentToCColumn.js";

export default function DocumentToC({toc}) {

  const style = {
    widthBetweenColumns: "8.0em",
  }

  return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
          {
            toc.map((column, index) => (
              <React.Fragment key={"div-column-" + index}>
								<div style={{border: "0px solid black"}}>
									<DocumentToCColumn column={column} />
								</div>
                <div id="spacer" style={{ "width": style.widthBetweenColumns}} />
              </React.Fragment>
            ))
          }
        </div>
  );
}
