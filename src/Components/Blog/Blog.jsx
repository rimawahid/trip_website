import React from 'react';
import './blog.css'
import {BsArrowRightShort} from 'react-icons/bs'

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
    return (
        <section className='blog container section'>
            <div className="secContainer">
                <div className="secIntro">
                    <h2 className='secTitle'>
                        Our Best Blog?
                    </h2>
                    <p>
                        An insight to the incredible experience in th world,
                    </p>
                </div>
                <div className="mainContainer grid">
                    {
                        Data.map((data)=>{
                            return(
                                <div key={data.id} className="singlePost grid">
                                    <div className="imgDiv">
                                        <img src={data.postImage} alt="Image Name" />
                                    </div>
                                    <div className="postDetails">
                                        <h3>
                                            {data.title}
                                        </h3>
                                        <p>
                                            {data.desc}
                                        </p>
                                    </div>

                                    <a href="#" className='flex'>
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