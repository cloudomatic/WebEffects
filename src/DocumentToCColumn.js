import * as React from 'react';
import Text from "./Text.js";

export default function DocumentToCColumn({column}) {

  const style = {
    heightBetweenCategories: "2.0em"
  }

  return (
    <div style={{border: "0px solid black"}}>
      {
        column.map((category, cat_index) => (
          <div style={{marginBottom: style.heightBetweenCategories}}>
						<Text color="white" fontSize="1.4em" fontWeight="bold">
							{Object.keys(category)[0]}
						</Text>
						<div style={{margin: "1.0em 0 0 2.0em"}}>
							{
														Object.keys(category[Object.keys(category)[0]]).map( (topic, t_index) => (
															<div key={t_index} style={{ margin: "0.5em 0 0 0", cursor: "pointer"}}>
																<Text color="white" fontSize="0.8em">
																	{topic}
																</Text>
															</div>
														))
							}
						</div>
          </div>
        ))
      }
    </div>
  );
}
