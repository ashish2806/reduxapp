import * as actionType from '../action';

const initialState={
    counter: 0
}

const reducer = (state=initialState,action) =>{

    if(action.type === actionType.INCREMENT){
        return{
            ...state,
            counter : state.counter + 1
        }
    }
    if(action.type === actionType.DECREMENT){
        return{
            ...state,
            counter : state.counter - 1
        }
    }
    if(action.type === actionType.ADD){
        return{
            ...state,
            counter : state.counter + action.value
        }
    }
    if(action.type === actionType.SUBTRACT){
        return{
            ...state,
            counter : state.counter - action.value
        }
    }
    
    
        return state;
}

export default reducer;