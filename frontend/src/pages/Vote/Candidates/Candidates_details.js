import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import Side from '../../../components/Side';

const Candidates_details = () => {
    let [candidatesDetails, setCandidatesDetails] = useState([]);

    useEffect(() => {
        getCandidatesDetails();
        // eslint-disable-next-line
    }, []);

    let getCandidatesDetails = async () => {
        let response = await fetch('/api/candiate');
        let data = await response.json();
        setCandidatesDetails(data["candidate_name"]);
    };

    return (
        <div>
            <Header />
            <div className="container-fluid page-body-wrapper">
                <Side />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className='row'>
                            <div className='col-lg-12 stretch-card'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className="Candidates_details-list">
                                            <table className='table'>
                                                <thead>
                                                    <tr>
                                                        <th className='brokerth'>Candidates Id</th>
                                                        <th className='brokerth'>Candidates Name</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {candidatesDetails.map((candidate, index) => (
                                                        <tr key={index}>
                                                            <td>{candidate["id"]}</td>
                                                            <td>
                                                                <Link to={`/home/candidates/${candidate.name}`}>{candidate.name}</Link>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Candidates_details;
