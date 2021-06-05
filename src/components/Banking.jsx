import React, { useState } from 'react';

const Banking = () => {
    const [ bankInput, SetBankInput ] = useState('');

    const handleBankingForm = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form  onSubmit={handleBankingForm} className="form-group">
                <input onChange={(e) => SetBankInput(e.target.value)} value={bankInput} type="text" className="form-control" />

                <br /><br />
                <button className="btn btn-success">Deposit</button>
                <button className="btn btn-primary">Withdraw</button>
                <button className="btn btn-warning">Collect Interest</button>
                <button className="btn btn-danger">Delete Account</button>
                <button className="btn btn-secondary">Chance Account Type</button>
            </form>
        </div>
    )
}

export default Banking
