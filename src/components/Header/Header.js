import React,{Component} from 'react';
import { withTranslation} from 'react-i18next';
import image from './logo2.jpg';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
   } from 'reactstrap';
import {withRouter} from 'react-router-dom';

class Header extends Component{
   
    onChangeEvent = (event) => {
        let { i18n } = this.props;
        i18n.changeLanguage(event.target.value);
      }
    
    redirect = (page) => {
        this.props.redirect(page, this.props.history);
    }
 
    onClickAccount = () => {
        this.props.history.push('/MortgageScreenOne');
    }
    render(){
      let { t } = this.props;
        return(
            <div className="container-fluid" style={{backgroundColor: '#ff6200'}} height="50px">          
            <Navbar expand="md">
                <NavbarBrand >
                    <img id="image" src={image}  height="50px" width=""  alt=""/>
                </NavbarBrand>
                
                  <NavbarToggler  />
                    <Nav className="ml-auto"  navbar>
                    <NavItem>
                    <h1 id="h1tag" align="center" className="justify-content-center" style={{color: 'white'}} >{t("header")}</h1>
                </NavItem>
                      <NavItem>
                        <button  style={{color: 'white'}} className="btn btn-default"  onClick={this.onClickAccount}>{t("account")}</button>
                      </NavItem>
                      <NavItem>
                        {    
                            this.props.isLoggedIn ?
                            <button style={{color: 'white'}} className="btn btn-default"  onClick={()=>this.redirect('logout')}>{t("logout")}</button>:
                            <button style={{color: 'white'}} className="btn btn-default"  onClick={()=>this.redirect('login')}>{t("login")}</button>
                        }
                      </NavItem>
                      <NavItem>
                        <select id="select" style={{color: 'white'}}  onChange={this.onChangeEvent}  className="btn btn-default dropdown-toggle">
                        <option value="en">English</option>
                        <option value="sp">Spanish</option>
                    </select>
                    </NavItem>
                    </Nav>
                </Navbar>
                </div>
        )
    }
}
export default withTranslation()(withRouter(Header));