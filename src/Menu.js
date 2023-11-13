import * as React from 'react';

export default function Menu({menuItems = [], displayElement = <></>, onClose, open, children}) {

  //debugger
  const width = "20em"


  const styles = {
    menu : {
      position: "relative",
      display: "inline",
      float: "right",
      width: "100%"
    },
    menuContent : {
      display: open ? "block" : "none",
      borderRadius: "4px",
      position: "absolute",
      right: "0px",
      backgroundColor: "#d8dbe6",
      boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
      whiteSpace: "nowrap",
      padding: "12px 16px",
      cursor: "pointer"
    },
    menuItem: {
      padding: "0.3em 0 0.3em 0",
    }
  }


/*
  const handleSelection = (event, item, index) => {
    if (onSelectItem !== undefined) onSelectItem(item, index)
    setOpen(false)
  }
*/

  // A menu closer
  window.addEventListener('click', function(e) {
    if (document.getElementById('menu-root-div') === undefined || document.getElementById('menu-content-div') == undefined) return
    if (document.getElementById('menu-root-div').contains(e.target) || (document.getElementById('menu-content-div').contains(e.target))){
    } else {
      if (open) onClose()
    }
  })

  // {/*<span styles={{width: "100%"}}>{displayElement}</span>*/}
  return (
          <div id="menu-root-div" style={styles.menu}>
            <div id="menu-content-div" style={styles.menuContent}>
              {children}
            </div>
          </div>
  )

}
