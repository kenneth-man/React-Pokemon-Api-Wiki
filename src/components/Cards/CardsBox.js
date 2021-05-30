import React, { useState } from 'react';

//had to create seperate reusable components so they could have individual state for each specific card box (e.g. info being shown or not)
const CardsBox = ({ img, artist, level, rarity, types, weaknesses }) => {
    const [cardInfoShown, setCardInfoShown] = useState(false);

    const toggleCardInfo = () => {
        setCardInfoShown(!cardInfoShown);
    }

    return (
        <div className='cards__box' onClick={toggleCardInfo}>
            <img src={img} alt='pokemon-img' className={cardInfoShown ? 'cards__img--dark transition' : 'cards__img transition'}/>

            <div className={cardInfoShown ? 'cards__info column transition' : 'hidden'}>
                <h1 className='cards__box--h1'>ARTIST: {artist ? artist : 'N/A'}</h1>
                <h1 className='cards__box--h1'>LEVEL: {level ? level : 'N/A'}</h1>
                <h1 className='cards__box--h1'>RARITY: {rarity ? rarity : 'N/A'}</h1>
                <h1 className='cards__box--h1'>TYPE: { types ? types[0] : 'N/A'}</h1>
                <h1 className='cards__box--h1'>WEAKNESS: { weaknesses ? weaknesses[0].type : 'N/A'}</h1>
            </div>
        </div>
    )
}

export default CardsBox;