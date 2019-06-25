import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class MortgageAccount extends Component{
    constructor(){
        super();
        this.state = {
            mortgageData : {
                operationType : '',
                propertyCost : '',
                deposit : '',
                employmentStatus : '',
                occupation : '',
                contractType : '',
                dateOfJoining : '',
                title : '',
                firstName : '',
                middleName : '',
                surName : '',
                dateOfBirth : '',
                phoneNumber : '',
                email : '',
                confirmEmail : ''
            },
            credentialsData : []
        }
    }
    componentDidMount(){
        const {mortgageData} = this.state;
         console.log(this.props.mortgageScreenOneData,this.props.mortgageScreenTwoData,'in did mount')
         const a = {...this.props.mortgageScreenOneData , ...this.props.mortgageScreenTwoData} ;
         console.log(a,'12345');
        axios.post('http://10.117.189.18:9093/mortgage/api/mortgage',a).then( (response)=> {
            this.setState({credentialsData : [response.data]});
                console.log(response,'response');
            }).catch( (error) => {
               alert(error.message);
            });
    }
    render(){
        console.log(this.state.credentialsData,'data');
        return(
            <div className="container">
                <div className="row">
                    {this.state.credentialsData.map((item,index) => {
                        return(
                            <div key={index}>
                                <h2>Congratulations , Your Mortgage has been Granted</h2>
                                <br/>
                                <h4>This is the data you will need : </h4>
                                <br/>
                                <h5>Your Customer Login ID : </h5><div>{item.loginId}</div><br/>
                                <h5>Your Password : </h5><div>{item.password}</div><br/>
                                <h5>Your current Account Number : </h5><div>{item.accountNumber}</div><br/>
                                <h5>Your Mortgage Number : </h5><div>{item.mortgageNumber}</div><br/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, nextProps) => {
    console.log(state);
    return {
        mortgageScreenOneData: state.mortgageScreenOneData,
        mortgageScreenTwoData: state.mortgageScreenTwoData
      }
}
export default connect(mapStateToProps,null)(MortgageAccount);
