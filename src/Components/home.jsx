import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
    return(
        <div className='maximum-width' id='body-page'>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
            <div className='d-flex align-items-center my-auto mx-auto'>
                <div id = "sample-text-card" className='m-4 col-md-6 border-0 home-text-box bg-transparent'>
                    <div className='card-body'>
                        <h1 className='mb-3'>Easy-Way Bank</h1>
                        <h5 className='card-title'>
                            Flexible Banking Solution
                        </h5>
                        <p className='card-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className='button-wrapper d-flex align-items-center'>
                            <Link to='/register' className='btn btn-md register' role='button'>Register</Link>
                            <a className='btn btn-md login' role='button'>Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home;