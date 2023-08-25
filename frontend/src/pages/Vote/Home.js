import React from 'react';
import Header from '../../components/Header';
import Side from '../../components/Side';


function Home() {
    return (
        <div className="Home">
            <div className="welcome">
                <Header />
                <div className="container-fluid page-body-wrapper">
                    <Side />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div>
                                <div className='row'>
                                    <div className='col-lg-12 stretch-card'>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <p>In the 21st century, many countries are still relying on outdated voting systems, leading to inefficiencies and potential problems with lost or damaged ballot papers. To address these challenges and bring our democracy into the digital age, it's time to embrace online voting. By digitizing the voting process, we can save costs, increase voter turnout, and enhance security measures. Online voting eliminates the need for physical ballot papers, reducing expenses associated with printing, transportation, and storage.  With robust encryption and authentication protocols, online voting can ensure the integrity and confidentiality of each vote. Let's modernize our democracy and embrace the efficiency and accessibility of online voting.</p>
                                            </div>
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
}

export default Home;
