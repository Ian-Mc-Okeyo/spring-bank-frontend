import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useFormik } from 'formik';
import axios from 'axios';
import { useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import { ToastContainer, toast } from 'react-toastify';

const CreateAccountForm = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const baseurl = 'http://localhost:8081/api/v1/accounts/create';
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state)=>state.auth.user)
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    }

    config.headers['Authorization'] = `Bearer ${token}`;

    
    const onSubmit = () =>{
        setIsLoading(true)
        axios.post(baseurl, values, config).then((resp)=>{
            console.log(resp.data)
            setIsLoading(false)
            toast("Account Created", {
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
        }).catch((err)=>{
            setIsLoading(false)
            console.log(err)
        })

    }
    const {values, errors, handleSubmit, handleBlur, handleChange} = useFormik({
        initialValues: {
            accountType: '',
            accountName: ''
        },
        onSubmit
    })
    return(
        <form className = 'form-area dashboard-forms' onSubmit={handleSubmit}>
            <ToastContainer/>
           <TextField
                label="Enter Account Name"
                id="outlined-start-adornment"                                            
                sx={{ m: 1 }}
                fullWidth
                name = 'accountName'
                onChange={handleChange}
                value = {values.accountName}
                size = 'small'                     
            /><br/>
            <FormControl fullWidth size='small' sx={{ m: 1 }}>
                <InputLabel id="demo-simple-select-label">Account Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"                    
                    label="Account Type"
                    name = 'accountType'
                    onChange={handleChange}
                    value = {values.accountType}
                    
                >
                    <MenuItem value='CHECK'>Check</MenuItem>
                    <MenuItem value='SAVINGS'>Savings</MenuItem>
                    <MenuItem value='BUSINESS'>Business</MenuItem>
                </Select>
            </FormControl>
            <button type='submit' className='btn orange-button' style={{marginLeft: '9px'}} onClick={handleSubmit}>
                {isLoading ? <ReactLoading type='spin' color='orange' height={25} width={25}/>:'Create'}
            </button>
        </form>
    )
}

export default CreateAccountForm;