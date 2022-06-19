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