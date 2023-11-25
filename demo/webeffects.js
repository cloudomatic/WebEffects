function getSampleStarterContent() {
  return { 
      "companyName": "Drager AI",
      "companyLogo": "logo.png",
      "siteMap" : [
        [
          {
            "Products & Solutions" : {
              "Deep Space Kernel": "https://en.wikipedia.org/wiki/Kernel_method",
              "ML Plus": "https://en.wikipedia.org/wiki/Machine_learning",
              "Whitepapers": "https://en.wikipedia.org/wiki/White_paper",
              "Consulting": "https://www.ibm.com/consulting"
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
              "Board": "https://groundlings.com/about/board-of-directors",
              "Executive Leadership": "https://www.theonion.com/the-onion-is-the-world-s-leading-news-publication-offe-1819653457"
            }
          }
        ]
      ],
      "panels": [
        { 
          "component": "LatestNews", 
          "content": {
                  "imageRef": "quant_computer.png",
                  "headline": "Drager wins third R&D 100 award",
                  "caption": "Drager's next-generation Deep Space Kernel was acknowledged with the 2023 R&D 100 Breakthrough Award for most innovative product",
                  "buttonText": "Read More"
          }
        },
        {
          "component": "MenuPanel",
          "content": {
            "menuItems": [
              { "id": "who", "label": "Who We Are"},
              { "id": "what", "label": "What We Do"},
              { "id": "products", "label": "Products"},
              { "id": "solutions", "label": "Solutions"},
            ],
            "menuItemDescriptions": [
              {
                 "id": "who",
                 "title": "We are thought leaders in AI",
                 "summary": "Since 2004, we have driven innovation in machine learning and deep learning.  With 15 data scientists (PhD level) and 35 staff engineers (MA/MS level), we deliver the software and services needed to bootstrap clients into artifical intelligence",
                 "buttonText": "Meet Drager",
              },
              {
                 "id": "what",
                 "title": "We make deep learning accessible",
                 "summary": "We have the products, the platform, the techniques, and the thought leadership to get you started in DL-based decision support",
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
          }
        },
        { 
          "component": "Spacer"
        },
        {
          "component": "SpinningNumbers",
          "content": [
            { value: 97, description: "of our clients had never previously used machine learning or deep learning in their organizations" },
            { value: 66, description: "of our model implementations use existing on-premise compute, with no additional capacity investment"},
            { value: 68, description: "of our clients say that they have a need for generative AI"},
            { value: 48, description: "of CIOs surveyed said that they have already incorporated ML or DL software in their organizations"},
            { value: 36, description: "of of our clients feel that they could be getting more from their data, if they had the right partner"},
            { value: 66, description: "of our clients have used our platform for at least four years"}
          ]
        },
        {
          "component": "SwimRace",
          "content": {
            "Jeilin.Wang" : {
              position: "President & Board"
            },
            "Michelle.Caruthers" : {
              position: "Board"
            },
            "April.Demolay": {
              position: "CFO"
            },
            "Dowd.Rollinson": {
              position: "Chairman"
            },
            "Richard.Scruggs": {
              position: "CEO"
            },
            "Rod.Sterlington": {
              position: "Board"
            },
            "Ivy.Bradford": {
              position: "COO"
            },
            "Laila.Dickens": {
              position: "General Counsel"
            },
            "Clifford.Long": {
              position: "Board"
            },
            "Prince.Faisal.bin.Salam": {
              position: "Board"
            }
          }
        },
        {
          "component": "UpcomingEvents",
          "content": {
            "date": "November 1st-2nd, 2023",
            "location": "Bletchley Park, London, UK",
            "description" : "Visit the Drager booth at 1-G4 to learn about the Deep Space Kernel and how Drager is bringing next-generation deep learning to clients arond the globe",
            "image": "ai_summit.webp"
          }
        },
        {
          "component": "FloatOverImagePanel",
          "content": {
                  "imageRef": "laptop-woman-shaded.png",
                  "imageRefHover": "laptop-woman-not-shaded.png",
                  "headline": "Drager is hiring",
                  "caption": "You were never going to launch that startup anyway.  Give up on your dreams and come work for us doing soul-sucking work.",
                  "buttonText": "View Opportunities"
          }
        },
        {
          "component": "ExpandingTileSet",
          "content": {
            "tiles": [ 
              { 
                image: "refinery2.png",
                title: "Refining the refinery: Machine learning for sustainable production",
                caption: "Re-designed fluid routing in an existing refinery design eliminated 4 miles of piping",
                roi: "450",
                logo: "shell.png"
              },
              { 
                image: "kim.png",
                title: "A DL approach to managing surveillance at scale",
                caption: "Better identification of baesinja reduced executions by 30% and lead to fewer human-rights sanctions",
                roi: "224",
                logo: "korea.png"
              },
              { 
                image: "resort2.png",
                title: "Hawaiian Entropic: Generating repeat business in Maui",
                caption: "ML-driven decision support identified repeat-stay clients, resulting in an ROI of 4800%",
                roi: "488",
                logo: "hawaii.png"
              }
            ]
          }
        },
        {
          "component": "Spacer"
        },
        {
          "component": "UpcomingEvents",
          "content": {
            "date": "Dec 10 – Dec 16, 2023",
            "location": "New Orleans - Ernest N. Morial Convention Center",
            "description" :"Co-founder and CTO Gerhard Bauer will deliver the Tuesday 10am keynote address, and join academic and industry leaders for an AI safety panel on Thursday at 1pm",
            "image": "nips2023.jpeg"
          }
        },
        {
          "component": "SimpleStatementStandalone",
          "content": {
            "statement": "Gartner releases DL magic quadrant for 2023",
            "summary": "Once again, Drager's Deep Space Kernel is recognized as the thought leader in machine learning at scale",
            "buttonText": "Learn More",
          }
        },
        {
          "component": "SiteFooter",
          "notes": "The SiteFooter uses the sitemap (above) as well as the corp ID/logo defined above."
        }
      ]
    }
  
}

function clearSavedContent() {
  localStorage.removeItem("siteContent")
}

function storeContent(content) {
  localStorage.setItem("siteContent", JSON.stringify(content))
}

function getContent() {
  var storedContent = localStorage.getItem("siteContent")
  var content = {}
  try {
    content = JSON.parse(storedContent)
  } catch(error) {
    alert("Error: " + error + ".  The site content in localStorage has become corrupted.  The site will reset to defaults.  In a production system, any changes to the site would be staged in a QA site, and the code would not allow invalid panel data to be saved to the CMS.")
  }
  if (content != null && content.hasOwnProperty("companyName")) return content
  else {
    localStorage.setItem("siteContent", JSON.stringify(getSampleStarterContent()))
    return getSampleStarterContent()
  }
}


//
// Attempt to 'flatten' the jsonObject into an object of form:
//
// {
//  "1": {
//    key: "name",
//   type: "string",
//   value: "value",
//   indentLevel: 0
// }}
//
// where "1" is the line number of the flat object.  This enables a JSON object to be displayed as a 2D table
//
// When allowEnumerationsInKey is set, the JSON key can include details about allowed values, e.g.
//
//  {"pet::enum::dog:cat:chicken:bear" : "dog"}
//
function convertJsonObjectToFlatObject(jsonObject, flatObject, indentLevel) {
    const allowEnumerationsInKey = true
    for (var key in jsonObject) {
      flatObject[flatObject.lineNumber] = {}
      if (allowEnumerationsInKey && key.includes("::enum::")) {
        flatObject[flatObject.lineNumber]["key"] = key.substring(0, key.indexOf("::enum::"))
        flatObject[flatObject.lineNumber]["enum"] = key.substring(key.indexOf("::enum::") + 8, key.length).split(":")
      } else flatObject[flatObject.lineNumber]["key"] = key
      flatObject[flatObject.lineNumber]["type"] = typeof (jsonObject[key])
      if (Object.prototype.toString.call(jsonObject[key]) === '[object Array]') {
        flatObject[flatObject.lineNumber]["type"] = "array"
        flatObject[flatObject.lineNumber]["length"] = jsonObject[key].length
      }
      flatObject[flatObject.lineNumber]["indentLevel"] = indentLevel
      if (flatObject[flatObject.lineNumber]["type"] == "object") {
        flatObject.lineNumber++
        convertJsonObjectToFlatObject(jsonObject[key], flatObject, indentLevel + 1)
      } else if (flatObject[flatObject.lineNumber]["type"] == "array") {
        if (jsonObject[key].length == 0) flatObject.lineNumber++
        else for (var i = 0; i < jsonObject[key].length; i++) {
          if (i < 1) flatObject.lineNumber++
          var str = key.toString() + "[" + i.toString() + "]"
          convertJsonObjectToFlatObject({ [str]: jsonObject[key][i] }, flatObject, indentLevel + 1)
        }
      } else {
        flatObject[flatObject.lineNumber]["value"] = jsonObject[key]
        flatObject.lineNumber++
      }
    }
    return flatObject
}

function convertFlatObjectBackToJsonObject(flatObject, jsonObject, indentLevel, globalLineNumber)  {
  while (globalLineNumber.lineNumber < flatObject.lineNumber) {
    if (!flatObject.hasOwnProperty(globalLineNumber.lineNumber)) {
      return
    } else if (flatObject[globalLineNumber.lineNumber]["indentLevel"] < indentLevel) {
      return
    } else if (flatObject[globalLineNumber.lineNumber]["type"] == "string" || flatObject[globalLineNumber.lineNumber]["type"] == "number" || flatObject[globalLineNumber.lineNumber]["type"] == "boolean") {
      if (Object.prototype.toString.call(jsonObject) === '[object Object]') {
        jsonObject[flatObject[globalLineNumber.lineNumber]["key"]] = flatObject[globalLineNumber.lineNumber]["value"]
      } else if (Object.prototype.toString.call(jsonObject) === '[object Array]') {
        jsonObject.push(flatObject[globalLineNumber.lineNumber]["value"])
      }
      globalLineNumber.lineNumber++
    } else if (flatObject[globalLineNumber.lineNumber]["type"] == "object") {
      const key = flatObject[globalLineNumber.lineNumber]["key"]
      const currentIndentLevel = flatObject[globalLineNumber.lineNumber]["indentLevel"]
      globalLineNumber.lineNumber++
      if (Object.prototype.toString.call(jsonObject) === '[object Object]') {
        var value = {} 
        convertFlatObjectBackToJsonObject(
              flatObject, 
              value,
              indentLevel + 1,
              globalLineNumber
        )
        jsonObject[key] = value
      } else if (Object.prototype.toString.call(jsonObject) === '[object Array]') {
        var value = {}
        convertFlatObjectBackToJsonObject(
              flatObject,
              value,
              indentLevel + 1,
              globalLineNumber
        )
        jsonObject.push(value)
      }
    } else if (flatObject[globalLineNumber.lineNumber]["type"] == "array") {
      const key = flatObject[globalLineNumber.lineNumber]["key"]
      const currentIndentLevel = flatObject[globalLineNumber.lineNumber]["indentLevel"]
      globalLineNumber.lineNumber++
      if (Object.prototype.toString.call(jsonObject) === '[object Object]') {
        var value = []
        convertFlatObjectBackToJsonObject(
              flatObject,
              value,
              indentLevel + 1,
              globalLineNumber
        )
        jsonObject[key] = value
      } else if (Object.prototype.toString.call(jsonObject) === '[object Array]') {
        var value = []
        convertFlatObjectBackToJsonObject(
              flatObject,
              value,
              indentLevel + 1,
              globalLineNumber
        )
        jsonObject.push(value)
      }
    } else {
      // A type we've never encountered
      debugger
    }
  } 
  return jsonObject
}


function testConvertJsonObjectToFlatObject() {
  const object1 = {
      "companyName": "Drager AI",
      "companyLogo": "logo.png",
      "panels": [
        {
          "component": "LatestNews_",
          "content": {}
        }, {}
      ]
  }

  const testObjects = [
    {
      "this": 1
    },
    {
      "this": "that",
      "some": "thing",
      "array": ["one", "two" ]
    },
    {
      "this": { "is": "Sparta"},
      "another": "thing"
    },
    {
      "this": "that",
      "objectArray": [ {} ],
      "emptyKey": { }
    },
    {
      "this": "that",
      "someArray": ["one"],
      "anotherArray": ["one", "two"],
      "objectArray": [ {} ],
      "another": "setting"
     },
     {
      "biggerObject": {
        "panels": [
          {
            "component": "LatestNews_",
            "content": {}
          }, {}
        ]
       },
       "biggerObjectArray": [ "", {}, {"some": "more"}]
     }, {
      "siteMap" : [
          [
            {
              "Products & Solutions" : {
                "Deep Space Kernel": ""
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
        ],
        "companyName": "Drager AI",
        "companyLogo": "logo.png",
        "panels": [
          {
            "component": "LatestNews_",
            "content": {}
          },{}
        ]
      },
      {
            "component": "SpinningNumbers",
            "content": [
              { value: 97, description: "of our clients had never previously used machine learning or deep learning in their organizations" },
              { value: 66, description: "of our model implementations use existing on-premise compute, with no additional capacity investment"},
              { value: 68, description: "of our clients say that they have a need for generative AI"},
              { value: 48, description: "of CIOs surveyed said that they have already incorporated ML or DL software in their organizations"},
              { value: 36, description: "of of our clients feel that they could be getting more from their data, if they had the right partner"},
              { value: 66, description: "of our clients have used our platform for at least four years"}
            ]
       }

  ]

  for (var o in testObjects) {
    //var obj = testObjects[2]
    var obj = testObjects[o]
    const originalJson = convertFlatObjectBackToJsonObject( convertJsonObjectToFlatObject(obj, {"lineNumber": 0}, 0), {}, 0, { lineNumber: 0 })
    if (JSON.stringify(originalJson) != JSON.stringify(JSON.parse(JSON.stringify(obj)))) {
      console.log("Test failure")
      console.log("---- original object ---")
      console.log(JSON.stringify(obj), null, 2)
      console.log("---- modified ----")
      console.log(JSON.stringify(originalJson), null, 2)
      console.log("---- modified ----")
      throw new Error("Unit test failed for object " + o)
    }
    //debugger
  }
  debugger
}

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

function unitTests() {
  return 0
}
