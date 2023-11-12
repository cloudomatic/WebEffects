import * as React from 'react';
import SimpleStatement from './SimpleStatement.js';

export default function SimpleStatementStandalone({content}) {

  return (
    <div style={{width: "100%", display: "flex", justifyContent: "center", backgroundColor: "rgb(244, 244, 244)"}}>
              <div style={{width: "50%", minHeight: "19em"}}>
                <SimpleStatement
                  statement={content.statement}
                  summary={content.summary}
                  buttonText={content.buttonText}
                />
              </div>
          </div>
  );

}
