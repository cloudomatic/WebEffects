import * as React from 'react';
import Text from './Text.js';

export default function ImageWithVerticalTextLabel({imageRef, label, size="2.5", margin}) {

  const styles = {
    root: {
      textAlign: "center", 
      margin: margin
    }
  }


  return (
          <div style={styles.root}>
            <img style={{width: (size * 4) + "em"}} src={imageRef} />
            <Text color="white" fontWeight="bold" fontSize={size + "em"}>
              {label}
            </Text>
          </div>
  );

}
