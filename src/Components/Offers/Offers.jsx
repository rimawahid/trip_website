import React, {useEffect} from 'react';
import './offers.css'
import {MdKingBed} from 'react-icons/md'
import {MdBathtub} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {MdAirportShuttle} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import {BsArrowRightShort} from 'react-icons/bs'

import Aos from 'aos';
import'aos/dist/aos.css'

//let us import images ==============>
import img5 from '../../Assets/5.jpg'
import img6 from '../../Assets/6.jpg'
import img7 from '../../Assets/7.jpg'


//List
const Data=[
    {
        id:1,
        imgSrc:img5,
        destTitle:'Machu Picchu',
        location: 'Peru',
        price:'$7,452'
    },
    {
        id:2,
        imgSrc:img6,
        destTitle:'Machu Picchu 2',
        location: 'Peru 2',
        price:'$7,452'
    },
    {
        id:3,
        imgSrc:img7, 
        destTitle:'Machu Picchu 3',
        location: 'Peru 3',
        price:'$7,452'
    },
    {
        id:4,
        imgSrc:img5,
        destTitle:'Machu Picchu 4',
        location: 'Peru 4',
        price:'$7,452'
    },
]

const Offers = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return (
        <section className='offer container section'>
            <div className="secContainer">
                <div data-aos="fade-up" data-aos-duration="2000"  className="secIntro">
                    <h2 className="secTitle">
                        Special Offers
                    </h2>
                    <p>
                        From historical cities to natural specteclars, come see the best of 
                        the world!
                    </p>
                </div>

                <div className="mainContent grid">
                    {
                        Data.map((data)=>{
                            return(
                                <div key={data.id} data-aos="fade-up" data-aos-duration="3000"  className="singleOffer">
                                    <div className="destImage">
                                        <img src={data.imgSrc} alt="Image Name"/>

                                        <span className="discount">
                                            30% off
                                        </span>
                                    </div>

                                    <div className="offerBody">
                                        <div className="price flex">
                                            <h4>{data.price}</h4>
                                            <span className="status">
                                                For Rent
                                            </span>
                                        </div>
                        

                                        <div className="amenities flex">
                                            <div className="singleAmenity flex">
                                                <MdKingBed className="icon"/>
                                                <small>2 Beds</small>
                                            </div>

                                            <div className="singleAmenity flex">
                                                <MdBathtub className="icon"/>
                                                <small>1 Bath</small>
                                            </div>

                                            <div className="singleAmenity flex">
                                                <FaWifi className="icon"/>
                                                <small>Wi-Fi</small>
                                            </div>

                                            <div className="singleAmenity flex">
                                                <MdAirportShuttle className="icon"/>
                                                <small>Shuttle</small>
                                            </div>
                                        </div>

                                        <div className="location flex">
                                            <MdLocationOn className="icon"/>
                                            <small>450 Vine #310, {data.location}</small>
                                        </div>

                                        <button className="btn flex">
                                            View Details
                                            <BsArrowRightShort className='icon'/>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Offers;