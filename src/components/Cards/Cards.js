import React, { useContext } from 'react';
import { ApiDataContext } from '../../ApiDataContext.js';
import CardsBox from './CardsBox.js';
import '../../App.css';
import './Cards.css';
import spinner from '../../res/spinner.gif';

const Cards = () => {
    const { cards, cardPage, incrementPage, decrementPage } = useContext(ApiDataContext);
    
    return (
        <div className='content column'>
            <div className='cards__upper row'>
                {
                    cards ? 
                    cards.map(curr => 
                        <CardsBox
                            key={Math.random() * 100000} 
                            img={curr.images.small}
                            artist={curr.artist}
                            level={curr.level}
                            rarity={curr.rarity}
                            types={curr.types}
                            weaknesses={curr.weaknesses}
                        />
                    ) :
                    <img src={spinner} alt='spinner' className='spinner'/>
                }
            </div>

            <div className='cards__lower column'>
                <div className='cards__lower--row row'>
                    <button onClick={decrementPage} className='button-small'>Prev</button>

                    <h2 className='cards__box--h2'>{`Page ${cardPage}...`}</h2>

                    <button onClick={incrementPage} className='button-small'>Next</button>
                </div> 
            </div>
        </div>
    )
}

export default Cards;