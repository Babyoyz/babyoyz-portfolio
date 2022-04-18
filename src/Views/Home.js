import React from 'react'
import Vanta from '../Components/Vanta'
import Introduce from '../Components/Introduce'

const Home = (props) => {
    return(
        <div>
            <div className='main-vanta-top'>
                <Vanta />
            </div>
            <div className='main-content'>
            <div className='container'>
                <Introduce />
            </div>
            </div>
           
        </div>
    )
}

export default Home