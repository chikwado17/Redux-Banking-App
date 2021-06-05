import React from 'react'

const Banking = () => {
    return (
        <div>
            <form action="" className="form-group">
                <input type="text" className="form-control" />

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
