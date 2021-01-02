import React, { Component } from 'react';
import './Login.css';
import axios from '../../axios';
import { Redirect } from 'react-router-dom';
import * as actionType from '../../reducer/action';
import { connect } from 'react-redux';
class Login extends Component
{
   

    loginHandler(){

        const data ={
            email:this.props.ema,
            password:this.props.pas
        }
        console.log(data);
        axios.post('login',data).then(response =>{
            
               
               if(response.data){
                console.log(response.data.success.token);
                    sessionStorage.setItem('userData',response.data.success);
                    this.props.onLoggedin()
                   
               }
        }).catch(error=>{
            if (error.response.status === 401) {
                console.log(error.response.data.error);
               // console.log('unauthorized, logging out ...');
               
            }
            return Promise.reject(error.response);
        });
    }

    onChnageHandler(e){
          //  this.setState({e.target.value : e.target.value});
          console.log(e.target.value);
    }
    componentDidMount()
    {
            if(sessionStorage.getItem("userData"))
                
                this.props.onLoggedin;
        
    }
    render()
    {


        if(this.props.loggedin){
                return (<Redirect to='/home' />)
        }
        if(sessionStorage.getItem("userData")){
            return (<Redirect to='/home' />)
        }
        return(
            <div className="login-form">
                 <h2 className="text-center">Log in</h2>       
                        <div className="form-group">
                            <input name="email" type="text" className="form-control" placeholder="Username" required="required"  onChange={(event) => this.props.onEmail(event.target.value)} />
                        </div>
                        <div className="form-group">
                            <input name="password" type="password" className="form-control" placeholder="Password"  required="required" onChange={(event) => this.props.onPassword(event.target.value)} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block" onClick={()=>this.loginHandler()}>Log in</button>
                        </div>
                        

            </div>
        );
    }
}
const MapStateToProps = state => {
    return{
            ema:state.login.email,
            pas:state.login.password,
            loggedin : true
    };
};

const MapDispatchToProps = dispatch =>{
        return{
            onEmail : (value) => dispatch({ type : actionType.ONEMAIL,value:value}),
            onPassword : (value) => dispatch({ type : actionType.ONPASSWORD,value:value}),
            onLoggedin : () => dispatch({ type : actionType.ONLOGGEDIN})

        };
};

export default connect(MapStateToProps,MapDispatchToProps)(Login);