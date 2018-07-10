const redux = require('redux');

const createStores = redux.createStore;

const initialState = {
    counter : 0
}
//redicer - step 2
const rootReducer = (state = initialState,action) =>{
    if(action.type === 'INCREMENT'){
        return{
            ...state,
            counter : state.counter + 1
        };
    }
    if(action.type === 'ADD'){
        return{
            ...state,
            counter : state.counter + action.payload
        };
    }
        return state
}
//step - 1
const store =  createStores(rootReducer);
console.log(store.getState());


//step -4 //suscription

store.subscribe(()=>{
    console.log('[dddd]',store.getState());
});
//step 3 action dispatch

store.dispatch({type:'INCREMENT'});
store.dispatch({type:'ADD',payload:10});

console.log(store.getState());







