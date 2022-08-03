import React, { useLayoutEffect, useState } from 'react';
import { MsiteMaintab } from './components/MsiteMainTab';
import { ShoppersStop } from './components/ShopperStop';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default function ShowWindowDimensions() {
  const [width, height] = useWindowSize();
  let msiteDispaly = width < 361 ? <MsiteMaintab /> : <ShoppersStop /> 
  return (
    <div>
        <div>{msiteDispaly}</div>
        <div><h1>Window size: {width} x {height}</h1></div>
    </div>
 
  );
}