import React from 'react';
import Auth from './components/Auth';
import AccountStatus from './components/AccountStatus';
import Banking from './components/Banking';
import Balance from './components/Balance';


const App = () => {
    return (
        <div className="m-4">
           <Auth />
           <Balance />
           <Banking />
           <AccountStatus />
        </div>
    )
}

export default App
