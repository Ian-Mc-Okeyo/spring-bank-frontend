import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () =>{
    return<>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <button className='btn'>
            <ReactLoading type='spin' height={60} width={60} color='orange'/>
        </button>
    </>
}

export default Loading;