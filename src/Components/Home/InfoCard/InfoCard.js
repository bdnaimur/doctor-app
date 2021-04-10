import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css'
const InfoCard = ({info}) => {
    return (
        <div className={`col-md-4 text-white info-card`}>
            <div className={`d-flex justify-content-center align-items-center info-${info.background} info-container`}>
                <div className="info-icon">
                <FontAwesomeIcon icon={info.icon} />
                </div>
                <div className="ml-5">
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>                
                </div>
            </div>
        </div>
    );
};

export default InfoCard;