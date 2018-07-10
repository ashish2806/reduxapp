import React, { Component } from 'react';
import './Login.css';
import axios from '../../axios';
import { Redirect } from 'react-router-dom';
class Login extends Component
{
    state={
        email:'',
        password:'',
        redirect : false
    }

    loginHandler(){

        const data ={
            email:this.state.email,
            password:this.state.password
        }
        axios.post('login',data).then(response =>{
            
               
               if(response.data){
                console.log(response.data.success.token);
                    sessionStorage.setItem('userData',response.data.success);
                    this.setState({ redirect : true});
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
    render()
    {


        if(this.state.redirect){
                return (<Redirect to='/home' />)
        }
        if(sessionStorage.getItem("userData")){
            return (<Redirect to='/home' />)
        }
        return(
            <div className="login-form">
                 <h2 className="text-center">Log in</h2>       
                        <div className="form-group">
                            <input name="email" type="text" className="form-control" placeholder="Username" required="required"  onChange={(event) => this.setState({[event.target.name]: event.target.value})} />
                        </div>
                        <div className="form-group">
                            <input name="password" type="password" className="form-control" placeholder="Password"  required="required" onChange={(event) => this.setState({[event.target.name]: event.target.value})} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block" onClick={()=>this.loginHandler()}>Log in</button>
                        </div>
                        

            </div>
        );
    }
}


export default Login;