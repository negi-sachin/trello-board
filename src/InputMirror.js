import React from 'react'
import {connect} from 'react-redux'
import Newboard from './components/Newboard.js'
import store from './store/store.js'
import Viewboards from './components/viewboards.js'

function InputMirror(props) {
    return (
        <div>
            
           <button onClick={props.newboard}>New board+</button>
           <button onClick={props.seeboards}>View Boards</button>
         
           {props.isnewboard?<Newboard store={store} />:''}
           {props.isseeboard?<Viewboards store={store}/>:''}
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        isnewboard:state.isnewboard,
      
        isseeboard:state.isseeboard,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
       

        newboard:(e)=>{
            e.preventDefault();
            dispatch({type:'new_board',text:true})
            console.log('New board request')
        },

        seeboards:(e)=>{
            e.preventDefault();
            dispatch({type:'see_boards',text:true})
            
        },
      
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InputMirror)