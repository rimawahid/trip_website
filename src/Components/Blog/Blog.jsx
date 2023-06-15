import React, {useEffect} from 'react';
import './blog.css'
import {BsArrowRightShort} from 'react-icons/bs'

import Aos from 'aos';
import'aos/dist/aos.css'

import img1 from '../../Assets/1.jpg'
import img2 from '../../Assets/2.jpg'
import img3 from '../../Assets/3.jpg'
import img4 from '../../Assets/4.jpg'

const Data= [
    {
        id:1,
        postImage: img1,
        title: "Beautiful Morocco, let jus travel!",
        desc: 'The Kingdom of Morocco Ocean and Mediterranean Sea.'
    },
    {
        id:2,
        postImage: img2,
        title: "Beautiful Morocco, let jus travel!",
        desc: 'The Kingdom of Morocco Ocean and Mediterranean Sea.'
    },
    {
        id:3,
        postImage: img3,
        title: "Beautiful Morocco, let jus travel!",
        desc: 'The Kingdom of Morocco Ocean and Mediterranean Sea.'
    },
    {
        id:4,
        postImage: img4,
        title: "Beautiful Morocco, let jus travel!",
        desc: 'The Kingdom of Morocco Ocean and Mediterranean Sea.'
    },
]

const Blog = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return (
        <section className='blog container section'>
            <div className="secContainer">
                <div className="secIntro">
                    <h2 data-aos="fade-up" data-aos-duration="2000" className='secTitle'>
                        Our Best Blog?
                    </h2>
                    <p data-aos="fade-up" data-aos-duration="2500">
                        An insight to the incredible experience in th world,
                    </p>
                </div>
                <div className="mainContainer grid">
                    {
                        Data.map((data)=>{
                            return(
                                <div key={data.id} data-aos="fade-up" data-aos-duration="2000" className="singlePost grid">
                                    <div className="imgDiv">
                                        <img src={data.postImage} alt="Image Name" />
                                    </div>
                                    <div className="postDetails">
                                        <h3 data-aos="fade-up" data-aos-duration="3000">
                                            {data.title}
                                        </h3>
                                        <p data-aos="fade-up" data-aos-duration="4000">
                                            {data.desc}
                                        </p>
                                    </div>

                                    <a href="#" className='flex' data-aos="fade-up" data-aos-duration="4500">
                                        Read More
                                        <BsArrowRightShort className='icon'/>
                                    </a>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Blog;