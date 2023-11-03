import * as React from 'react';
import Text from './Text';

export default function MastheadLogo({imageRef, label}) {


  return (
    <div style={{padding: "0.4em 0 0.5em 0.4em", display: "flex", float: "left"}}>
      <img style={{width: "2em", paddingRight: "0.5em"}} src={imageRef}  />
      <Text color="white" fontWeight="bold" fontSize="1.4em">
        {label}
      </Text>
    </div>
  )

}
