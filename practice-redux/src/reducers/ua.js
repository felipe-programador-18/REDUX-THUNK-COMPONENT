//remerber this all structure about reducer that be turned inside folder reducers
//create another state working with api!!!

const INITIAL_STATE = {
    data: [],
    isfecthing: false,
    error: false
}

const ua =  (state= INITIAL_STATE, action) => {
   
    if(action.type === "LOAD_ANOTHER_REQUEST"){
       return {
        data: [] ,
        isfecthing: true,
        error: false
       }
    }else if (action.type === 'LOAD_ANOTHER_DATA'){
      return {
        data:action.data,
        isfecthing: false,
        error: false,
      }
    } else if( action.type === 'LOAD_ANOTHER_ERROR'){
      return {
        data: []   , 
        isfecthing: false,
        error: true
      }
    }
    return state
}


export default ua