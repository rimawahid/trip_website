import React from 'react';
import './about.css'
import img1 from '../../Assets/9.png'
import img2 from '../../Assets/climbing.png'
import img3 from '../../Assets/customer.png'
//import video=====================>
import video from '../../Assets/video/trip.mp4'


const About = () => {
    return (
        <section className='about section'>
            <div className="secContainer">
                <h3 className="title">
                    Why Hikings?
                </h3>
                <div className="mainContent container grid">
                   
                    <div className="singleItem">
                        <img src={img1} alt="Image Name" />
                        <h3>100+ Mountains</h3>

                        <p>
                            Research shows that a chance to brack away from the normal rhythms Of
                            daily life reduces stress and improves health and well-being.
                        </p>
                    </div>

                    <div className="singleItem">
                        <img src={img2} alt="Image Name" />
                        <h3>1000+ Hikings</h3>

                        <p>
                            Research shows that a chance to brack away from the normal rhythms Of
                            daily life reduces stress and improves health and well-being.
                        </p>
                    </div>
                    <div className="singleItem">
                        <img src={img3} alt="Image Name" />
                        <h3>2000+ Customers</h3>

                        <p>
                            Research shows that a chance to brack away from the normal rhythms Of
                            daily life reduces stress and improves health and well-being.
                        </p>
                    </div>
                </div>

                <div className="videoCard contaner">
                    <div className="cardContent grid">
                        <div className="cardText">
                            <h2>
                                Wonderful House experience nin there!
                            </h2>
                            <p>
                                The Adventure subraking is based on an 
                                qually weighted average of scores from 
                                five country.
                            </p>
                        </div>

                        <div className="cardVideo">
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