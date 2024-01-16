import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useFormik } from 'formik';
import ReactLoading from 'react-loading';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const DepositForm = () =>{
    const [isLoading, setIsLoading] = useState(false)
    const accounts = useSelector((state)=>state.data.accounts)
    const token = useSelector((state)=>state.auth.token)
    const baseurl = "http://localhost:8081/api/v1/transactions/deposit"

    const config = {
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        }
    }
    const onSubmit = () =>{
        setIsLoading(true)
        
        axios.post(baseurl, values, config).then((resp)=>{
            console.log(resp.data)
            setIsLoading(false)
            toast("Deposit Success", {
                position: "bottom-left",
                type:'success',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }).catch((err)=>{
            console.error(err)
            toast("An Error occured", {
                position: "top-left",
                type:'error',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            setIsLoading(false)
        })
    }

    const {values, errors, handleSubmit, handleBlur, handleChange} = useFormik({
        initialValues: {
            accountNumber: '',
            amount: ''
        },
        onSubmit
    })
    return(
                    <div className='form-area' style={{backgroundColor:'whitesmoke'}}>
                        <ToastContainer/>
                                       
                                        <FormControl fullWidth size='small' sx={{ m: 1 }}>
                                            <InputLabel id="demo-simple-select-label">Select Account</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"                    
                                                label="Select Account"
                                                name = 'accountNumber'
                                                onChange={handleChange}
                                                value = {values.accountNumber}
                                                
                                            >
                                                {
                                                    accounts.map((account, id)=>{
                                                        return(
                                                            <MenuItem value={account.accountNumber} key={id}>{account.accountName}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                        <br/>
                                        <TextField
                                            label="Amount"
                                            type='number'
                                            id="outlined-start-adornment"                                            
                                            sx={{ m: 1 }}
                                            size = 'small'
                                            name = 'amount'
                                            onChange={handleChange}
                                        
                                        />
                                       <br/>
                                       <button type='submit' className='btn orange-button' style={{marginLeft: '9px'}} onClick={handleSubmit}>
                                            {isLoading ? <ReactLoading type='spin' color='orange' height={25} width={25}/>:'Deposit'}
                                        </button>
                                        
                                    </div>
    )
}

export default DepositForm;