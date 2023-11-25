import * as React from 'react';

export default function ParallaxPanel({content}) {

  const scrollHeightStart = document.body.scrollHeight - window.innerHeight
  const [scrollHeight, setScrollHeight] = React.useState(document.body.scrollHeight - window.innerHeight)
  const [scrollHeightMax, setScrollHeightMax] = React.useState(scrollHeightStart)

  React.useEffect(() => {
    function handleScroll() {
      setScrollHeight(document.body.scrollHeight - window.innerHeight)
    }
    window.addEventListener('scroll', handleScroll);
  }, []);


  return (
      <div  style={{width: "100%", display: "flex", justifyContent: "center", backgroundColor: "black"}}>
        <div id="empty-root-div" style={{ height: "25em", width: "50em", backgroundColor: "black", overflow: "auto", backgroundImage: "url(" + content.imageRef + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
          {scrollHeightStart}
          <br />
          {scrollHeight}
          <br />
          {scrollHeightMax}
        </div>
      </div>
  );

}
