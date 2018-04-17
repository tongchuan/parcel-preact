import axios from 'axios'
import Promise from 'promise'
export default {
  
    getList(data) {
      return new Promise((resolve, reject) => {
        axios.get('http://baidu.com/keep/info111',{
        // axios.get('http://127.0.0.1/keep/info111',{
          params:data,
        }).then((data)=>{
          resolve(data.data)
        }).catch((error)=>{
          // console.log('-=-----')
          // console.log(error)
          reject(error)
        })
      })
    }

}