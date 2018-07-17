import React from 'react';
import Sidebar from './sidebar';

const App = ({children}) => {
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    );
}

export default App;
