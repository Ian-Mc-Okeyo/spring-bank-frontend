import React, {useState, useEffect} from 'react';
import NavBar from './navBar';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const PaymentHistory = () =>{
    return(
        <>
            <NavBar/>
            <br/>
            <br/>
            <br/>
            <div className='customContainer'>
                <div style={{background:'white', padding: '10px'}} className='tableBody'>
                    <h6 style={{textAlign: 'left', fontSize: '1.5em'}} className='display-6'><AccountBalanceWalletIcon sx={{fontSize: 30, m:1}}/>Payment History</h6>
                    <table className="table table-striped table-hover" style={{padding: '10px'}}>
                        <thead>
                            <tr className='display-6' style={{fontSize: '1.1em', fontFamily:'monospace'}}>
                                <th scope="col">Transaction ID</th>
                                <th scope="col">Account Name</th>
                                <th scope="col">Receiver</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Source</th>
                                <th scope="col">Status</th>
                                <th scope="col">Reason Code</th>
                                <th scope="col">Payed at</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">3</th>
                                <td>Naikram Softs</td>
                                <td>Dedan Computers</td>
                                <td>1200000</td>
                                <td>Online</td>
                                <td>Success</td>
                                <td>Payment Successful</td>
                                <td>2023-10-23 15:08:06</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Naikram Softs</td>
                                <td>Soline Lines</td>
                                <td>12000</td>
                                <td>Online</td>
                                <td>Failed</td>
                                <td>Insfficient Funds</td>
                                <td>2023-08-23 09:08:06</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Aden Hearts</td>
                                <td>KWFT</td>
                                <td>1909000</td>
                                <td>Online</td>
                                <td>Success</td>
                                <td>Deposit Successful</td>
                                <td>2023-10-23 15:08:06</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        </>
    )
}

export default PaymentHistory;