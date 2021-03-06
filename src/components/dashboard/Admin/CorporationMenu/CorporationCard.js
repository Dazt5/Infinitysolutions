import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../../../config/api';

export const CorporationCard = ({ corp }) => {

    return (

        <Link to={`/admin/document/${corp._id}`}>
            <div className="card-corporation">
                <img className="img-corp" src={`${config.RESOURCES_API_URL}/${corp.image}`} alt={"icon" + corp.name} width="100%" height="100px" />
                <div className="container">
                    <h4><b>{corp.name}</b></h4>
                    {corp.type && <p>{corp.type}</p>}
                </div>
            </div>
        </Link>
    )
}