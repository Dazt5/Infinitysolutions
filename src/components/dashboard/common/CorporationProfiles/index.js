import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiAxios, config } from '../../../../config/api';
import FaqRow from '../../Admin/FAQ/FaqRow';
import './style.css';


export const CorporationProfiles = ({ props }) => {

    const { idCorporation } = props.match.params;

    const [corporation, saveCorporation] = useState({});
    const [contactInfo, saveContactInfo] = useState([]);
    const [faq, saveFaq] = useState([]);
 
    useEffect(() => {

        const getCorporationData = async () => {

            const CorporationInfo = await apiAxios(`/corporation/${idCorporation}`);
            const Contactcorporation = await apiAxios(`/corporation/${idCorporation}/contact`);

            saveCorporation(CorporationInfo.data.corporation);
            saveContactInfo(Contactcorporation.data.contactCorporation);

        }

        getCorporationData();

        const Faqs = async () => {
            try {

                const { data } = await apiAxios.get(`/corporation/${idCorporation}/FAQ`);
                
                saveFaq(data.faq);

            } catch (error) {
                console.log(error.request);
            }
        }
        Faqs();
    }, []);
    return (
        <main>
            <div className="container">
                <div className="main-body">
                    <nav aria-label="breadcrumb" className="main-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                        </ol>
                    </nav>

                    <div className="row gutters-sm">
                        <div className="col-md-5 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src={corporation.image ? `${config.RESOURCES_API_URL}/${corporation.image}` : `https://conceptodefinicion.de/wp-content/uploads/2019/08/Empresa-.jpg`} alt="Corporation Profile" className="rounded-circle" width="150" />
                                        <div className="mt-3">
                                            <h4>{corporation.name}</h4>
                                            <p className="text-secondary mb-1">{corporation.description}</p>
                                            <Link to={`/ticket/new/${corporation._id}`}><button className="btn btn-primary">Crear Ticket</button></Link>
                                            <Link to={`/ticket/`}><button className="btn btn-outline-primary">Mis Tickets</button></Link>
                                            <Link to={`/admin/faq/new/${corporation._id}`}><button className="btn btn-outline-primary">Agregar FAQ</button></Link>
                      
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="card mt-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Razón social:</h6>
                                        <span className="text-secondary">{corporation.name}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">RIF</h6>
                                        <span className="text-secondary">{corporation.rif}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Tipo de corporación</h6>
                                        <span className="text-secondary">{corporation.type}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <br/>
                        </div>
                        
                        <div className="col-md-12">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h2 className="text-center">Preguntas frecuentes</h2>
                                    <div className="questions">
                                        <div className="row">
                                        <div className="col-sm-12">
                                        <tbody>
                                    {faq.map(faq => (
                                        <FaqRow
                                            key={faq._id}
                                            faq={faq} />
                                    ))}
                                </tbody>
                                            </div>
                                           
                                        </div>

                                       
                                    </div>

                                   
                                </div>
                            </div>
                        </div>

                        { /* COMPONENTE DE LAS DISTINTAS SUCURSALES DE LA EMPRESA
                        <h3 className="text-center">Sucursales</h3>
                        <div className="col-md-12 mb-5">
                            <div className="card mt-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Razón social:</h6>
                                        <span className="text-secondary">{corporation.name}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">RIF</h6>
                                        <span className="text-secondary">{corporation.rif}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Tipo de corporación</h6>
                                        <span className="text-secondary">{corporation.type}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        */}
                    </div>
                </div>
            </div>
        </main>

    )
}