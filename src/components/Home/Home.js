import React from 'react';
import './Home.css';
import { Image } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Image className="himg img-fluid" src="doc.jpg" />
            <div>
                <h1 className="mt-5 mb-5 text-center">News About Covid</h1>
                <div>
                    <div class=" mt-5 container overflow-hidden">
                        <div class="row gx-5">
                            <div class="col-12 col-md-4">
                                <div class="p-3">

                                    <div class="card ccard" >
                                        <Image src="c1.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text">SINGAPORE: Singapore reported 2,553 new COVID-19 cases as of noon on Monday (Oct 18) with six more people dying from </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="p-3"><div class="card ccard" >
                                    <Image src="c2.jpg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">Today, CDC Director Rochelle P. Walensky, M.D., M.P.H., endorsed the CDC Advisory Committee on Immunization Practices</p>
                                    </div>
                                </div></div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="p-3"><div class="card ccard" >
                                    <Image src="c3.jpg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">Coronavirus Variants and Vaccinations, Coronavirus Active Cases in India Today News, October 7 Highlights</p>
                                    </div>
                                </div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;