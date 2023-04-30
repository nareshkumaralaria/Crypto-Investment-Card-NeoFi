import React, { useEffect, useState } from 'react';
import '../assets/styles/Card.css';
import DropdownImg from "../assets/images/dropdown.svg";
import Popup from './Popup';
import { CoinData } from '../data/CoinsData.js'

const Card = () => {

    // State to show/hide coin selection popup
    const [showPopup, setShowPopup] = useState(false);

    // State to keep track of currently selected coin
    const [currentSelectedCoin, setCurrentSelectedCoin] = useState(CoinData[0]);

    // State to keep track of current price of selected coin
    const [currentPrice, setCurrentPrice] = useState(0);

    // State to keep track of user input amount
    const [amount, setAmount] = useState(0.00);

    // Effect to update current price based on websocket data for selected coin
    useEffect(() => {
        const socket = new WebSocket(`wss://stream.binance.com:9443/ws/${currentSelectedCoin.symbol.toLowerCase()}usdt@ticker`);
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setCurrentPrice(data.c * 80);
        };

        return () => {
            socket.close();
        };
    }, [currentSelectedCoin.symbol]);

    // Card component rendering
    return (
        <>
            <div className='card'>
                <div className="main-card">
                    <div className="rounded-card">
                        <div className="card-head">
                            <div className="round-head">
                                <span>
                                    <img src={currentSelectedCoin.imgURL.imgURL} alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="card-items">
                            <div className="current-price">
                                <p className='label'>Current value</p>
                                <p className='price'>₹ {parseFloat(currentPrice).toFixed(2)}</p>
                            </div>
                            <div className="select-coin" onClick={() => setShowPopup(true)}>
                                <div className="coin">
                                    <img src={currentSelectedCoin.imgURL.imgURL} alt="" />
                                    <p>{currentSelectedCoin.name}</p>
                                </div>
                                <img src={DropdownImg} alt="" />
                            </div>
                            <div className="input-amount">
                                <label htmlFor="userAmount" className='label'>Amount you want to invest</label>
                                <div className="input-div">
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            setAmount(e.target.value)
                                        }}
                                        value={amount}
                                        name='userAmount'
                                        placeholder='0.00'
                                    />
                                    <div className="inr">INR</div>
                                </div>
                            </div>
                            <div className="input-amount">
                                <label htmlFor="userAmount" className='label'>Estimate Number of ETH You will Get</label>
                                <div className="input-div">
                                    <input
                                        type="number"
                                        disabled={true}
                                        style={{ width: "100%", borderRight: "1px solid rgba(110, 86, 248, 0.25)", borderRadius: "5px" }}
                                        name='userAmount'
                                        placeholder='0.00'
                                        value={Number(amount) / Number(currentPrice)}
                                    />
                                </div>
                            </div>
                            <div className="buy-button">
                                <button>Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                showPopup ? <Popup setShowPopup={setShowPopup} currentSelectedCoin={currentSelectedCoin} setCurrentSelectedCoin={setCurrentSelectedCoin} /> : null
            }

        </>
    )
}

export default Card