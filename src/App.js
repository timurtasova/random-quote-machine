import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteBox from './components/QuoteBox';

function App() {
    const [quote, setQuote] = useState({});

    const fetchQuote = async() => {
        const response = await axios.get('https://api.quotable.io/quotes/random');
        setQuote(response.data[0]);
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    const colors = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;

    const handleChangeQuote = async() => {
        const response = await axios.get('https://api.quotable.io/quotes/random');
        setQuote(response.data[0]);
    }

    return (
        <div>
            <QuoteBox color={randomColor} onChange={handleChangeQuote} quote={quote} />
        </div>
    );
}

export default App;