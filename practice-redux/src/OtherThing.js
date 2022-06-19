import React from 'react'
import { connect } from 'react-redux'
import action from './action'


export class Otherthing extends React.Component{
    // this functions inject api in dashboards!
    componentDidMount(){
      this.props.getAllApi()
    }
    
    render(){
        if(this.props.isfecthing){
            <span> Another api here </span>
        }if(this.props.error){
            <span> Error here now</span>
        }
        return <h2>Adding another api to testing with other dates!! {this.props.data['user-agent']} </h2>
    }
} 

const mapStateProps =(state) => {
   return  {
    isfecthing: state.ua.isfecthing,
    error : state.ua.error,
    data: state.ua.data
   }
}

const mapDispacth = (dispatch) => {
    return {
        getAllApi: () => dispatch(action.getAllApi())
    }
}

export default connect(mapStateProps, mapDispacth)(Otherthing)