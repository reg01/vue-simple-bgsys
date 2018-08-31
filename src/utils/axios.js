import axios from "axios";
import qs from "qs"
import { Message } from "element-ui";


const http = axios.create({
    baseURL:"",
    timeout:10000,
    responseType:true,
    withCredentials:true,
    headers:{
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

http.interceptors.request.use(
    config=>{
        if(config.method === "post"){
            config.data = qs.stringify(config.data)
        }
    },
    err=>{
        Message({
            showClose:true,
            Message:error,
            type:"err.data.error.message"
        })
        return Promise.reject(err.data.error.message)
    }
)
