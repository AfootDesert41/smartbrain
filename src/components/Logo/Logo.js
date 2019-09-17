import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 nt0'>
            <Tilt className="Tilt br2 shadow-1" options={{ max : 55 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner" style={{display:"flex", justifyContent:"center", paddingTop: "25px"}}><img src="https://www.pngkey.com/png/full/35-356241_1mib-812x977-fat-yoshi-thicc-yoshi.png" width="150px" height="150px" alt="phatyoshi"></img></div>
            </Tilt>           
        </div>
    )
}

export default Logo;