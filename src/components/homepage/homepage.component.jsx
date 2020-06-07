import React from 'react';
import '../homepage/homepage.style.scss';

const HomePage = () =>(
    <div className='homepage'>
        <div className='directory-menu'>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>HATS</h1>
                    <span className='subtitle'>Shop now</span>
                </div>
            </div>

            <div className='menu-item'>
            <div className='content'>
                <h1 className='title'>JACKETS</h1>
                <span className='subtitle'>Shop now</span>
            </div>
            </div>

            <div className='menu-item'>
            <div className='content'>
                <h1 className='title'>Sneakers</h1>
                <span className='subtitle'>Shop now</span>
            </div>
        </div>

        <div className='menu-item'>
        <div className='content'>
            <h1 className='title'>MAN</h1>
            <span className='subtitle'>Shop now</span>
        </div>
        </div>

        <div className='menu-item'>
        <div className='content'>
            <h1 className='title'>WOMAN</h1>
            <span className='subtitle'>Shop now</span>
        </div>
    </div>

    

    </div>
        </div>
       

    
);

export default HomePage;