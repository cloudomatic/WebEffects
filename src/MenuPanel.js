import * as React from 'react';
import Text from "./Text.js";
import CoolMenu from "./CoolMenu.js";
import SimpleStatement from "./SimpleStatement.js";

const fakeMenuItems = [
    { "id": "who", "label": "Who We Are"},
    { "id": "what", "label": "What We Do"},
    { "id": "products", "label": "Products"},
    { "id": "solutions", "label": "Solutions"},
]


const fakeMenuItemImplementations = [
    {
       "id": "who",
       "title": "We are thought leaders in AI",
       "summary": "Since 2004, we have driven innovation in machine learning and deep learning.  With 15 data scientists (PhD level) and 35 staff engineers (MA/MS level), we deliver the software and services needed to bootstrap clients into artifical intelligence",
       "buttonText": "Meet Drager",
       element: []
    },
    {
       "id": "what",
       "title": "We make deep learning accessible",
       "summary": "We have the products, the platform, the techniques, and the thought leadership to get you started in deep learning",
       "buttonText": "Discover Drager",
       element: []
    },
    {
       "id": "products",
       "title": "We create AI tools",
       "summary": "We offer a cloud based AI platform, and the Deep Space Kernel framework for next-generation data modeling and decision support",
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

export default function MenuPanel({content}) {

  const menuItems = content.menuItems
  const menuItemDescriptions = content.menuItemDescriptions

  var menuItemImplementations = [...menuItemDescriptions]

  const [selectedMenuItem, setSelectedMenuItem] = React.useState(1)


  const menuSelectionChanged = (id) => {
    for (var i in menuItemImplementations) { 
      if (menuItems[i].id == id) {
        setSelectedMenuItem(i)
        if (menuItemImplementations[i].element === undefined) menuItemImplementations[i].element = []
        if (menuItemImplementations[i].element.length = 0) menuItemImplementations[i].element.push(
          <SimpleStatement
            removeSpacers={true}
            content={{
              "statement": menuItemImplementations[i].title,
              "summary": menuItemImplementations[i].summary,
              "buttonText": menuItemImplementations[i].buttonText
            }}
          />
        )
        return
      }
    }
  }

  return (
    <div style={{width: "100%", display: "flex", flexWrap: "wrap", minHeight: "22.0em", backgroundColor: "rgb(244, 244, 244)", justifyContent: "center"}}>
          <div id="item-1" style={{width: "20em", backgroundColor: "none"}}>
            <CoolMenu 
              selectionChangeCallback={menuSelectionChanged} 
              defaultSelected="what" 
              menuItems={menuItems}
            />
          </div>
          <div id="item-1" style={{width: "35em", backgroundColor: "none"}}>
            <SimpleStatement
              removeSpacers={true}
              content={{
                "statement": menuItemImplementations[selectedMenuItem].title,
                "summary": menuItemImplementations[selectedMenuItem].summary,
                "buttonText": menuItemImplementations[selectedMenuItem].buttonText
              }}
            />
          </div>
    </div>
  )
  
  return <div></div>
}
