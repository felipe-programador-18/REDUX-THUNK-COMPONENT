//remerber this all structure about reducer that be turned inside folder reducers


const INITIAL_STATE = {
    data: [],
    isfecthing: false,
    error: false
}

const ip =  (state= INITIAL_STATE, action) => {
   
    if(action.type === "LOAD_DATA_REQUEST"){
       return {
        data: [] ,
        isfecthing: true,
        error: false
       }
    }else if (action.type ==='LOAD_DATA_SUCCESS'){
      return {
        data:action.data,
        isfecthing: false,
        error: false,
      }
    } else if( action.type === 'LOAD_DATA_ERROR'){
      return {
        data: []   , 
        isfecthing: false,
        error: true
      }
    }
    return state
}


export default ip