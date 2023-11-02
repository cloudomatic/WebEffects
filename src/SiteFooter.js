import * as React from 'react';
import Text from "./Text.js";

const siteMap = [
  [
    {
      "Products & Solutions" : {
        "Deep Space Kernel": "",
        "ML Plus": "",
        "Whitepapers": "",
        "Consulting": ""
    }}
  ]
  ,
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

siteMap.map((column, index) => {
  console.log()
  column.map((category, index) => {
    console.log("Category: " + Object.keys(category)[0])
    Object.keys(category[Object.keys(category)[0]]).map((topic, t_index) => (
      console.log("Topic: " + topic)
    ))
  })
})

export default function SiteFooter() {

  const styles = {
    root: {
      padding: "1.5em 0 0 2.9em", display: "flex", backgroundColor: "rgb(26,24,31)", minHeight: "15em",  display: "flex", flexWrap: "wrap",  justifyContent: "left", alignItems: "start" 
    },
    corpIdBox: {
      textAlign: "center", padding: "0 3.0em 0", marginRight: "3.0em"
    },
    columnBox: {
      width: "25%", padding: "1.0em 2.0em 0 0"
    },
    categoryBox: {
      padding: "0 0 2.0em 0"
    },
    categoryNameBox: {
      padding: "0em 0 0.5em 0",
      fontSize: "1.1em"
    },
    topicBox: {
      padding: "0.2em 0 0.5em 2.0em", cursor: "pointer", 
      fontSize: "0.9em"
    }
  }

  return (
        <div style={styles.root}>
          <div style={styles.corpIdBox}>
            <img style={{width: "10em"}}src="logo.png" />
            <Text color="white" fontWeight="bold" fontSize="2.4em">
              Drager AI
            </Text>
          </div>
          {
            siteMap.map((column, index) => (
							<div key={index} id="column-2" style={styles.columnBox}>
								<Text color="white">
									{
										column.map((category, cat_index) => (
											<div id="category-div" key={cat_index} style={styles.categoryBox}>
												<div id={cat_index + "-category-name"} style={styles.categoryNameBox}>
													<Text color="white" fontWeight="bold" fontSize={styles.categoryNameBox.fontSize} style={{paddingBottom: "0.6em"}}>{Object.keys(category)[0]}</Text>
												</div>
												{
													Object.keys(category[Object.keys(category)[0]]).map( (topic, t_index) => (
														<div key={t_index} style={styles.topicBox}>
															<Text color="white" fontSize={styles.topicBox.fontSize}>
																{topic}
															</Text>
														</div>
                          ))
												}
											</div>
										))
									}
								</Text>
							</div>
            ))
          }
        </div>
  );


/*
  return (
   <div id="div-tile-file-view" style={{   display: "flex", flexWrap: "wrap",  justifyContent: "center", alignItems: "start",  paddingTop: "0.0em"}}>
     {
       data.map( (item, index) => (
              <div key={index} style={{border: "0px solid black", marginTop: "0.0em", width: "20em", margin: "10px", textAlign: "left", padding: "0.4em 0 0.4em 0.8em"}}>
                <div style={{textAlign: "left", borderBottom: "3px solid " + window.getTheme().fileManagerIconColor}}>
                  <Text fontSize="3.0em" fontWeight= "bold">
                    {Math.min(data[index].value, spinningNumbers[index])}%
                  </Text>
                </div>
                <div style={{paddingTop: "0.7em"}}>
                  <Text>
                    {item.description}
                  </Text>
                </div>
              </div>
        ))
      }
    </div>
  );
*/
}
