import React, { useState, useEffect } from 'react'
import Header from '../../../components/Header'
import Side from '../../../components/Side'
// import "./style.css"

const Winners = () => {

    let [Winners, setWinners] = useState([])


    useEffect(() => {
        getWinners();
        // eslint-disable-next-line
    }, [])




    let getWinners = async () => {

        let response = await fetch('/api/winner')
        let data = await response.json()
        setWinners(data["Winner_data"]);

    }

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
                                        <div className="Winners-list">
                                            <table className='table'>
                                                <tr>
                                                    <th className='brokerth'>Total Votes</th>
                                                    <th className='brokerth'>Candidates NAme </th>
                                                </tr>

                                                {Winners.map((turnovers, single_broker_index) => (
                                                    <tr>
                                                        <td>{turnovers["count"]} </td>
                                                        <td>{turnovers["candidates_name"]} </td>
                                                    </tr>
                                                ))}
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

    )
}

export default Winners