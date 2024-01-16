import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/home';
import Register from './Components/register';
import Login from './Components/login';
import Dashboard from './Components/dashboard';
import TemporaryDrawer from './Components/sidebars';
import TransactionHistory from './Components/transactionHistory';
import PaymentHistory from './Components/paymentHistory';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route exact path='/register' element = {<Register/>}/>
        <Route exact path='/login' element = {<Login/>}/>
        <Route exact path='/dashboard' element = {<Dashboard/>}/>
        <Route exact path='/drawer' element = {<TemporaryDrawer/>}/>
        <Route exact path='/transaction-history' element = {<TransactionHistory/>}/>
        <Route exact path='/payment-history' element = {<PaymentHistory/>}/>
      </Routes>
    </Router>
  )
}

export default App
