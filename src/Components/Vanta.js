import React, { useState, useEffect, useRef,useLayoutEffect } from 'react'
import FOG from 'vanta/dist/vanta.fog.min'

const Vanta = () => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
  
    const [size, setSize] = useState([0, 0]);
    const useWindowSize = () => {
  
      
      useLayoutEffect(() => {
        const updateSize = () => {
          
          setSize([window.innerWidth, window.innerHeight]);
        };
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
      }, []);
      return size;
    };
  
    const ShowWindowDimensions = props => {
  useWindowSize();
    };
    
    ShowWindowDimensions();
  
    useEffect(() => {
  
        
      if (!vantaEffect) {
        setVantaEffect(FOG({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: size[0] > 450 ? 400 :300,
          minWidth: 200.00,
          highlightColor: 0x252424,
          midtoneColor: 0x6e6e6e,
          lowlightColor: 0xf2f2f2,
          baseColor: 0xdcdcdc,
          blurFactor: 0.51,
          speed: 1.50,
          zoom: 2.50
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    })
    return <div ref={myRef}>
      Foreground content goes here
    </div>
}

export default Vanta