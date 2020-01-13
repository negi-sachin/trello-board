import React from 'react'
import {connect} from 'react-redux'
import Newboard from './components/Newboard.js'
import store from './store/store.js'
import Viewboards from './components/viewboards.js'

function InputMirror(props) {
    return (
        <>
        <div className='trello'>Trello Board</div>
        <div className='subheading'>Manage Your tasks</div>
        <div className='header'>
            
           <button onClick={props.newboard}>New board+</button>
           <button onClick={props.seeboards}>View Boards</button>
         
        </div>
        
        {props.isnewboard?<Newboard store={store} />:''}
           {props.isseeboard?<Viewboards store={store}/>:''}
        </>
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
           
        },

        seeboards:(e)=>{
            e.preventDefault();
            dispatch({type:'see_boards',text:true})
            
        },
      
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InputMirror)