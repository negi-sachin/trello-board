import React from 'react'
import {connect} from 'react-redux'
import store from '../store/store.js'
import Viewboard from './ViewBoard'

function Viewboards(props) {
    return (
        <div className='viewboards'>
          
            {props.boardnumber==null
                ?<div>
                {
                    props.allBoards.map((board,index)=>{
                return<div key={index}  onClick={()=>props.viewBoard(index)} className='board'>
                <h3>{board.name} [{board.Tasks.length}]</h3>
                
                {board.Tasks.length==0?'Click to add Tasks'
                :
                <div className='task'>{board.Tasks.map((task,index)=>{
                   
                   return <div key={index}>
                    <p>{task.taskname} <span style={{fontSize:'10px'}}>  [{task.status}] </span></p>
                  
                    </div>
                }
                )}</div>
                }
               

                </div>
            }
            )}
            </div>
            :<Viewboard store={store}/>
            }
                
        </div>
            
           

    )
}

const mapStateToProps=(state)=>{
    return{
        allBoards:state.allBoards,
        boardnumber:state.boardnumber,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        viewBoard:(index)=>{
          
            dispatch({type:'boardnumber',text:index})
        }

        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)( Viewboards)
