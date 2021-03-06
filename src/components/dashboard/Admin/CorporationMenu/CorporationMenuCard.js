import React, { useEffect, useState } from 'react';
import { apiAxios } from '../../../../config/api';
import { CorporationCard } from './CorporationCard';

export const CorporationMenuCard = () => {

    const [corporation, saveCorporation] = useState([]);

    const getCorporations = async () => {

        try {

            const { data } = await apiAxios.get('/corporation');

            const corporation = data.corporation;

            saveCorporation(corporation);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCorporations();
        // eslint-disable-next-line
    }, [])


    return (
        <main>
            <div className="card-header sections">
                <h2 className="header-text">Selecciona una compañia</h2>

            </div>
            <div className="cards">
                {corporation.map(corp => {

                    if (corp.active === 1) {
                        return <CorporationCard
                            key={corp._id}
                            corp={corp}
                        />
                    }
                    return null;
                })}
            </div>
        </main>
    )

}