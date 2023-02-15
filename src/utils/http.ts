
import axios, {type AxiosRequestConfig} from 'axios'
// axios.defaults.baseURL = `http://127.0.0.1:5173`
//请求拦截器
axios.interceptors.request.use((config: AxiosRequestConfig | any)=>config);
//响应拦截器
axios.interceptors.response.use(res=>{ 
    return res
    
},err=>{ 
    return Promise.reject(err)
})
interface  Ihttp{
    get<T>(url:string, params?: unknown): Promise<T>;
}
const http: Ihttp = {
   
    get(url, params){ 
        return new Promise((resolve, reject) =>{
            axios.get(url, {params})
            .then(res=>{
                resolve(res.data)
            })
            .catch(err=>{
                reject(err)
            })
        })
    }
}
export default http