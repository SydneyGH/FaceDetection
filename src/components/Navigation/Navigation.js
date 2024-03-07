<<<<<<< HEAD
import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {

        if (isSignedIn) {
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick = {() => onRouteChange('signout')}
                className='f3 link dim black underline pa3 pointer'>Sign Out</p>
            </nav>
            );
        } else {
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick = {() => onRouteChange('signin')}
                    className='f3 link dim black underline pa3 pointer'>Sign in</p>
                    <p onClick = {() => onRouteChange('register')}
                    className='f3 link dim black underline pa3 pointer'>Register</p>
                </nav>
            );
        }

}

=======
import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {

        if (isSignedIn) {
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick = {() => onRouteChange('signout')}
                className='f3 link dim black underline pa3 pointer'>Sign Out</p>
            </nav>
            );
        } else {
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick = {() => onRouteChange('signin')}
                    className='f3 link dim black underline pa3 pointer'>Sign in</p>
                    <p onClick = {() => onRouteChange('register')}
                    className='f3 link dim black underline pa3 pointer'>Register</p>
                </nav>
            );
        }

}

>>>>>>> 8379e86a2883ca805001a2ebca1866d5242622f8
export default Navigation;