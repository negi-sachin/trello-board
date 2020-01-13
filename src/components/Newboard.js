// 
import React from 'react'
import {connect} from 'react-redux'

var Props;
function Newboard(props) {
     Props=props
    return (
        <div>
            <h1>New board</h1>
            
           <form>
            <input value={props.boardname} onChange={props.inputboardname}></input>
            <button onClick={props.addboard}>Add board</button>

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
            console.log('addboard called')
e.preventDefault();
          
            dispatch({type:'addboard',text:{
                
                name:Props.boardname,
        Tasks:[]
            }})
        }

    }

}

// const mergeProps=(stateProps, dispatchProps, ownProps) => {
//   return{
//       save:dispatchProps.addboard(stateProps.boardname)
//   }
// }


export default connect(mapStateToProps, mapDispatchToProps)(Newboard)


//line 42 tasks[]
// {
//     taskname:'Task 2',
   
//     status:'Pending',
//     comments:[]
// }