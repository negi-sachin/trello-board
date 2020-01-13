import React from 'react'
import {connect} from 'react-redux'
import store from '../store/store.js'
import Viewboard from './ViewBoard'

function Viewboards(props) {
    return (
        <div>
            <h4>All boards here</h4>
            {props.boardnumber==null
                ?<div>
                {
                    props.allBoards.map((board,index)=>{
                return<div key={index} style={{border:'1px red solid'}} onClick={()=>props.viewBoard(index)}>
                <h3>{board.name}</h3>
                
                {board.Tasks.length==0?'No Task Found'
                :
                <div>{board.Tasks.map((task,index)=>{
                   
                   return <div key={index}>
                    <p>{task.taskname}</p>
                  
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
            console.log('view board',index)
            dispatch({type:'boardnumber',text:index})
        }

        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)( Viewboards)
