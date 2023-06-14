import React from 'react';
import './popular.css'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'

// Import the images============>
import img1 from '../../Assets/1.jpg'
import img2 from '../../Assets/2.jpg'
import img3 from '../../Assets/3.jpg'
import img4 from '../../Assets/4.jpg'

// so now we are going to use a high order array method to 
// disply all the destination using Map. To do so we need to 
// List all the  destination in one array "Data" and later we 
// shall call each destination by index/id.

const Data = [
    {
        id:1,
        imgSrc:img1,
        destTitle:'Machu Picchu',
        location: 'Peru 1',
        grade:'CULTURAL RELAX 1'
    },
    {
        id:2,
        imgSrc:img2,
        destTitle:'Machu Picchu 2',
        location: 'Peru 2',
        grade:'CULTURAL RELAX 2'
    },
    {
        id:3,
        imgSrc:img3,
        destTitle:'Machu Picchu 3',
        location: 'Peru 3',
        grade:'CULTURAL RELAX 3'
    },
    {
        id:4,
        imgSrc:img4,
        destTitle:'Machu Picchu 4',
        location: 'Peru 4',
        grade:'CULTURAL RELAX 4'
    },
]

const Popular = () => {
    return (
        <section className='popular section container'>
            <div className="secContainer">
                <div className="secHeader flex">
                    <div className="textDiv">
                    <h2 className="secTitle">
                        Popular Destination
                    </h2>
                    <p>
                        From historical cities to natural 
                        specteculars, come see the best of the 
                        world!
                    </p>
                    </div>

                    <div className="iconsDiv  flex">
                        <BsArrowLeftShort className="icon leftIcon"/>
                        <BsArrowRightShort className="icon"/>
                    </div>
                </div>

                <div className="mainContent grid">
                    {Data.map((data)=>{
                        return(
                            <div key={data.id} className="singleDestination">
                                <div className="destImage">
                                    <img src={data.imgSrc} alt='Image title'/>

                                    <div className="overlayInfo">
                                        <h3>{data.destTitle}</h3>
                                        <p>{data.location}</p>
                                        <BsArrowRightShort className="icon"/>
                                    </div>
                                </div>

                                <div className="destFooter">
                                    <div className="number">
                                        0{data.id}
                                    </div>
                                    <div className="destText flex">
                                        <h6>{data.location}</h6>
                                        <span className='flex'>
                                        <span className="dot">
                                            <BsDot className="icon"/>
                                        </span>
                                            Dot
                                        </span>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                    
                </div>
            </div> 
        </section>
    );
};

export default Popular;