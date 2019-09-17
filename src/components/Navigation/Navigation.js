import React from 'react';

const Navigation = ( {onRouteChangeLogOut , isSignedIn , onRouteChangeRegister } ) => {
    if (isSignedIn === true) {
        return(
            <nav style={{display: "flex", justifyContent: "flex-end"}}>
                <p className='f3 link dim black underline pa3 pointer' onClick={onRouteChangeLogOut}>Log Out</p>
            </nav>
        );
    } else {
        return (
            <nav style={{display: "flex", justifyContent: "flex-end"}}>
                <p className='f3 link dim black underline pa3 pointer' onClick={onRouteChangeRegister}>Register</p>
                <p className='f3 link dim black underline pa3 pointer' onClick={onRouteChangeLogOut}>Sign In</p>
            </nav>
        );
    }
}

export default Navigation;