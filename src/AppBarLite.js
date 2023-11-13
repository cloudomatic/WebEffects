import * as React from 'react';
import Icon from './Icon';
import Text from './Text';
import Tooltip from '@mui/material/Tooltip';
import AppBar from '@mui/material/AppBar';
import MastheadLogo from './MastheadLogo.js';
import Menu from './Menu.js';
import RadioPanel from './RadioPanel.js';

// https://jsfiddle.net/yX3p9/7/

export default function AppBarLite({companyName, companyLogo, setMode, setDeviceType, deviceOptions}) {


  const [deviceMenuOpen, setDeviceMenuOpen] = React.useState(false)

  const defaultMobileSelection = "Browser"

  const handleSetDeviceType = (type) => {
    setDeviceType(type)
    handleDeviceMenuClose()
  }

  const handleDeviceMenuClose = () => {
    if (deviceMenuOpen) setDeviceMenuOpen(false)
  }

if (true) return (
    <div id="app-bar-lite">
      <AppBar color="transparent" position="fixed" elevation={0}>
        <div style={{display: "flex", backgroundColor: "black", width: "100%", margin: "0 0 0 0", justifyContent: "space-between", alignItems: "center"}}>
          <div id="left-side-icons" style={{ }}>
            <MastheadLogo
              imageRef={companyLogo}
              label={companyName}
            />
          </div>
          <div id="right-side-icons" style={{margin: "0 1.0em 0 0", cursor: "pointer"}} >
              <span style={{marginRight: "0.4em"}} onClick={() => setMode("site")} >
                <Tooltip  placement="left" disableInteractive title="Show site">
                  <span>
                    <Icon name="WebIcon" color="white" transform="scale(0.75)" />
                  </span>
                </Tooltip>
              </span>
              <span id="device-menu" style={{marginRight: "0.4em"}} onClick={(event) => {setDeviceMenuOpen(!deviceMenuOpen); event.stopPropagation()}}>
                    <Tooltip placement="left"  disableInteractive title={deviceMenuOpen ? "" : "Mobile options"}><span><Icon name="MobileScreenShareIcon" color="white" transform="scale(0.60)" /></span></Tooltip>
                    <Menu 
                      open={deviceMenuOpen}
                      onClose={handleDeviceMenuClose}
                    >
                      <RadioPanel defaultSelection={defaultMobileSelection} panelItems={deviceOptions} onSelect={handleSetDeviceType} />
                    </Menu>
              </span>
              <span onClick={() => setMode("cms")}>
                <Tooltip title="Content Management System">
                  <span>
                    <Icon name="Settings" color="white" transform="scale(0.75)" />
                  </span>
                </Tooltip>
              </span>
          </div>
        </div>
      </AppBar>
    </div>
  )
}

