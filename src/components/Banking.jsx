import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deposit,widthdraw,collectInterest,deleteAccount } from './bankingActions';


const Banking = () => {
    const [ bankInput, SetBankInput ] = useState('');
    const dispatch = useDispatch();


    const handleBankingForm = (e) => {
        e.preventDefault();
    };

    const handleBankDeposit = () => {
        dispatch(deposit(bankInput));
        SetBankInput('');
    };

    const handleBankWithdraw = () => {
       dispatch(widthdraw(bankInput));
       SetBankInput('');
    };

    const handleCollectInterest = () => {
        dispatch(collectInterest());
       
    }

    const handleDeleteAccount = () => {
        dispatch(deleteAccount());
    };

    return (
        <div>
            <form  onSubmit={handleBankingForm} className="form-group">
                <input onChange={(e) => SetBankInput(e.target.value)} value={bankInput} type="text" className="form-control" />

                <br /><br />
                <button onClick={handleBankDeposit} className="btn btn-success">Deposit</button>
                <button onClick={handleBankWithdraw} className="btn btn-primary">Withdraw</button>
                <button onClick={handleCollectInterest} className="btn btn-warning">Collect Interest</button>
                <button onClick={handleDeleteAccount } className="btn btn-danger">Delete Account</button>
            </form>
        </div>
    )
}

export default Banking
