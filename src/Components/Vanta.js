import React, { useState, useEffect, useRef,useLayoutEffect } from 'react'
import dots from 'vanta/dist/vanta.dots.min'

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
        setVantaEffect(dots({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: size[0] > 450 ? 400 :300,
          minWidth: 200.00,
          highlightColor: 0x252424,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x1e0ac3,
          color2: 0xf7b20f
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    })
    return <div ref={myRef}>
        <div>
            <p className='color-F8EB8D'>Hi ! WelCome to My Portfolio</p>
        </div>
    </div>
}

export default Vanta