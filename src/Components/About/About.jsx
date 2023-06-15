import React, {useEffect} from 'react';
import './about.css'
import Aos from 'aos';
import'aos/dist/aos.css'

import img1 from '../../Assets/9.png'
import img2 from '../../Assets/climbing.png'
import img3 from '../../Assets/customer.png'
//import video=====================>
import video from '../../Assets/video/trip.mp4'


const About = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return (
        <section className='about section'>
            <div className="secContainer">
                <h3 className="title">
                    Why Hikings?
                </h3>
                <div className="mainContent container grid">
                   
                    <div data-aos="fade-up" data-aos-duration="2000"  className="singleItem">
                        <img src={img1} alt="Image Name" />
                        <h3>100+ Mountains</h3>

                        <p>
                            Research shows that a chance to brack away from the normal rhythms Of
                            daily life reduces stress and improves health and well-being.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="2500"  className="singleItem">
                        <img src={img2} alt="Image Name" />
                        <h3>1000+ Hikings</h3>

                        <p>
                            Research shows that a chance to brack away from the normal rhythms Of
                            daily life reduces stress and improves health and well-being.
                        </p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000"  className="singleItem">
                        <img src={img3} alt="Image Name" />
                        <h3>2000+ Customers</h3>

                        <p>
                            Research shows that a chance to brack away from the normal rhythms Of
                            daily life reduces stress and improves health and well-being.
                        </p>
                    </div>

                </div>

                <div className="container videoCard">
                    <div className="cardContent grid">
                        <div data-aos="fade-right" data-aos-duration="2000"  className="cardText">
                            <h2>
                                Wonderful House experience nin there!
                            </h2>
                            <p>
                                The Adventure subraking is based on an 
                                qually weighted average of scores from 
                                five country.
                            </p>
                        </div>

                        <div data-aos="fade-left" data-aos-duration="2500"  className="cardVideo">
                            <video src={video} autoPlay loop 
                            muted type="video/mp4"></video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;