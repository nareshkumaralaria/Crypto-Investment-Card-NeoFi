import React, { useState } from 'react';
import '../assets/styles/Popup.css';
import SearchIcon from '../assets/images/search.svg';
import CheckIcon from '../assets/images/check.svg';
import { CoinData } from '../data/CoinsData.js';

const Popup = ({ setShowPopup, currentSelectedCoin, setCurrentSelectedCoin }) => {

    // State to keep track of search input value
    const [searchValue, setSearchValue] = useState('');

    // Function to handle selecting a coin from the popup
    const handleSelectCoin = (data) => {
        setCurrentSelectedCoin(data);
        setShowPopup(false);
    }

    // Function to filter coins based on search input
    const getSearchedCoin = (searchValue, CoinData) => {
        if (!searchValue) {
            return CoinData;
        }
        return CoinData.filter((coin) =>
            coin.name.toLowerCase().includes(searchValue)
        );
    };

    // Filtered list of coins based on search input
    const Coins = getSearchedCoin(searchValue, CoinData);

    // Popup component rendering
    return (
        <div className='popup'>
            <div className="popup-main">
                <div className="close-btn">
                    <button onClick={() => setShowPopup(false)}>X</button>
                </div>

                <div className="search-box">
                    <img src={SearchIcon} alt="" />
                    <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='search' />
                </div>

                <div className="coins-list">
                    <ul>
                        {
                            Coins.map((data) => {
                                return <li key={data.symbol} onClick={() => handleSelectCoin(data)} className={currentSelectedCoin.symbol == data.symbol ? 'selected' : ''}>
                                    <img src={data.imgURL.imgURL} alt="" />
                                    <p>{data.name}</p>
                                    <img src={CheckIcon} className={currentSelectedCoin.symbol == data.symbol ? "check" : "hide"} alt="" />
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Popup