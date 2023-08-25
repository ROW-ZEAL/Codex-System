import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './Signupvalidations';
import axios from 'axios';

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        agree: false
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
        const { name, value, type, checked } = event.target;
        const inputValue = type === 'checkbox' ? checked : value;
        setValues((prev) => ({ ...prev, [name]: inputValue }));
    };

    useEffect(() => {
        setErrors(Validation(values));
    }, [values]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (errors.name === '' && errors.email === '' && errors.password === '') {
            axios
                .post('http://localhost:3000/signup', values)
                .then((res) => {
                    navigate('/');
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-center auth">
                    <div className="row flex-grow">
                        <div className="col-lg-4 mx-auto">
                            <div className="auth-form-light text-left p-5">
                                <div className="brand-logo">
                                    <img src="../assets/images/faces/face28.png" alt="logo" />
                                </div>
                                <h4>New here?</h4>
                                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                                <form className="pt-3" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            id="exampleInputUsername1"
                                            placeholder="Username"
                                            name="name"
                                            value={values.name}
                                            onChange={handleInput}
                                        />
                                        {errors.name && <span className="text-danger">{errors.name}</span>}
                                    </div>
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
                                    <div className="form-group">
                                        <label className="form-check-label text-muted">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                name="agree"
                                                checked={values.agree}
                                                onChange={handleInput}
                                            />{' '}
                                            I agree to all Terms & Conditions
                                        </label>
                                    </div>
                                    <div className="mt-3">
                                        <button type="submit" className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn">
                                            SIGN UP
                                        </button>
                                    </div>
                                    <div className="text-center mt-4 font-weight-light">
                                        Already have an account? <Link to="/" className="text-primary">Login</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
