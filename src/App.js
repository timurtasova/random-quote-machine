import './App.css';
import { useState } from 'react';
import RandomQuote from "./components/RandomQuote";

function App() {
    const [rerender, setRerender] = useState(false);

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

    const handleChangeQuote = () => {
        setRerender(!rerender);
    }

    return (
        <div>
            <RandomQuote color={randomColor} onChange={handleChangeQuote} />
        </div>
    );
}

export default App;