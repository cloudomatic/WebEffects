import * as React from 'react';
import Text from './Text.js';

export default function ExecBio({data, name, layout}) {

  const [selected, setSelected] = React.useState(false)


  if (layout == 'vertical') return (
        <div id="empty-root-div" style={{ display: "block", height: "100%", width: "100%", border: selected ? "1px solid #EFEFEF" : "0px solid #EFEFEF", padding: "0 0 0 0", backgroundColor: selected ? "white" : "white", cursor: "pointer"}} 
          onMouseOver={() => setSelected(true)} 
          onMouseOut={() => setSelected(false)}
        >
          <div id="photo" style={{backgroundImage: "url(" + name + ".png)", backgroundRepeat: "no-repeat", height: "75%", width: "90%", border: "0px solid blue", margin: "auto", backgroundPosition: "top", backgroundSize: "contain"}} />
          <div id="name" style={{margin: "auto", padding: "4% 0 0 0", border: "0px solid green", height: "22%", textAlign: "center"}}>
            <Text fontSize="1.2em" fontWeight="bold" lineHeight="1.0" color={selected ? window.getTheme().fileManagerIconColor : window.getTheme().textColor}> 
              {name.replaceAll(".", " ")}
            </Text>
            <Text fontSize="0.9em" fontWeight="normal">
              {data[name].position}
            </Text>
          </div>
        </div>
  );

  return (
        <div id="empty-root-div" style={{ display: "flex", height: "100%", width: "100%", padding: "0 0 0 0",  border: selected ? "1px solid #EFEFEF" : "0px solid #EFEFEF", backgroundColor: selected ? "white" : "white", cursor: "pointer"}} 
          onMouseOver={() => setSelected(true)} 
          onMouseOut={() => setSelected(false)}
        >
          <div id="photo" style={{backgroundImage: "url(" + name + ".png)", backgroundRepeat: "no-repeat", height: "100%", width: "70%", border: "0px solid blue", margin: "auto", backgroundPosition: "center", backgroundSize: "contain"}} />
          <div id="name" style={{margin: "auto", padding: "0", border: "0px solid green", textAlign: "center"}}>
            <Text fontSize="1.2em" fontWeight="bold" lineHeight="1.2" color={selected ? window.getTheme().fileManagerIconColor : window.getTheme().textColor}>
              {name.replaceAll(".", " ")}
            </Text>
            <Text fontSize="0.8em" fontWeight="normal">
              {data[name].position}
            </Text>
          </div>
        </div>
  );
}
