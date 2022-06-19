import React from 'react'
import { connect } from 'react-redux'
import { loaldata } from './action'


export class Info extends React.Component{
   // this function get data to show in dashboards!!!
    componentDidMount(){
     this.props.loaldata()
   }

    render(){
        if(this.props.isfecthing){
          return <span>Testing here</span>
        }if(this.props.error){
           return <span>Error in application</span> 
        } 
        
        return <h1> Info of data here: {this.props.data.origin} </h1>
    }
     

} 


//create functions to connect below 
const mapStateProps = (state) => {
    return {
        isfecthing: state.ip.isfecthing,
        data: state.ip.data,
        error: state.ip.error

    }
}


const mapDispacth = (dispacth) => {
    return {
      loaldata: ()=> dispacth(loaldata())
    }
}

export default connect(mapStateProps,mapDispacth)(Info)