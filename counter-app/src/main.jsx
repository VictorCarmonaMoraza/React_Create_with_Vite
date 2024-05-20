import React from 'react';   // Import the React library
import ReactDOM from 'react-dom/client';



function App(){
    //Document.createElement('h1');
    return (
        <div>
            <h1>Hello World!</h1>;
        </div>
    );  
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);