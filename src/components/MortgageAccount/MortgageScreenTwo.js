import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mortgageAction from './action/mortgageAction';

class MortgageScreenTwo extends Component{
    constructor(props){
        super(props);
        this.state = {
            mortgageScreenTwoData : {
                title : '',
                firstName : '',
                middleName : '',
                surName : '',
                dateOfBirth : '',
                phoneNumber : '',
                email : '',
                confirmEmail : ''
            }
        }
    }

    handleChangeEvent = (event) => {
        const { mortgageScreenTwoData } = this.state;
        mortgageScreenTwoData[event.target.name] = event.target.value;
        this.setState({ mortgageScreenTwoData });
    }

    
    onSubmitEvent = (event) => {
        event.preventDefault();
        const { mortgageScreenTwoData } = this.state;
        console.log(mortgageScreenTwoData, "asdfghtyui");
        if(this.state.mortgageScreenTwoData.email === this.state.mortgageScreenTwoData.confirmEmail){
            this.props.action.personalData(mortgageScreenTwoData);
            this.props.history.push('/mortgageAccount');
        }else{
            alert("Your Email and Confirm Email is not matching.");
        }
    }

    onMortgageScreenOne = () => {
        this.props.history.push('/mortgageScreenOne');
    }
    render(){
        return(
            <div className="container">
                {/* <div className="row justified-content-center">
                    <h2>Create Your Mortgage</h2>
                </div><br/> */}
                <div className="row">
                <h2 className="col">Create Your Mortgage</h2>
                    <div className="col">
                        <button className="btn btn-outline-primary" onClick={this.onMortgageScreenOne}>Back</button>
                    </div>
                </div><br/>
                <div>
                <form onSubmit={this.onSubmitEvent}>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-4 col-form-label">Title</label>
                            <div className="col-sm-6">
                            <select name="title" className="form-control" id="title" onChange={this.handleChangeEvent} >
                                    <option>Select</option>
                                    <option>Mr</option>
                                    <option>Mrs</option> 
                                    <option>Miss</option>
                                    <option>Mr</option> 
                                    <option>Other</option>
                            </select>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="firstName" className="col-sm-4 col-form-label">First Name</label>
                            <div className="col-sm-6">
                                <input type="text" name="firstName" className="form-control" id="firstName" placeholder="Enter FirstName" required
                                    onChange={this.handleChangeEvent} />
                            </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="middleName" className="col-sm-4 col-form-label">Middle Name</label>
                            <div className="col-sm-6">
                                <input type="text" name="middleName" className="form-control" id="middleName" placeholder="Enter MiddleName" required
                                    onChange={this.handleChangeEvent} />
                            </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="surName" className="col-sm-4 col-form-label">SurName</label>
                            <div className="col-sm-6">
                                <input type="text" name="surName" className="form-control" id="surName" placeholder="Enter SurName" required
                                    onChange={this.handleChangeEvent} />
                            </div>
                    </div> 
                    <div className="form-group row">
                        <label htmlFor="dateOfBirth" className="col-sm-4 col-form-label">Date Of Birth *Minimum age required 18</label>
                            <div className="col-sm-6">
                                <input type="date" name="dateOfBirth" className="form-control" id="dateOfBirth"  required
                                    onChange={this.handleChangeEvent} />
                            </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="phoneNumber" className="col-sm-4 col-form-label">What is Your preferred contact Number ?</label>
                            <div className="col-sm-6">
                                <input type="number" name="phoneNumber" className="form-control" id="phoneNumber" placeholder="Enter Contact Number " required
                                    onChange={this.handleChangeEvent} />
                            </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-4 col-form-label">What is your email address ?</label>
                            <div className="col-sm-6">
                                <input type="email" name="email" className="form-control" id="email" placeholder="Enter Email Address" required
                                    onChange={this.handleChangeEvent} />
                            </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="confirmEmail" className="col-sm-4 col-form-label">Please confirm your email address ?</label>
                            <div className="col-sm-6">
                                <input type="email" name="confirmEmail" className="form-control" id="confirmEmail" placeholder="Re-Enter Email Address" required
                                    onChange={this.handleChangeEvent} />
                            </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-6">
                            <button id="btn1" className="btn btn-primary" type="submit">Submit</button>
                        </div>
                        <div className="col-6">
                            <button id="btn2" className="btn btn-primary" type="reset">Cancel</button>
                        </div>
                    </div><br/>
                </form>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        action: bindActionCreators(mortgageAction, dispatch),
    }
    
}
export default connect(null,mapDispatchToProps)(MortgageScreenTwo);