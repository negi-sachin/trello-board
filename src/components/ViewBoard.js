import React from 'react'
import {connect} from 'react-redux'
import Viewtask from './Viewtask'
import store from '../store/store.js'

function ViewBoard(props) {
    const board=props.allBoards[props.boardnumber]
   

    return <div className='viewboard'>
        <h3> {board.name} </h3>
        {props.tasknumber==null
        ?<div>
     <form className='vbform'>
          <input onChange={props.newtask} value={props.taskval} placeholder='Enter your task here ' autoFocus></input>
         <button onClick={props.addtask}>Add task</button>

     </form>

       <div>
       <p>Filter:</p>
        <select value={props.filter} onChange={props.selectfilter}>
            <option value='All'>All</option>
            <option value='Pending'>Pending</option>
            <option value='Done'>Done</option>
            <option value='In Progress'>In Progress</option>
        </select>
        </div>
            {props.filter=='All'?
            <div>
            {board.Tasks.map((task,index)=>{
              return(
                    <div key={index}  onClick={()=>props.viewtask(index)} className='vbtask'>
                   <p> {task.taskname} </p>  
                   <p> status:{task.status} </p>
                   <p>{task.comments.length} comments</p>
                   </div>
                    )
               
                   })
        }           

            </div>
:
<div>
            {board.Tasks.map((task,index)=>{
                if(task.status==props.filter)
              return(
                    <div key={index} style={{border:'.5px green solid'}} onClick={()=>props.viewtask(index)}>
                   <p> {task.taskname} </p>  
                   <p> status:{task.status} </p>
                   <p>{task.comments.length} comments</p>
                   </div>
                    )
               
                   })
        }           

            </div>

            }
       

        </div>
        :   <Viewtask store={store}/>
        }
    </div>
}

const mapStateToProps=(state)=>{
    return{
        allBoards:state.allBoards,
        boardnumber:state.boardnumber,
        tasknumber:state.tasknumber,
        taskval:state.taskval,
        filter:state.filter,
    }
}

const mapDispatchToProps=(dispatch)=>{
return{
    viewtask:(index)=>{
      
        dispatch({type:'tasknumber',text:index})
    },
    newtask:(e)=>{
        dispatch({type:'newtask',text:e.target.value})
    },
    addtask:(e)=>{
        e.preventDefault();
        dispatch({type:'addtask'})
    },
    selectfilter:(e)=>{
        dispatch({type:'selectfilter',text:e.target.value})
    }
}
}
export default connect(mapStateToProps,mapDispatchToProps)( ViewBoard)
