import axios from 'axios';
import {useState, useEffect} from 'react';
import PriceCard from './components/PriceCard';
import logo from './logo.png';
import './App.css';

const App = () => {
    // see https://reactjs.org/docs/hooks-reference.html#usestate
    const [timer, setTimer] = useState(0);

useEffect(() => {
    async function getDogecoinPrice() {
        // go safari: development -> https://stackoverflow.com/questions/4556429/disabling-same-origin-policy-in-safari
        const {data} = await axios.get('http://127.0.0.1:5000/time_feed');
        console.log(data)
        setTimer(data);
    }
    getDogecoinPrice();
    setInterval(() => getDogecoinPrice(), 1000);
}, []);

    return (
        <div className="App">
            <img src={logo} width={150} height={150} alt="Dogecoin Logo" />
            <h1 className="title"> TIMECLOCK </h1>
            <h5 className="subtitle"> A REACT-FLASK FRONT/BACK_END START-UP </h5>

            <div className="prices-container">
            <PriceCard type="time" price={timer} />
            </div>

            <p> This proj is migrated from{' '} <a href="https://github.com/itsnitinr/dogecoin-ticker">DOGECOIN-TICKER</a> </p>
            <p> With Ref to {' '} <a href="https://github.com/facebook/create-react-app">CREATE-REACT-APP</a> </p>
            <p> With Ref to {' '} <a href="https://stackoverflow.com/questions/4556429/disabling-same-origin-policy-in-safari">FIX AXIO-GET FAILURE</a> </p>
        </div>
    );
};

export default App;
