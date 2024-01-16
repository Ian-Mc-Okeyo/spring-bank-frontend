import React, {useState} from 'react';
import TextField from '@mui/material/TextField';

const PaymentForm = () =>{
    return(
        <div className='form-area' style={{backgroundColor:'whitesmoke'}}>
                                        <TextField
                                            label="Beneficiary"
                                            id="outlined-start-adornment"
                                            
                                            sx={{ m: 1 }}
                                            size = 'small'
                                        
                                        /><br/>
                                        <TextField
                                            label="Beneficiary Account Number"
                                            id="outlined-start-adornment"
                                            
                                            sx={{ m: 1 }}
                                            size = 'small'
                                        
                                        /><br/>
                                        <TextField
                                            label="Select Account Number"
                                            id="outlined-start-adornment"
                                            
                                            sx={{ m: 1 }}
                                            size = 'small'
                                        
                                        /><br/>
                                        <TextField
                                            label="Amount"
                                            id="outlined-start-adornment"
                                            
                                            sx={{ m: 1 }}
                                            size = 'small'
                                        
                                        /><br/>
                                        <button className='btn orange-button'>
                                            Pay
                                        </button>
                                    </div>
    )
}

export default PaymentForm