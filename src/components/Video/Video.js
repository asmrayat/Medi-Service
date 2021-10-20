import React from 'react';
import './Video.css'

const Video = () => {
    return (
        <div>
            <h1 className="text-center mt-5 mb-5">Basic first-Aid Video</h1>

            <div class="container overflow-hidden">
                <div class="row gy-5">
                    <div class="col-12 col-md-6">
                        <div class="p-3"><iframe className="video" src="https://www.youtube.com/embed/eMv83t6qT2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="p-3"><iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/ehk0423m2vo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="p-3"><iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/ErxKDbH-iiI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="p-3"><iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/XOTbjDGZ7wg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;