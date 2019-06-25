import React,{Component} from 'react';
import axios from 'axios';

class AccountDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            accountDetails : []
        }
    }
    componentDidMount() {
        this.getAccountTransaction().then(response => {
            this.setState({ accountDetails: response.data });         
        });
        
    }
    getAccountTransaction = () => {
        return new Promise((resolve, reject) => {
            axios.get('http://10.117.189.18:9093/mortgage/api/accounts/'+this.props.match.params.customerIdParams).then( (response)=> {
                resolve(response);
                console.log(response,'list response');
            }).catch( (error) => {
                reject(error);
            });
        });
    }
    onStatementsClick = (accNo) => {
        this.props.history.push('/transactionStatements/'+accNo);
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <h3>Account Details</h3>
                </div>
                <div>
                 <table align="center" className="table table-hover container">
                    <thead>
                        <tr>
                        <th>Account Number</th>
                        <th>Balance</th>
                        <th>Date</th>
                        <th>Statements</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.accountDetails.map((item,i) => {
                        return(
                        <tr key={i}>
                        <td> {item.accountNumber}</td>
                        <td>{item.balance}</td>
                        <td>{item.date}</td>
                        <td><button className="btn btn-outline-primary" onClick={() =>this.onStatementsClick(item.accountNumber)}>Statements</button></td>
                        </tr>
                        )})}
                    </tbody>
                </table> 
                </div>
            </div>
        )
    }
}
export default AccountDetails;