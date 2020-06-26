import React from 'react';

const Header = () => {
    return (
        <div>
            <header>
            <h1>BEHAVIOR TRACKER</h1>
            <img className='profile-pic' src='https://image.flaticon.com/icons/svg/3135/3135715.svg'  alt='profile pic'/> {/*https://image.flaticon.com/icons/svg/3135/3135823.svg*/}
            <h5>Name of Person</h5>
            </header>
        </div>
    )
}

export default Header;