import React, { useContext } from 'react';
import { ApiDataContext } from '../../ApiDataContext.js';
import '../../App.css';
import './Types.css';
import spinner from '../../res/spinner.gif';

const Types = () => {
    const { types } = useContext(ApiDataContext);

    return (
        <div className='types content row'>
            {
                types ?
                types.map(curr => <h1 key={Math.random() * 100000} className='types__h1'>{curr}</h1>) :
                <img src={spinner} alt='spinner' className='spinner'/>
            }
        </div>
    )
}

export default Types;