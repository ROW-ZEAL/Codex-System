import React from 'react';
import Header from '../../../components/Header';
import Side from '../../../components/Side';

const CandidateDetails = ({ }) => {


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
                                        <div className="Candidates_details-list"></div>
                                        <p>I believe art is feeling. It is the manifestation of who we are as feeling human beings in reaction to the feeling or unfeeling acts of other humans, the natural world, and the unnatural world. We create art because we need to react; react in anger, react in fear, react in love, adoration, peace, joy, healing, puzzlement, and complexity. Thus the core of art is social change. Social change is as simple as effecting one small aspect of our human society. I believe social change need not be radical, political transformation or protests against a repressive establishment. It can be as simple as invoking a one-word question or phrase in a person's mind: Why? When? What? How? Really? Interesting. Curious. Difficult. I believe inspiring these small thoughts should be the goal of social change as well as the goal of art.

                                            Art, as feeling, exists in the purgatorial balance between control and lack thereof. I believe the feeling of art should only be controlled in order to create a visual, physical, or aural representation of itself. Only then, when our society can relate to art as a form and forum for emotion, do we truly achieve artistic success and social change. I call to every member of our society to contribute to artistic creation because we are a community of feeling beings.  Thus, because we feel, we are artists. Even if our contribution is only one small drawing, poem, or pattern, we have the ability to spark a question or phrase in someone else's mind. With art, we create a thinking world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CandidateDetails;
