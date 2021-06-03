import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';
const NewQuote = () => {
  //return <h1>New Quote Page</h1>;
  const history = useHistory();
  const addQuoteHandeler = (quoteData) => {
    console.log(quoteData);
    history.push('/quotes');
  };
  return <QuoteForm onAddQuote={addQuoteHandeler}></QuoteForm>;
};

export default NewQuote;
