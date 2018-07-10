//single reducer



import * as actionType from './action';

const initialState={
    counter: 0,
    results :[]
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
    if(action.type === actionType.ONSTORERESULT){
        return{
            ...state,
            results : state.results.concat({ id:new Date(),value:state.counter})
        }//to update array immutibly use conact instead of push
    }
    if(action.type === actionType.ONDELETERESULT){

        //  const id = 2;
        //   const newarray = state.results;
        //newarray.results.splice(id, value); //nomal way /first mthod
        //second method
        //filter(value,true/false)
      //  filer create new rray accept 2 para , result and true/false ,
       // true will create copy for prticular lelemeetiing boolean value if true delete else not
       //just like above
       // result => result.id !== action.elemntid - looping on each element and g
        const updatedarray = state.results.filter(result => result.id !== action.elemntid);
        return{
            ...state,
            results : updatedarray
        }
    }
        return state;
}

export default reducer;