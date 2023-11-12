import * as React from 'react';
import JsonFormEditor from './JsonFormEditor';
import Text from './Text';

export default function ContentEditor() {

  const json = window.getContent()

  const contentChanged = () => {
    debugger
    console.log("text")
  }

  return (
    <div>
        <div id="empty-root-div" style={{ marginTop: "5em", backgroundColor: "white", display: "flex", justifyContent: "center" }}>
          <div style={{maxWidth: "40em", textAlign: "center"}}>
            <span style={{fontSize: "0.8em", lineHeight:"1.0"}}>
              <i>This framework makes use of custom React panels to handle effects/animations, and can be connected to any content management system (CMS).  A sample CMS is provided here, content is stored in the browser's localStorage.  Click <span style={{cursor: "pointer"}} onClick={() => window.clearSavedContent()}><b>here</b></span> to reset the site back to defaults.  Since there's no active "save" button, if the browser's localStorage JSON becomes corrupted, the CMS will automatically reset to defaults.</i>
            </span>
          </div>
        </div>
        <div id="empty-root-div" style={{ height: "50em", backgroundColor: "white", display: "flex", justifyContent: "center" }}>
          <div style={{width: "75%", height: "90vh", margin: "2.0em 0 0 0" }}>
              <JsonFormEditor json={json} onChangeCallback={contentChanged} defaultView="table" />
            </div>
        </div>
    </div>
  );

}