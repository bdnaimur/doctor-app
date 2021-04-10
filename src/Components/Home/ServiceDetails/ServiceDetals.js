import React from 'react';

const ServiceDetals = ({service}) => {

    return (
        <div className="col-md-4">
            <div className="text-center">
                <img style={{width:'50px'}} src={service.img} alt="" className="img-fluid mb-3"/>
                <h6>{service.name}</h6>
                <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, magnam?</p>
            </div>
        </div>
    );
};

export default ServiceDetals;