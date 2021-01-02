import * as actionType from '../action';

const initialState={
    email:'',
    password:'',
    loggedin : true
}

const reducer = (state=initialState,action) =>{


    switch(action.type){

        case (actionType.ONLOGGEDIN):
        {
            
            
            return{
                ...state,
                loggedin :true
            }//to update array immutibly use conact instead of push
        }
        case (actionType.ONLOGGEDOUT):
        {
            sessionStorage.setItem("userData","");
            sessionStorage.clear();
            
            return{
                ...state,
                loggedin : false
            }//to update array immutibly use conact instead of push
        }
        case (actionType.ONEMAIL):
        {
            return{
                ...state,
                email : action.value
            }
        }
        case (actionType.ONPASSWORD):
        {
            return{
                ...state,
                password : action.value
            }
        }
    }
    
    
            return state;
}

export default reducer;