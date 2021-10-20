import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Service.css";

const Service = () => {
    return (
        <div>
            <h1 className="mt-5 text-center">Our Service</h1>
            <div className=" mt-5  container overflow-hidden" >
                <div className="row gy-5">
                    <div className="col-12 col-md-6 ">
                        <div className="p-3 ">
                            <div className="card serCard" >
                                <Image src="s6.jpg" className="card-Image-top ccpic" />
                                <div className="card-body">
                                    <h5 className="card-title">Covid test</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/covidtest">
                                        <a className="btn btn-dark">Read more</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="p-3 ">
                            <div className="card serCard" >
                                <Image src="s5.jpg" className="img-fluid card-Image-top ccpic" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Online Doctor</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/onlinedoctor">
                                        <a href="#" className="btn btn-dark">Read more</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="p-3 ">
                            <div className="card serCard" >
                                <Image src="s4.jpg" className="img-fluid card-Image-top ccpic" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Hospital Booking</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/hospitalbooking">
                                        <a href="#" className="btn btn-dark">Read more</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="p-3 ">
                            <div className="card serCard" >
                                <Image src="s3.jpg" className="img-fluid card-Image-top ccpic" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Online Medicine</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/onlinemedicine">
                                        <a href="#" className="btn btn-dark">Read more</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="p-3 ">
                            <div className="card serCard" >
                                <Image src="s2.jpg" className="img-fluid card-Image-top ccpic" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Doctor Booking</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/doctorbooking">
                                        <a href="#" className="btn btn-dark">Read more</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="p-3 ">
                            <div className="card serCard" >
                                <Image src="s1.jpg" className="img-fluid card-Image-top ccpic" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Ambulance Booking</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/ambulance"><a href="#" className="btn btn-dark">Read more</a></Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;