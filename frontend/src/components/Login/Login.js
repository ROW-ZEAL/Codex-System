import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './Loginvalidation';
import axios from 'axios';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.email === '' && errors.password === '') {
            axios
                .post('http://localhost:3000/login', values)
                .then((res) => {
                    if (res.data === 'Success') {
                        navigate('/home');
                    } else {
                        alert('No Record Exist');
                    }
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <div>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-center auth">
                        <div className="row flex-grow">
                            <div className="col-lg-4 mx-auto">
                                <div className="auth-form-light text-left p-5">
                                    <div className="brand-logo">
                                        <img src="../assets/images/faces/face28.png" />
                                    </div>
                                    <h4>Hello! let's get started</h4>
                                    <h6 className="font-weight-light">Sign in to continue.</h6>
                                    <form className="pt-3" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control form-control-lg"
                                                id="exampleInputEmail1"
                                                placeholder="Email"
                                                name="email"
                                                value={values.email}
                                                onChange={handleInput}
                                            />
                                            {errors.email && <span className="text-danger">{errors.email}</span>}
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control form-control-lg"
                                                id="exampleInputPassword1"
                                                placeholder="Password"
                                                name="password"
                                                value={values.password}
                                                onChange={handleInput}
                                            />
                                            {errors.password && <span className="text-danger">{errors.password}</span>}
                                        </div>
                                        <div className="mt-3">
                                            <button
                                                type="submit"
                                                className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn"
                                            >
                                                SIGN IN
                                            </button>
                                        </div>
                                        <div className="my-2 d-flex justify-content-between align-items-center">
                                        </div>
                                        <div className="text-center mt-4 font-weight-light">
                                            Don't have an account? <Link to="/signup" className="text-primary">Create</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;
