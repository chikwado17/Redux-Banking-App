import React from 'react';
import Banking from './components/Banking';
import Balance from './components/Balance';


const App = () => {
    return (
        <div className="m-4">
           <Balance />
           <Banking />
        </div>
    )
}

export default App
