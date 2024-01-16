import React, {useState, useEffect} from 'react';
import NavBar from './navBar';
import WalletIcon from '@mui/icons-material/Wallet';
import Button from '@mui/material/Button';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import TransferForm from './Forms/transferForm';
import PaymentForm from './Forms/paymentForm';
import WithdrawForm from './Forms/withdrawForm';
import DepositForm from './Forms/depositForm';
import CreateAccountForm from './Forms/CreateAccountForm';
import { useSelector, useDispatch } from 'react-redux';
import { setAccounts } from '../Slices/data';
import axios from 'axios';
import { accordionSummaryClasses } from '@mui/material';
import Loading from './Loading';

const Dashboard = ()=>{
    const user = useSelector((state)=>state.auth.user)
    const token = useSelector((state)=>state.auth.token)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    const [accounts, setAccountsData] = useState([])
    const baseurl = 'http://localhost:8081/api/v1/accounts';

    const config = {
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        }
    }

    const [drawerState, setDrawerState] = useState({
        right: false,
        left: false
    })

    useEffect(()=>{
        axios.get(baseurl+'/get/user-accounts', config).then((resp)=>{
            
            setAccountsData(resp.data)
            dispatch(setAccounts(resp.data))
            setTimeout(()=>{
                setIsLoading(false)
            }, 3000)
            
        }).catch((err)=>{
            console.log(err)
            setTimeout(()=>{
                setIsLoading(false)
            }, 3000)
        })
    }, [])


    const [transactOption, setTransactOption] = useState("3");

    const [state, setState] = useState({
        right: false,
        left: false,
      });
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
    const openDrawer = (anchor, open) => {
        console.log('Clocked toggle');
        setState({ ...state, [anchor]: open });
      }

    return(
        <>
            <NavBar/>
            <br/>
            <br/>
            {
                isLoading ? <Loading/>:
            
                <div className='customContainer'>
                    <div>
                        {['left', 'right'].map((anchor, id) => (
                            <React.Fragment key={id}>
                                <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                
                                onClose={toggleDrawer(anchor, false)}
                                
                            >
                                {
                                    anchor == 'right' ?
                                    <div className='sideContainer'>
                                        <h3 className='display-6' style={{fontSize: '1.3em'}}><AccountBalanceWalletIcon sx={{fontSize:40}}/>Create Account/Add Account</h3>
                                        <br/>
                                        <CreateAccountForm/>
                                    </div>:

                                    <div className='sideContainer'>
                                        <h3 className='display-6'><AccountBalanceWalletIcon sx={{fontSize:40}}/>Transact</h3>
                                        <p>Choose an option below to transact</p>
                                        <select className="form-select form-select-sm" aria-label=".form-select-sm example"
                                            onChange={(e)=>setTransactOption(e.target.value)}
                                        >
                                            <option selected>--Select Payment type--</option>
                                            <option value="1">Payment</option>
                                            <option value="2">Transfer</option>
                                            <option value="3">Withdraw</option>
                                            <option value="4">Deposit</option>
                                        </select>
                                        <br/>
                                            {
                                            transactOption == "2"?
                                                <TransferForm/>:null 
                                            } 
                                            {transactOption == '1'? 
                                                <PaymentForm/>
                                            :null}
                                            {
                                                transactOption == '3'? 
                                                    <WithdrawForm/>
                                                :null
                                            }
                                            {
                                                transactOption == '4'? 
                                                    <DepositForm/>
                                                :null
                                            }
                                    
                                    </div>
                                }
                            
                            </Drawer>
                            </React.Fragment>
                            
                        ))}
                    </div>
                    <div className='row justify-content-between'>
                        <div className='col-md-2 col-6'>
                        <button className='btn orange-button' onClick={()=>openDrawer('right', true)}>
                            <WalletIcon sx={{fontSize: 30}}/> Add Account
                        </button>
                        </div>
                        <div className='col-md-3 col-6'>
                            <button className='btn yellow-button' onClick={()=>openDrawer('left', true)}>
                                <AccountBalanceWalletIcon sx={{fontSize: 30}}/> Transact
                            </button>
                        </div>
                    </div>
                    <br/>
                    <div className='row justify-content-between'>
                        <div className='col-md-3 col-6'>
                            <h6 className='display-6' style={{fontSize: '1.4em'}}>Total Account Balances</h6>
                        </div>
                        <div className='col-md-3 col-5'>
                            <h3 className='display-6' style={{fontSize: '2em'}}>0.00</h3>
                        </div>
                        <div className='col-md-12'>
                            <div className="accordion" id="accordionExample">
                                {
                                    accounts.map((account, index)=>{
                                        return(
                                            <div className="accordion-item" key={index}>
                                                <h2 className="accordion-header" id={'heading'+index} >
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#collapse'+index} aria-expanded="true" aria-controls={'collapse'+index}>
                                                    {account.accountName}
                                                </button>
                                                </h2>
                                                <div id={'collapse'+index} className="accordion-collapse collapse" aria-labelledby={'heading'+index} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <ul className='list-group'>
                                                        <li className='list-group-item d-flex justify-content-between'>
                                                            <div>Account Name</div>
                                                            <div>{account.accountName}</div>
                                                        </li>
                                                        <li className='list-group-item d-flex justify-content-between'>
                                                            <div>Account Number</div>
                                                            <div>{account.accountNumber}</div>
                                                        </li>
                                                        <li className='list-group-item d-flex justify-content-between'>
                                                            <div>Account Type</div>
                                                            <div>{account.accountType}</div>
                                                        </li>
                                                        <li className='list-group-item d-flex justify-content-between'>
                                                            <div>Account Balance</div>
                                                            <div>{account.balance}</div>
                                                        </li>
                                                        <li className='list-group-item d-flex justify-content-between'>
                                                            <div>Created At</div>
                                                            <div>{account.createdAt}</div>
                                                        </li>
                                                    </ul>
                                                
                                                </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className='col-md-12'>
                            <div className="card">
                                <div className="card-header">
                                    <h3 className='card-title'>No Registered Accounts</h3>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">You currently do not have any registered acccounts.<br/>
                                        Kindly Click the button below to add an account
                                    </p>
                                    <button className='btn orange-button' onClick={()=>openDrawer('right', true)}>
                                        <WalletIcon sx={{fontSize: 30}}/> Add Account
                                    </button>
                                </div>
                            </div>

                    </div>            
                    
                </div>
            }
        </>
        
    )
}

export default Dashboard;