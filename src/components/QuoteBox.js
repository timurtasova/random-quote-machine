import QuoteText from "./QuoteText";
import { BsTwitter } from 'react-icons/bs';
import { FaTumblr } from "react-icons/fa";

function QuoteBox({ quote, color, onChange }) {
    const text = quote.quote.split(' ').join('%20');
    const author = quote.author.split(' ').join('%20');
    const tweet = `${text}%20${author}%20%23quotes`;

    const handleClick = () => {
        onChange();
    };

    return (
        <div id="quote-box" className="bg-white p-10 drop-shadow-md duration-500">
            <QuoteText quote={quote} color={color} />
            <div className="flex justify-between items-center p-10">
                <div className="flex justify-between items-center">
                    <a
                        id="tweet-quote"
                        className="text-white rounded p-3 mr-2 hover:opacity-80 duration-500"
                        href={`https://twitter.com/intent/tweet?text=${tweet}`}
                        style={{ backgroundColor: color }}
                        target="_blank"
                        title="Tweet this quote"
                    >
                        <BsTwitter />
                    </a>
                    <a
                        className="text-white rounded p-3 hover:opacity-80 duration-500"
                        href="#"
                        style={{ backgroundColor: color }}
                    >
                        <FaTumblr />
                    </a>
                </div>
                <button
                    id="new-quote"
                    onClick={handleClick}
                    style={{ backgroundColor: color }}
                    className="text-white rounded duration-500 p-2 hover:opacity-80"
                >
                    New quote
                </button>
            </div>
        </div>
    );
}

export default QuoteBox;