<<<<<<< HEAD
import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{max: 25}} style={{ height: 150, width: 150}}>
                <div className='Tilt-inner pa3'>
                    <img style={{paddingTop: '20px'}} alt='logo' src={brain}/>
                </div>
            </Tilt>
        </div>
    )
}

=======
import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{max: 25}} style={{ height: 150, width: 150}}>
                <div className='Tilt-inner pa3'>
                    <img style={{paddingTop: '20px'}} alt='logo' src={brain}/>
                </div>
            </Tilt>
        </div>
    )
}

>>>>>>> 8379e86a2883ca805001a2ebca1866d5242622f8
export default Logo;