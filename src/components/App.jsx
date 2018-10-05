import React from 'react';
import NavHeader from './NavHeader';
import Browse from './Browse';
import Error404 from './Error404';
import SignIn from './SignIn';
import Cart from './Cart';
import Account from './Account';
import EditAccount from './EditAccount';
import OrderHistory from './OrderHistory';
import RegisterControl from './RegisterControl';
import Home from './Home';
import CheckoutForm from './CheckoutForm';
import ItemList from './ItemList';
import ConfirmCheckout from './ConfirmCheckout';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSetList } from './../actions';
import * as actions from './../actions';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: null,
      selectedAccount: null,
      selectedCategory: null
    };
  }
  componentWillMount() {
    const { dispatch } = this.props;
    const { watchFirebaseAccountsRef } = actions;
    dispatch(watchFirebaseAccountsRef());
    dispatch(fetchSetList());
  }
  render(){
    return (
      <div>
        <NavHeader/>
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/browse' render={()=><Browse setList={this.props.masterSetList}/>} />
            <Route path='/browse/:cardId' render={()=><ItemList cardList={this.props.selectedSet} />} />
            <Route path='/register' render={()=><RegisterControl accountList={this.props.masterAccountList} />} />
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

const mapStateToProps = state => {
  return {
    masterAccountList: state.masterAccountList,
    masterSetList: state.categoryList.sets,
    selectedSet: state.selectedCategory.cards
  };
};
App.propTypes = {
  masterAccountList: PropTypes.object,
  masterSetList: PropTypes.object,
  selectedSet: PropTypes.object
};
export default withRouter(connect(mapStateToProps)(App));
