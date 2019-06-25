import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mortgageAction from './action/mortgageAction';

class MortgageScreenOne extends Component {
    constructor(){
        super();
        this.state = {
            mortgageScreenOneData : {
                operationType : '',
                propertyCost : '',
                deposit : '',
                employmentStatus : '',
                occupation : '',
                contractType : '',
                dateOfJoining : ''
            }
        }
    }


    handleChangeEvent = (event) => {
        const { mortgageScreenOneData } = this.state;
        mortgageScreenOneData[event.target.name] = event.target.value;
        this.setState({ mortgageScreenOneData });
    }

    onSubmitEvent = (event) => {
        event.preventDefault();
        const { mortgageScreenOneData } = this.state;
        console.log(mortgageScreenOneData, "asdfgh");
        this.props.action.mortgage(mortgageScreenOneData);
        this.props.history.push('/mortgageScreenTwo');

    }
    componentDidMount() {
        console.log(this.props);
        //this.setState({mortgageScreenOneData : this.props.mortgageScreenOneData});
    }
    render(){
        return(
            <div className="container">
                <div className="row justified-content-center">
                    <h2>Create Your Mortgage</h2>
                </div><br/>
                <form onSubmit={this.onSubmitEvent}>
                    <div className="form-group row">
                        <label htmlFor="operationType" className="col-sm-4 col-form-label">I'm thinking about</label>
                            <div className="col-sm-6">
                            <select name="operationType" className="form-control" id="operationType" onChange={this.handleChangeEvent} >
                                    <option>Select</option>
                                    <option>Buying my first home</option>
                                    <option>Moving to another home</option>        
                                    <option>Remortgaging</option>
                                    <option>Buying a second home</option>
                                    <option>Buying a property to let</option>
                                    <option>Remortgaging my buy to let property</option>
                            </select>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="propertyCost" className="col-sm-4 col-form-label">How much do you think the property will cost ? * Minimum Amount 100000</label>
                            <div className="col-sm-6">
                                <input type="number" name="propertyCost" className="form-control" id="propertyCost" placeholder="Enter Property Cost" required 
                                value={this.state.mortgageScreenOneData.propertyCost}
                                    onChange={this.handleChangeEvent} />
                            </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="deposit" className="col-sm-4 col-form-label">How much deposit do you have ?</label>
                            <div className="col-sm-6">
                                <input type="number" name="deposit" className="form-control" id="deposit" placeholder="Enter Deposit Amount" required
                                    onChange={this.handleChangeEvent} />
                            </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="employmentStatus" className="col-sm-4 col-form-label">What is Your Employment Status ?</label>
                            <div className="col-sm-6">
                            <select name="employmentStatus" className="form-control" id="employmentStatus" onChange={this.handleChangeEvent} >
                                    <option>Select</option>
                                    <option>Employed</option>
                                    <option>Self-Employed</option>        
                            </select>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="occupation" className="col-sm-4 col-form-label">What is Your Occupation ?</label>
                            <div className="col-sm-6">
                            <select name="occupation" className="form-control" id="occupation" onChange={this.handleChangeEvent} >
                                    <option>Select</option>
                                    <option>Semi-professional</option>
                                    <option>Executive</option> 
                                    <option>Professional</option> 
                                    <option>Manager</option> 
                                    <option>Office Staff</option>
                                    <option>Doctor</option>
                                    <option>Actor</option>
                                    <option>Other employment</option>    
                            </select>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="contractType" className="col-sm-4 col-form-label">What is Contract Type ?</label>
                            <div className="col-sm-6">
                            <select name="contractType" className="form-control" id="contractType" onChange={this.handleChangeEvent} >
                                    <option>Select</option>
                                    <option>Probationary</option>
                                    <option>Piecework</option>
                                    <option>Sub-Contracted</option> 
                                    <option>Seasonal/Temporary</option> 
                                    <option>Fixed/Short Term Contract</option>
                                    <option>Agency worker </option>
                            </select>
                            </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="dateOfJoining" className="col-sm-4 col-form-label">When did you start this job?</label>
                            <div className="col-sm-6">
                                <input type="date" name="dateOfJoining" className="form-control" id="dateOfJoining"  required
                                    onChange={this.handleChangeEvent} />
                            </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-6">
                            <button id="btn1" className="btn btn-primary" type="submit">Continue</button>
                        </div>
                        <div className="col-6">
                            <button id="btn2" className="btn btn-primary" type="reset">Cancel</button>
                        </div>
                    </div><br/>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        action: bindActionCreators(mortgageAction, dispatch),
    }
    
}
const mapStateToProps = (state, nextProps) => {
    console.log(state);
    return {
        mortgageScreenOneData: state.mortgageScreenOneData
      }
}
export default connect(mapStateToProps,mapDispatchToProps)(MortgageScreenOne);
