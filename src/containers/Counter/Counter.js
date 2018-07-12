import React, { Component } from 'react';
import * as actionType from '../../reducer/action';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
//import Routes from '../../router/router';

class Counter extends Component {
    

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
            this.setState({counter : 0})
            break;    
        }
    }
    logoutHandler(){
        alert(1);
        sessionStorage.setItem("userData","");
        sessionStorage.clear();
        //console.log(sessionStorage);
    }
    componentDidMount(){
        console.log(this.props.loggedin);
       
    }
    render () {
       // console.log.loggedin
        if(this.props.loggedin === false){
            return <Redirect to='login'/>
            
        }
        
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtracrCounterd}  />
                <CounterControl label="logout" clicked={this.logoutHandler}  />
                <hr />
                <button onClick={() =>this.props.onStoreresult(this.props.ctr)}>store result</button>
                <ul>
                    {this.props.storeResult.map(strkey=>{
                       return     <li style={{   }} key={strkey.id} onClick={()=> this.props.onDeleteresult(strkey.id)}>{strkey.value}</li>
                    })}
                    
                </ul>
            </div>
        );
    }
}
//connect itself is as functionn which returns hoc 

const MapStateToProps = state => {
    return{
            ctr : state.ctr.counter  ,
            storeResult : state.res.results,
            loggedin:state.login.loggedin
    };
};

const MapDispatchToProps = dispatch =>{
        return{
                onIncrementCounter : () => dispatch({ type : actionType.INCREMENT}),
                onDecrementCounter : () => dispatch({ type : actionType.DECREMENT}),
                onAddCounter : () => dispatch({ type : actionType.ADD,value:5}),
                onSubtracrCounter : () => dispatch({ type : actionType.SUBTRACT,value : 5}),
                onStoreresult : (value) => dispatch({ type : actionType.ONSTORERESULT,value:value}),
                onDeleteresult : (id) => dispatch({ type : actionType.ONDELETERESULT,elemntid : id})

        };
};
export default connect(MapStateToProps,MapDispatchToProps)(Counter);