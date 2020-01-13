// 
import React from 'react'
import {connect} from 'react-redux'

var Props;
function Newboard(props) {
     Props=props
    return (
        <div>
            <h1 className='newboard'>New board :D</h1>
            
           <form className='newboardform'>
            <input value={props.boardname} onChange={props.inputboardname} placeholder='Enter your Board name' autoFocus></input>
            <button onClick={props.addboard} className='something'>+</button>

           </form>
            
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        boardname:state.boardname,
        
    }
}

const mapDispatchToProps=(dispatch)=>{

    return{
        inputboardname:(e)=>{
            dispatch({type:'input_board_name',text:e.target.value})
        },
        addboard:(e)=>{
            
e.preventDefault();
          
            dispatch({type:'addboard',text:{
                
                name:Props.boardname,
        Tasks:[]
            }})
        }

    }

}



export default connect(mapStateToProps, mapDispatchToProps)(Newboard)

