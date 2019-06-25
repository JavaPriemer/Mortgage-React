import React,{Component} from 'react';
import axios from 'axios';
import { withTranslation } from 'react-i18next';
import {withRouter} from 'react-router-dom';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            loginData : {
                loginId : '',
                password : ''
            }
        }
    }

    handleChangeEvent = (event) => {
        const { loginData } = this.state;
        loginData[event.target.name] = event.target.value;
        this.setState({ loginData });
    }

    onSubmitEvent = (event) => {
        event.preventDefault();
        const { loginData } = this.state;
        console.log(loginData, "asdfgh");
        this.getUserLogin(loginData).then(response => {
            this.props.validateUser(true);
            this.props.history.push('/accountDetails/'+response.data.customerId);
        }).catch(error => {
            console.log(error,'error');
            alert(error.response.data.statusMessage);
        })

    }
    getUserLogin = (loginData) => {
        return new Promise((resolve, reject) => {
            axios.put('http://10.117.189.18:9093/mortgage/api/login',loginData).then((response) => {
                resolve(response);
                console.log(response)
            }).catch((error) => {
                reject(error);
            });
        });
    }
    render(){
        let { t } = this.props;
        return(
            <div className="container">
                <div className="row">
                    <h3>{t("logintitle")}</h3>
                </div><br/>
                <form onSubmit={this.onSubmitEvent}>
                    <div className="form-group row">
                        <label htmlFor="loginId" className="col-sm-2 col-form-label">{t("loginid")}</label>
                            <div className="col-sm-6">
                                <input type="text" name="loginId" className="form-control" id="loginId" placeholder={t("ploginid")} required
                                    onChange={this.handleChangeEvent} />
                            </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">{t("password")}</label>
                            <div className="col-sm-6">
                                <input type="password" name="password" className="form-control" id="password" placeholder={t("ppassword")} required
                                    onChange={this.handleChangeEvent} />
                            </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-6">
                            <button id="btn1" className="btn btn-primary bb" type="submit">{t("login")}</button>
                        </div>
                        <div className="col-6">
                            <button id="btn2" className="btn btn-primary bb1" type="reset">{t("cancel")}</button>
                        </div>
                    </div><br/>
                    {/* <div className="row">
                        <div className="col">
                            <i><b>{t("msg")}</b></i>
                        </div>
                    </div> */}
                </form>
            </div>
        )
    }
}
export default withTranslation()(withRouter(Login));