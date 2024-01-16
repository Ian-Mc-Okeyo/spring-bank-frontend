import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../Slices/auth';
import { useNavigate } from 'react-router-dom';

const NavBar = () =>{
    const user = useSelector((state)=>state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogOut = () =>{
        dispatch(logoutUser())
        navigate('/login')
    }

    return(
        <nav className="navbar navbar-modified navbar-expand-lg navbar-primary bg-primary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand nav-bar-link" href="#">Lofty Bank</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to='/dashboard' className="nav-link nav-bar-link" aria-current="page" href="#">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/payment-history' className="nav-link nav-bar-link" href="#">Payment History</Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/transaction-history' className="nav-link nav-bar-link" href="#" tabIndex="-1" aria-disabled="true">Transaction History</Link>
                    </li>
                </ul>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{right: '0'}}>
                    <li  className="nav-item">
                        <a className='nav-link nav-bar-link'>Welcome {user ? user.firstName:null }</a>
                    </li>
                    <li  className="nav-item">
                        <a role='button' onClick={handleLogOut} className='nav-link nav-bar-link'>Sign-out</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )

}

export default NavBar;