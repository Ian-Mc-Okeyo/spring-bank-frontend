import React, {useState, useEffect} from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useFormik } from 'formik';
import ReactLoading from 'react-loading';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser, setToken } from '../Slices/auth';
import { Link } from 'react-router-dom';

const Register = () =>{
    const [showPassword, setShowPassword] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const baseurl = 'http://localhost:8081/api/v1/auth';
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onSubmit = () =>{
        setIsLoading(true)
        axios.post(baseurl + '/register', {
            firstName:values.firstName,
            lastName: values.lastName,
            email:values.email,
            password: values.password,
            role: values.role,
            confirmPassword: values.confirmPassword
        }).then((resp)=>{
            console.log(resp.data)
            dispatch(setToken(resp.data.accessToken))
            dispatch(setUser({
                firstName:resp.data.firstName,
                lastName:resp.data.lastName
            }))
            toast("Login success", {
                position: "top-center",
                type:'success',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            setTimeout(()=>{
                setIsLoading(false)
                navigate('/dashboard')
            }, 3000)
        }).catch((err)=>{
            console.log(err)
            setIsLoading(false)
        })
    }

    const {values, errors, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            firstName: '',
            lastName:'',
            email:'',
            password:'',
            role: 'USER',
            confirmPassword:''
        },
        onSubmit
    })

    return(
        <div className='maximum-width' id='body-page'>
            <br/>
            <div className='d-flex align-items-center my-auto justify-content-center vertical-center'>
                <div className='col-md-7 my-auto'>
                    <div className='form-area'>
                        <h3>Register</h3>
                        <h5>Fill in the details below to register</h5>
                        <form onSubmit={handleSubmit}>
                            <div className='row justify-content-left'>
                                <div className='col-md-6'>
                                    <TextField
                                        label="First Name"
                                        id="outlined-first-name-adornment"
                                        fullWidth
                                        sx={{ m: 1 }}
                                        size = 'small'
                                        onChange={handleChange}
                                        name='firstName'
                                        value={values.firstName}
                                    
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <TextField
                                        label="Last Name"
                                        id="outlined-last-name-adornment"
                                        fullWidth
                                        size = 'small'
                                        sx={{ m: 1 }}
                                        onChange={handleChange}
                                        name='lastName'
                                        value={values.lastName}                             
                                    />
                                </div>
                                <div className='col-md-12'>
                                    <TextField
                                        label="Email"
                                        id="outlined-email-adornment"
                                        fullWidth
                                        size = 'small'
                                        sx={{ m: 1 }}
                                        onChange={handleChange}
                                        name='email'
                                        value={values.email}                               
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <FormControl sx={{ m: 1 }} fullWidth variant="outlined" size='small'>
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            name='password'
                                            onChange={handleChange}
                                            value={values.password}
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                </div>
                                <div className='col-md-6'>
                                    <FormControl sx={{ m: 1 }} fullWidth variant="outlined" size='small'>
                                        <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-confirm-password"
                                            onChange={handleChange}
                                            name='confirmPassword'
                                            value={values.confirmPassword}
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                </div>
                                <div className='col-md-6' style={{marginLeft: '8px'}}>
                                    <button type='submit' className='btn btn-primary' onClick={handleSubmit}>{isLoading ? <ReactLoading type='spin' color='orange' height={25} width={25}/>:'Register'}</button>
                                </div>
                                <br/>
                                <small className='text-muted'>Have an account? <Link to='/login'>Login</Link></small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Register;