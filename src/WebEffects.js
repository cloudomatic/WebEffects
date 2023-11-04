import * as React from 'react';

import AppBarLite from './AppBarLite'
import EmptyComponent from './EmptyComponent'
import Text from "./Text.js";
import ExpandingTileSet from "./ExpandingTileSet.js";
import SpinningNumbers from "./SpinningNumbers.js";
import SiteFooter from './SiteFooter.js';
import Masthead from './Masthead.js';
import WhatWeDo from './WhatWeDo.js';
import LatestNews from './LatestNews.js';
import UpcomingEvents from './UpcomingEvents.js';
import SimpleStatement from './SimpleStatement.js';
import CoolMenu from './CoolMenu.js';
import MenuPanel from './MenuPanel.js';

const companyName="Drager AI"

const companyLogo="logo.png"

const surveyData = [
  { value: 97, description: "of our clients had never previously used machine learning or deep learning in their organizations" },
  { value: 66, description: "of our model implementations use existing on-premise compute, with no additional capacity investment"},
  { value: 68, description: "of our clients say that they have a need for generative AI"},
  { value: 48, description: "of CIOs surveyed said that they have already incorporated ML or DL software in their organizations"},
  { value: 36, description: "of of our clients feel that they could be getting more from their data, if they had the right partner"},
  { value: 66, description: "of our clients have used our platform for at least four years"}
]


const menuItems = [
    { "id": "who", "label": "Who We Are"},
    { "id": "what", "label": "What We Do"},
    { "id": "products", "label": "Products"},
    { "id": "solutions", "label": "Solutions"},
  ]

const menuItemDescriptions = [
    {
       "id": "who",
       "title": "We are thought leaders in AI",
       "summary": "Since 2004, we have driven innovation in machine learning and deep learning.  With 15 data scientists (PhD level) and 35 staff engineers (MA/MS level), we deliver the software and services needed to bootstrap clients into artifical intelligence",
       "buttonText": "Meet Drager",
    },
    {
       "id": "what",
       "title": "We make deep learning accessible",
       "summary": "We have the products, the platform, the techniques, and the thought leadership to get you started in deep learning",
       "buttonText": "Discover Drager",
    },
    {
       "id": "products",
       "title": "We create AI tools",
       "summary": "We offer a cloud based AI platform, and the Deep Space Kernel framework for next-generation data modeling and decision support",
       "buttonText": "Learn More",
    },
    {
       "id": "solutions",
       "title": "We deliver solutions",
       "summary": "We help clients to select the right AI model and framework, and offer cloud-based compute resources to perform data analysis",
       "buttonText": "Learn More",
    }
]



const siteMap = [
  [
    {
      "Products & Solutions" : {
        "Deep Space Kernel": "",
        "ML Plus": "",
        "Whitepapers": "",
        "Consulting": ""
    }}
  ],
  [
    {
      "Learn About" : {
        "What is Hybrid Cloud": "https://www.ibm.com/topics/hybrid-cloud?lnk=fle",
        "What is Artificial Intelligence?": "https://www.ibm.com/topics/artificial-intelligence?lnk=fle",
        "What is Machine Learning?": "https://www.ibm.com/topics/machine-learning?lnk=fle"
      }
    }, {
      "About Us": {
        "Board": "",
        "Executive Leadership": ""
      }
    }
  ]
]

export default function WebEffect() {

  document.body.style.backgroundColor="black"
  const [windowDimensions, setWindowDimensions] = React.useState(window.getWindowDimensions());

  const styles = {
    rowDiv : {
      backgroundColor: "white",
      margin: "0 0 2.0em 0"
    }
  }

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(window.getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
  }, []);

  var mobile = (windowDimensions.width < 700)

  return (
    <>
        <AppBarLite companyName={companyName} companyLogo={companyLogo} />
        <div id="app-bar-spacer" style={{height: "0.0em"}} />
        <div style={{backgroundColor: "white"}}>
          <LatestNews 
            mobile={mobile}
            imageRef="quant_computer.png"
            headline="Drager wins third R&D 100 award"
            caption="Drager's next-generation Deep Space Kernel was acknowledged with the 2023 R&D 100 Breakthrough Award for most innovative product"
            buttonText="Read More"
          />
          <MenuPanel 
            menuItems={menuItems}
            menuItemDescriptions={menuItemDescriptions}
          />
          <div id="Spacer" style={{backgroundColor: "white", height: "2.0em"}} />
          <SpinningNumbers data={surveyData}/>
          <div id="Spacer" style={{backgroundColor: "white", height: "2.0em"}} />
					<UpcomingEvents
								 date="November 1st-2nd, 2023"
								 location="Bletchley Park, London, UK"
								 description="Visit the Drager booth at 1-G4 to learn about the Deep Space Kernel and how Drager is bringing next-generation deep learning to clients arond the globe"
								 image="ai_summit.webp"
		  		 />
          <ExpandingTileSet mobile={true} />
          <div id="Spacer" style={{backgroundColor: "white", height: "2.0em"}} />
          <UpcomingEvents
               date="Dec 10 – Dec 16, 2023"
               location="New Orleans - Ernest N. Morial Convention Center"
               description="Co-founder and CTO Gerhard Bauer will deliver the Tuesday 10am keynote address, and join academic and industry leaders for an AI safety panel on Thursday at 1pm"
               image="nips2023.jpeg"
          />
          <div style={{width: "100%", display: "flex", justifyContent: "center", backgroundColor: "rgb(244, 244, 244)"}}>
              <div style={{width: "50%", minHeight: "19em"}}>
								<SimpleStatement
									statement="Gartner releases DL magic quadrant for 2023"
									summary="Once again, Drager's Deep Space Kernel is recognized as the thought leader in machine learning at scale"
									buttonText="Learn More"
								/>
              </div>
          </div>
          <SiteFooter companyName={companyName} companyLogo={companyLogo} siteMap={siteMap} />
        </div>
    </>
  )
}
