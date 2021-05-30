import React, { useState, useEffect, createContext } from 'react';

export const ApiDataContext = createContext();

const ApiDataContextProvider = ({ children }) => {
    //CARDS
    const [cardsInit, setCardsInit] = useState(false);
    const [cards, setCards] = useState([]);
    let [cardPage, setCardPage] = useState(1);

    //SETS
    const [setsInit, setSetsInit] = useState(false);
    const [sets, setSets] = useState([]);

    //TYPES
    const [typesInit, setTypesInit] = useState(false);
    const [types, setTypes] = useState([]);

    //initial function to get 1st page of cards; 250 cards per 'page'; 54 pages in total
    const fetchCards = async () => {
        try {
            if(!cardsInit){
                const response = await fetch(`https://api.pokemontcg.io/v2/cards`);
                const data = await response.json();
                setCards(data.data);
                setCardsInit(true);
            }
        } catch(error){
            console.log(error);
        }
    }

    //fetching cards by page number;changed with 'previous' and 'next' pagination buttons
    const fetchCardsByPage = async (pageNum) => {
        try {   
            const response = await fetch(`https://api.pokemontcg.io/v2/cards?page=${pageNum}`);
            const data = await response.json();
            setCards(data.data);
        } catch(error){
            console.log(error)
        }
    }

    const fetchSets = async () => {
        try {
            if(!setsInit){
                const response = await fetch(`https://api.pokemontcg.io/v2/sets`);
                const data = await response.json();
                setSets(data.data);
                setSetsInit(true);
            }
        } catch(error){
            console.log(error);
        }
    }

    const fetchTypes = async () => {
        try {
            if(!typesInit){
                const response = await fetch(`https://api.pokemontcg.io/v2/types`);
                const data = await response.json();
                setTypes(data.data);
                setTypesInit(true);
            }
        } catch(error){
            console.log(error);
        }
    }

    const incrementPage = () => {
        setCardPage(cardPage+=1);

        //after page 54 is page 1
        if(cardPage >= 55){
            setCardPage(cardPage = 1);
        }

        fetchCardsByPage(cardPage);
    }

    const decrementPage = () => {
        //prevent negative page numbers; if would be negative, go to last page (54)
        setCardPage(cardPage-=1);

        if(cardPage <= 0){
            setCardPage(cardPage = 54);
        }
        
        fetchCardsByPage(cardPage);
    }

    useEffect(() => {
        fetchCards();
    })

    useEffect(() => {
        fetchSets();
    })

    useEffect(() => {
        fetchTypes();
    })

    return (
        <ApiDataContext.Provider value={{ cards, cardPage, incrementPage, decrementPage, sets, types }}>
            {children}
        </ApiDataContext.Provider>
    )
}

export default ApiDataContextProvider;