import axios from 'axios'

//create functions to get api
//one verify all data another see about error and another work in success!!
export const loadallRequestDate = () => {
    return {
        type: 'LOAD_DATA_REQUEST'
    }
}

export const loadallError = () => {
    return {
        type: 'LOAD_DATA_ERROR'
    }
}

// this get all data api
export const loaldataSucess = (data) => {
    return {
        type: 'LOAD_DATA_SUCCESS',
        data: data
    }
}


//create funtoins to dispacth data
// both parameter receive one functions!!
// Practice about that!!!
export const loaldata = () => {
  return dispatch => {
    dispatch(loadallRequestDate())
    axios
    .get('http://httpbin.org/ip')
    .then(({data}) => dispatch(loaldataSucess(data)))
    .catch( () => dispatch(loadallError()) )
  }
}




/// now create another way to adding another api

export const loadaanotherRequest = () => {
    return{
        type: 'LOAD_ANOTHER_REQUEST'
    }
}

export const loadanotherError = () => {
    return {
        type:'LOAD_ANOTHER_ERROR'
    }
}

export const loadanotherDataSucess = (data) => {
    return {
        type: 'LOAD_ANOTHER_DATA',
        data: data
    }
}


export const getAllApi = (axios) => { 
   return dispatch => {
    dispatch(loadaanotherRequest() )
    axios
    .get("https://randomuser.me/api/?results=100")
    .then(({data}) => dispatch(loadanotherDataSucess(data)) )
    .catch(() =>  dispatch(loadanotherError) )
   }
}

export default {
    getAllApi: getAllApi.bind(null, axios)
}