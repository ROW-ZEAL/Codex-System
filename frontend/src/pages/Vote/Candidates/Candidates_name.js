import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import Side from '../../../components/Side';
import { Form } from "antd"

const CreateCandidateForm = () => {

    let [name, setname] = useState([]);
    let [age, setage] = useState([]);
    let [responseStatus, setResponseStatus] = useState(["fail"]);
    let [outputStatus, setOutputStatus] = useState([""]);
    let [grade, setgrade] = useState([]);


    const handleCandidatename = (event) => {
        const candidate_Name = event.target.value;
        setname(candidate_Name);
    };
    const handleGrade = (event) => {
        const candidate_Grade = event.target.value;
        setage(candidate_Grade);
    };
    const handleAge = (event) => {
        const candidate_age = event.target.value;
        setgrade(candidate_age);
    };

    let [form] = Form.useForm()
    const onFinish = (values) => {
        form.restFields();
    }
    const submitUser = async (e) => {
        alert('You have listed to  to: ' + name);
        e.preventDefault();
        fetch('/api/form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ candidate_Name: name, candidate_age: age, candidate_grade: grade })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setResponseStatus(data["status_1"]);
                setOutputStatus(data["status"]);
                console.log(setOutputStatus);
            });
    };




    return (
        <div>
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
                                            <h2 className="mt-4 mb-4 fw-bold">
                                                New Candidates
                                            </h2>

                                            <form onSubmit={submitUser} className="row g-3" form={form}>
                                                <br />

                                                <div>
                                                    <div className="col-md-3">
                                                        <label className="form-label">Candidates Name</label>
                                                        <input
                                                            type="text"
                                                            name="candidate_Name"
                                                            className="form-control p-2"
                                                            onChange={(e) => handleCandidatename(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <br />

                                                <div>
                                                    <div className="col-md-3">
                                                        <label className="form-label">Age</label>
                                                        <input
                                                            type="text"
                                                            name="candidate_age"
                                                            className="form-control p-2"
                                                            onChange={(e) => handleAge(e)}
                                                        />
                                                    </div>
                                                </div>
                                                <br />
                                                <div>
                                                    <div className="col-md-3">
                                                        <label className="form-label">Grade</label>
                                                        <input
                                                            type="text"
                                                            name="user_age"
                                                            className="form-control p-2"
                                                            onChange={(e) => handleGrade(e)}
                                                        >
                                                        </input>
                                                    </div>
                                                </div>
                                                <br />

                                                <div>
                                                    <div className="col-md-3">
                                                        <button type="submit" className="btn btn-primary mt-4" >
                                                            Submit
                                                        </button>
                                                        <button type="reset" className="btn btn-primary mt-4" >
                                                            reset
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>


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

export default CreateCandidateForm;