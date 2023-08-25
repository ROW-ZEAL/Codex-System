import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Side from "../../components/Side";
import { Form } from "antd";
import axios from "axios";

const VoterList = () => {
    const [candidateList, setCandidateList] = useState([]);
    const [selectedCandidateID, setSelectedCandidateID] = useState("");
    const [status, setStatus] = useState([]);
    const [responseStatus, setResponseStatus] = useState(["fail"]);
    const [outputStatus, setOutputStatus] = useState([""]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCandidatesData();
    }, []);

    const fetchCandidatesData = async () => {
        const response = await fetch("/api/candiate");
        const data = await response.json();
        setCandidateList(data.candidate_name);
    };

    const handleCandidate = (event) => {
        setSelectedCandidateID(event.target.value);
    };

    let [form] = Form.useForm();
    const onFinish = (values) => {
        form.resetFields();
    };

    const submitUser = async (e) => {
        e.preventDefault();
        alert("You have voted for: " + selectedCandidateID);
        fetch("/api/vote", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                candidates_id: selectedCandidateID,
                user_stock_status: status,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setResponseStatus(data.status_1);
                setOutputStatus(data.status);
                console.log(setOutputStatus);
                handleLogout();
            });
    };

    const handleStatus = (event) => {
        const userStudentStatus = event.target.value;
        setStatus(userStudentStatus);
    };

    const handleLogout = () => {
        axios
            .post("http://localhost:3000/logout")
            .then((res) => {
                if (res.data === "Logout successful") {
                    navigate("/");
                    alert("Logout successful");
                } else {
                    alert("Logout failed");
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <Header />
            <div className="container-fluid page-body-wrapper">
                <Side />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="row">
                            <div className="col-lg-12 stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <form onSubmit={submitUser} className="row g-3" form={form}>
                                            <div className="col-md-9">
                                                <div className="row">
                                                    {candidateList.map((candidate) => (
                                                        <div className="col-md-3" key={candidate.id}>
                                                            <div className="candidate-item">
                                                                <img
                                                                    src={process.env.PUBLIC_URL + candidate.photo_url}
                                                                    alt={candidate.name}
                                                                    className="candidate-image"
                                                                />
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        name="candidate"
                                                                        value={candidate.name}
                                                                        onChange={handleCandidate}
                                                                    />
                                                                    {candidate.name}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="col-md-12 d-flex justify-content-center">
                                                <div className="form-group">
                                                    <button type="submit"
                                                        className="btn btn-primary mt-4"
                                                        onChange={(e) => handleStatus(e)}
                                                        value="1">
                                                        Submit
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
    );
};

export default VoterList;
