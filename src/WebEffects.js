import * as React from 'react';

//import AppBarLite from './AppBarLite'
import EmptyComponent from './EmptyComponent'
import Text from "./Text.js";
import ExpandingTileSet from "./ExpandingTileSet.js";
import SpinningNumbers from "./SpinningNumbers.js";
import SiteFooter from './SiteFooter.js';


export default function HostManager() {

  return (
    <>
          <SpinningNumbers />
          <SiteFooter />
          <ExpandingTileSet />
    </>
  )
}
