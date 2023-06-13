import React from 'react';
import './html.css'

const Html = () => {
    return (
        <section className='home'>
            <div className='secContainer container'>
                <div className="homeText">
                    <h1 className="title">
                        Plan Your Trip With Travel Dot
                    </h1>
                    <p className="subTitle">
                        Travel to your favourite city with respectful of 
                        the environment!
                    </p>

                    <button className="btn">
                        <a href='#'>Explore Now</a>
                    </button>
                </div>

                <div className="homeCard grid">
                    <div className="locationDiv">
                        <label htmlFor='distance'>Location</label>
                        <input type='text' placeholder='Dream Destination' />
                    </div>
                    <div className="distDiv">
                        <label htmlFor='distance'>11/Meters</label>
                        <input type='text' placeholder='11/Meters' />
                    </div>
                    <div className="priceDiv">
                        <label htmlFor='price'>Location</label>
                        <input type='text' placeholder='$140-$500' />
                    </div>
                    <button className="btn">
                        Search
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Html;