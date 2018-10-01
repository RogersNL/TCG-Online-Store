import React from 'react';
import NavHeader from './NavHeader';
import Browse from './Browse';
import RegisterForm from './RegisterForm';
import Error404 from './Error404';
import SignIn from './SignIn';
import Admin from './Admin';
import NewItemForm from './NewItemForm';
import UserAccounts from './UserAccounts';
import Cart from './Cart';
import Account from './Account';
import EditAccount from './EditAccount';
import PastOrders from './PastOrders';
import Home from './Home';
import CheckoutForm from './CheckoutForm';
import ConfirmCheckout from './ConfirmCheckout';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <div>
        <NavHeader/>
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/browse' component={Browse} />
              <Route path='/register' component={RegisterForm} />
              <Route path='/sign-in' component={SignIn} />
              <Route path='/admin' component={Admin} />
              <Route path='/new-item' component={NewItemForm} />
              <Route path='/user-accounts' component={UserAccounts} />
              <Route path='/account' component={Account} />
              <Route path='/cart' component={Cart} />
              <Route path='/order-history' component={PastOrders} />
              <Route path='/edit-account' component={EditAccount} />
              <Route path='/checkout' component={CheckoutForm} />
              <Route path='/order-confirmation' component={ConfirmCheckout} />
              <Route component={Error404} />
            </Switch>
          </div>
      </div>
    );
  }
}

export default App;
