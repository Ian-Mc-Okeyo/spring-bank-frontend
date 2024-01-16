import React, {useState, useEffect} from 'react';
import NavBar from './navBar';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Loading from './Loading'

const TransactionHistory = () =>{
    const [txnHistories, setTxnHistories] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const baseurl = "http://localhost:8081/api/v1/transactions/get-transaction-history";
    const token = useSelector((state)=>state.auth.token)

    const config = {
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        }
    }
    useEffect(()=>{
        axios.get(baseurl, config).then((resp)=>{
            console.log(resp.data)
            setTxnHistories(resp.data)
            setTimeout(()=>{
                setIsLoading(false)
            }, 3000)
        }).catch((err)=>{
            setTimeout(()=>{
                setIsLoading(false)
            }, 3000)
            console.log(err)
        })
    }, [])
    return(
        <>
            <NavBar/>
            <br/>
            <br/>
            <br/>
            <div className='customContainer'>
                <div style={{background:'white', padding: '10px'}} className='tableBody'>
                    <h6 style={{textAlign: 'left', fontSize: '1.5em'}} className='display-6'><AccountBalanceWalletIcon sx={{fontSize: 30, m:1}}/>Transaction History</h6>
                    {
                        isLoading ? <Loading/>: 
                    
                        <table className="table table-striped table-hover" style={{padding: '10px'}}>
                            <thead>
                                <tr className='display-6' style={{fontSize: '1.1em', fontFamily:'monospace'}}>
                                    <th scope="col">Transaction ID</th>
                                    <th scope="col">Account Name</th>
                                    <th scope="col">Transaction Type</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Third Party</th>
                                    <th scope="col">Status</th>                               
                                    <th scope="col">Created at</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {
                                    txnHistories.map((txn)=>{
                                        return(
                                            <tr>
                                                
                                                <td>{txn.id}</td>
                                                <td>{txn.account.accountName}</td>
                                                <td>{txn.type}</td>
                                                <td>{txn.amount}</td>
                                                <td>{txn.thirdPartyAccountNumber}</td>
                                                <td>{txn.status}</td>                                            
                                                <td>{txn.transTime}</td>
                                            </tr>
                                        )
                                    })
                                }
                                
                            </tbody>
                        </table>
                    }
                </div>
                
            </div>
        </>
    )
}

export default TransactionHistory;