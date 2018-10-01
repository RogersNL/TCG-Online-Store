import React from 'react';
import NavHeader from './NavHeader';
import Browse from './Browse';
import RegisterForm from './RegisterForm';
import Error404 from './Error404';
import SignIn from './SignIn';
import Cart from './Cart';
import Account from './Account';
import EditAccount from './EditAccount';
import OrderHistory from './OrderHistory';
import Home from './Home';
import CheckoutForm from './CheckoutForm';
import ConfirmCheckout from './ConfirmCheckout';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterAccountList,
      selectedItem: null,
      selectedAccount: null
    }
  }
  componentWillMount() {
    const { dispatch } = this.props;
    const { watchFirebaseAccountsRef } = actions;
    dispatch(watchFirebaseAccountsRef());

    }
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
            <Route path='/account' component={Account} />
            <Route path='/cart' component={Cart} />
            <Route path='/order-history' component={OrderHistory} />
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
