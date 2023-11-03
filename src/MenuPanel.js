import * as React from 'react';
import Text from "./Text.js";
import CoolMenu from "./CoolMenu.js";
import SimpleStatement from "./SimpleStatement.js";

export default function MenuPanel() {

  const menuItems = [
    { "id": "who", "label": "Who We Are"},
    { "id": "what", "label": "What We Do"},
    { "id": "products", "label": "Products"},
    { "id": "solutions", "label": "Solutions"},
  ]

  var menuItemImplementations = [
    { 
       "id": "who",
       "title": "We are thought leaders in AI",
       "summary": "Since 2004, we have driven innovation in machine learning and deep learning.  With 15 data scientists (PhD level) and 35 staff engineers (MA/MS level), we deliver the software and services needed to bootstrap clients into artifical intelligence",
       "buttonText": "Meet Draper",
       element: []
    },
    {  
       "id": "what", 
       "title": "We make deep learning accessible",
       "summary": "We have the products, the platform, the techniques, and the thought leadership to get you started in deep learning",
       "buttonText": "Discover Draper",
       element: []
    },
    { 
       "id": "products",
       "title": "We create AI tools",
       "summary": "We offer a cloud based AI platform, and the Deep Space Kernel deep learning framework",
       "buttonText": "Learn More",
       element: []
    },
    { 
       "id": "solutions",
       "title": "We deliver solutions",
       "summary": "We help clients to select the right AI model and framework, and offer cloud-based compute resources to perform data analysis",
       "buttonText": "Learn More",
       element: []
    }
  ]

  const [selectedMenuItem, setSelectedMenuItem] = React.useState(1)

  const menuSelectionChanged = (id) => {
    for (var i in menuItemImplementations) { 
      if (menuItems[i].id == id) {
        setSelectedMenuItem(i)
        if (menuItemImplementations[i].element.length = 0) menuItemImplementations[i].element.push(
          <SimpleStatement
              statement={menuItemImplementations[i].title}
              summary={menuItemImplementations[i].summary}
              buttonText={menuItemImplementations[i].buttonText}
          />
        )
        return
      }
    }
  }

/*
  // We create an array of SimpleStatements, so that we can have each render independently as a unique instance
  var simpleStatementElements = []
  for (var i in menuItemImplementations) {
    simpleStatementElements.push(
      <SimpleStatement
              statement={menuItemImplementations[i].title}
              summary={menuItemImplementations[i].summary}
              buttonText={menuItemImplementations[i].buttonText}
      />
    )
  }
*/
  

  return (
        <div style={{display: "flex", flexWrap: "wrap", margin: "0 0 0 0", padding: "1.0em 0 2.0em 0",  justifyContent: "center", backgroundColor: "rgb(244, 244, 244)"}}>
          <div style={{marginRight: "5.0em", width: "10.0em"}}>
            <CoolMenu 
              selectionChangeCallback={menuSelectionChanged} 
              defaultSelected="what" 
              menuItems={menuItems}
            />
          </div>
          <div>

            <SimpleStatement 
              statement={menuItemImplementations[selectedMenuItem].title}
              summary={menuItemImplementations[selectedMenuItem].summary}
              buttonText={menuItemImplementations[selectedMenuItem].buttonText}
            />

          </div>
        </div>
  );

}
