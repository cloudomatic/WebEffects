
function getTheme() {
  if (localStorage.getItem("hostmanager.options.theme") == "dark") {
    return {
      name: 'dark',
			primaryColor: 'black',
			primaryColorComplement: 'darkGray',
			textColor: 'darkGray',
			appBarBackgroundColor: 'none',
			appBarMenuBackgroundColor: 'rgb(62, 70, 89)',
			appBarMenuIconColor: 'rgb(45, 47, 54)',
			appBarMenuTextColor: 'darkGray',
			appBarMenuAntSwitchColor: '#fff',
			appBarMenuAntSwitchBackgroundColor: '',
			appBarMenuAntSwitchColorDisabled: '',
			appBarMenuAntSwitchBackgroundColorDisabled: '',
			componentAreaBackgroundColor: 'rgb(35, 35, 36)',
			_warningLabelBackgroundColor: 'rgb(247, 170, 37)',
      warningLabelBackgroundColor: 'gray',
			warningLabelTextColor: 'black',
			componentViewSwitchSelectedColor: 'rgb(45, 47, 54)',
			componentViewSwitchNotSelectedColor: 'rgb(139, 139, 143)',
			fileManagerIconColor: 'rgb(70, 83, 115)',
			shadedBoxColor: 'rgb(45, 45, 46)',
			componentAreaIconColor_blue: 'rgb(114, 148, 194)',
			componentAreaIconColorUnselected_blue: 'rgb(139, 139, 143)',
			componentAreaIconColor_: 'rgb(45, 47, 54)',
			componentAreaIconColor: 'rgb(70, 83, 115)',
			componentAreaIconColorUnselected: 'rgb(139, 139, 143)'
		}
  } else return {
    name: 'default',
    primaryColor: '#0063b2ff',
    _primaryColor: "red",
    primaryColorComplement: 'white',
    textColor: 'rgb(45, 47, 54)',
    appBarBackgroundColor: 'none',
    appBarMenuBackgroundColor: 'white', 
    appBarMenuIconColor: 'rgb(45, 47, 54)',
    appBarMenuTextColor: 'rgb(45, 47, 54)',
    appBarMenuAntSwitchColor: '#fff',
    appBarMenuAntSwitchBackgroundColor: '',
    appBarMenuAntSwitchColorDisabled: '',
    appBarMenuAntSwitchBackgroundColorDisabled: '',
    componentAreaBackgroundColor: 'white',
    warningLabelBackgroundColor: 'yellow',
    warningLabelTextColor: 'black',
    componentViewSwitchSelectedColor: 'rgb(45, 47, 54)',
    componentViewSwitchNotSelectedColor: 'rgb(139, 139, 143)',
    fileManagerIconColor: 'rgb(114, 148, 194)',
    shadedBoxColor: 'rgb(227, 236, 250)',
    componentAreaIconColor_blue: 'rgb(114, 148, 194)',
    componentAreaIconColorUnselected_blue: 'rgb(139, 139, 143)',
    componentAreaIconColor_: 'rgb(45, 47, 54)',
    componentAreaIconColor_: '#014580',
    componentAreaIconColor: 'rgb(114, 148, 194)',
    componentAreaIconColorUnselected: 'rgb(139, 139, 143)'
  }
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


