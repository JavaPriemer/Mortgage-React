import React,{Component} from 'react';
import {HashRouter,Switch,Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Header from './components/Header/Header';
import MortgageScreenOne from './components/MortgageAccount/MortgageScreenOne';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccountDetails from './components/AccountDetails/AccountDetails';
import MortgageScreenTwo from './components/MortgageAccount/MortgageScreenTwo';
import MortgageAccount from './components/MortgageAccount/MortgageAccount';
import TransactionStatements from './components/TransactionStatements/TransactionStatements';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }
  validateUser = (isLoggedIn)=> {
    this.setState({isLoggedIn})  
  }

  redirect = (page, history) => {
    history.push('/'+ page);
  }
  render(){
    return (
      <div>
        <HashRouter>
          <div>
        <div><Header isLoggedIn={this.state.isLoggedIn} redirect={this.redirect}/></div><br/>
        <Switch>
              <Route path="/" component={()=> <Login  validateUser={this.validateUser} />} exact/>
              <Route path="/login" component={()=> <Login  validateUser={this.validateUser} />} />
              <Route path="/mortgageScreenOne" component={MortgageScreenOne} />
              <Route path="/mortgageScreenTwo" component={MortgageScreenTwo} />
              <Route path="/mortgageAccount" component={MortgageAccount} />
              <Route path="/accountDetails/:customerIdParams" component={AccountDetails} />
              <Route path="/transactionStatements/:accNoParams" component={TransactionStatements} />
              <Route path="/logout" component={Logout} />
        </Switch>
        </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
