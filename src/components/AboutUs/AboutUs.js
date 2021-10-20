import React, { useEffect, useState } from 'react';
import PersonInfo from '../PersonInfo/PersonInfo';
import './AboutUs.css'


const AboutUs = () => {
    const [aboutUs, setAboutUs] = useState([]);
    useEffect(() => {
        fetch('./AboutUsInfo.json')
            .then(res => res.json())
            .then(data => setAboutUs(data));
    }, [])

    return (
        <div className="container abUs">
            <h1 className="mt-5 text-center">About Us</h1>
            <div class="row gx-5">
                {
                    aboutUs.map(aboutUs => <PersonInfo
                        key={aboutUs.key}
                        aboutUs={aboutUs}
                    ></PersonInfo>)
                }
            </div>
        </div>
    );
};

export default AboutUs;