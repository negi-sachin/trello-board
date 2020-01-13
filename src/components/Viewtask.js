import React from 'react'
import {connect} from 'react-redux'
function Viewtask(props) {
    const task=props.allBoards[props.boardnumber].Tasks[props.tasknumber]
    return (
        <div>
        {task.taskname}
        <p>Status:{task.status}</p>
        <select value={task.status} onChange={props.changestatus}>
            <option value='Pending'>Pending</option>
            <option value='Done'>Done</option>
            <option value='In Progress'>In Progress</option>
        </select>
        <form>
        <input value={props.commentval} onChange={props.comment} placeholder='comment here'></input>
        <button onClick={props.addcomment}>Add comment</button>

        </form>

        <p>{task.comments.map((comment,index)=>
            <p key={index}> {comment}</p>
        )}</p>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        allBoards:state.allBoards,
        boardnumber:state.boardnumber,
        tasknumber:state.tasknumber,
        commentval:state.commentval,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        changestatus:(e)=>{
            console.log('new status',e.target.value)
            dispatch({type:'change_status',text:e.target.value})
        },
        comment:(e)=>{
            dispatch({type:'comment',text:e.target.value})
        },
        addcomment:(e)=>{
            e.preventDefault();
            dispatch({type:'addcomment'})
        }
    }
    }

export default connect(mapStateToProps,mapDispatchToProps)( Viewtask)
