import { FaQuoteLeft } from 'react-icons/fa'

function QuoteText({ quote, color }) {
    return (
        <div className="flex flex-col duration-500" style={{color: color}}>
            <p id="text" className="text-2xl">
            <FaQuoteLeft className='inline' />
            {' '}{quote.quote}
            </p>
            <span id="author" className="text-xl text-end mt-3">-{quote.author}</span>
        </div>
    );
}

export default QuoteText;