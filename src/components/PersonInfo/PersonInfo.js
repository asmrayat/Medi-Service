import React from 'react';
import { Card } from 'react-bootstrap';

const PersonInfo = (props) => {
    const { name, img, place } = props.aboutUs
    return (
        <div class="col-12 col-md-6 mt-3 ">
            <div className="card mb-3 customCard border border-primary" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <Card.Img variant="cusImg img-fluid rounded-start" src={img} />

                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dignissimos soluta voluptas aliquid maxime repellendus tenetur quaerat fugiat ducimus quis quidem sit excepturi saepe vitae. Necessitatibus dolore quasi animi neque.</p>
                            <p className="card-text"><small className="text-muted">{place}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonInfo;