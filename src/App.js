import { Redirect, Route, Switch } from 'react-router';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes"></Redirect>
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes></AllQuotes>
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail></QuoteDetail>
        </Route>
        <Route path="/new-quote">
          <NewQuote></NewQuote>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
