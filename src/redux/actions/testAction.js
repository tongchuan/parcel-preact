import DB from '../../api/testDB'
import { testTypes as Types } from '../Types'
export function add(data){
  return (dispatch, getState)=>{
    DB.getList(data).then((data)=>{
      console.log(data)
    },(err)=>{
      console.log(err)
    })
    // dispatch({
    //   type:'111',
    //   data
    // })
  }
}

export function update(data){
  return (dispatch, getState)=>{
    dispatch({
      type:Types.TEST_UPDATE,
      data
    })
  }
}