import axios from 'axios';


const instance = axios.create({
    baseURL :'http://local.demo1.com/api'   
});

instance.defaults.headers.common['Authorization']='AUTH TOKN  44';
//instance.defaults.headers.common['Authorization']='AUTH TOKN 22';

export default instance;