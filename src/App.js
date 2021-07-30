import logo from './logo.svg';
import './App.css';
import FirstPage from './components/firstpage/navbar';
import HomePage from './components/homepage/home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ProductPage from './components/product/product';
import CartPage from './components/cart/cart';

function App() {
  return (
    <div>
      <Router>
        <FirstPage />
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/product/:name" component={ProductPage} exact/>
          <Route path="/cart" component={CartPage} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
