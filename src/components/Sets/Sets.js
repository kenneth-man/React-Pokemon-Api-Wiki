import React, { useContext } from 'react';
import '../../App.css';
import './Sets.css';
import { ApiDataContext } from '../../ApiDataContext.js';
import spinner from '../../res/spinner.gif';

const Sets = () => {
    const { sets } = useContext(ApiDataContext);

    return (
        <div className='sets row content'>
            {
                sets ?
                sets.map(curr => 
                    <div key={Math.random() * 100000} className='sets__box column'>
                        <img src={curr.images.logo} alt='set logo' className='sets__img'/>

                        <div className='sets__info column transition'>
                            <h1 className='sets__h1'>Set: '{curr.name}'</h1>
                            <h1 className='sets__h1'>Release Date: {curr.releaseDate}</h1>
                            <h1 className='sets__h1'>TCG Code: {curr.ptcgoCode}</h1>
                        </div>
                    </div>
                ) : 
                <img src={spinner} alt='spinner' className='spinner'/>
            }
        </div>
    )
}

export default Sets;