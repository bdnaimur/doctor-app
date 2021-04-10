import React from 'react';
import image1 from '../../../images/img2.png';
import image2 from '../../../images/img1.png';
import image3 from '../../../images/img3.png';
import ServiceDetals from '../ServiceDetails/ServiceDetals';
const serviceData = [
    {
        name: "Flouride Treatment",
        img:image1
    },
    {
        name: "Cavity Filling",
        img:image2
    },
    {
        name: "Teeth Whitening",
        img:image3
    }
]
const Services = () => {
    return (
        <div className="mt-5">
            <div className="text-center mt-5 mb-5">
            <h5 style={{color:"#15d2c9"}}>OUR SERVICES</h5>
            <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75">
                    {serviceData.map(service => <ServiceDetals service={service}></ServiceDetals>)}
                </div>
            </div>
        </div>
    );
};

export default Services;