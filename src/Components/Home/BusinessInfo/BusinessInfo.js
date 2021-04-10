import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

const infoDatas = [
    {
        title: "Opening Hours",
        description: "Morning 09.00 AM",
        icon: faClock,
        background: "primary"
    },
    {
        title: "Visit Our Location",
        description: "Uttara, Azampur, Dhaka-1230",
        icon: faMapMarkerAlt,
        background: "dark"
    },
    {
        title: "Contact Us",
        description: "+8802-890152150",
        icon: faPhone,
        background: "primary"
    }
]

const BusinessInfo = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="row w-75">
                {infoDatas.map(info => <InfoCard info={info}></InfoCard>)}
            </div>
        </div>
    );
};

export default BusinessInfo;