import { createStore} from 'redux'
const intialsate={
    boardname:'',
    isnewboard:false,
  
    isseeboard:false,
     boardnumber:null,
     tasknumber:null,
     commentval:'',
     taskval:'',
     filter:'All',
    allBoards:[{
        name:'DEMO_BOARD',
        Tasks:[{
            taskname:'TASK 1',
            
            status:'Pending',
            comments:['NICE','GREAT']
        },
        {
          taskname:'TASK 2',
          
          status:'Done',
          comments:['Good']
      },
      {
        taskname:'TASK 3',
        
        status:'In Progress',
        comments:[]
    }]
    }]
}
const reducer=(state=intialsate,action)=>{
 


  switch(action.type){
   
      case 'new_board':    
       return Object.assign({},state,{isnewboard:!state.isnewboard,isseeboard:false,})
      case 'input_board_name':
        return Object.assign({},state,{boardname:action.text})  
      case 'see_boards'  :
        return Object.assign({},state,{isseeboard:true, isnewboard:false, tasknumber:null, boardnumber:null,})  
     
       case 'addboard':
        return Object.assign({},state,{boardname:'',allBoards:[...state.allBoards,action.text], isnewboard:false,isseeboard:true,
        boardnumber:null, tasknumber:null,})  

        case 'boardnumber'  :
            return Object.assign({},state,{ boardnumber:action.text,})
        case 'tasknumber'  :
              return Object.assign({},state,{ tasknumber:action.text})    
        case 'comment'  :
                return Object.assign({},state,{ commentval:action.text})  
      case 'newtask':
        return Object.assign({},state,{ taskval:action.text})

      case'selectfilter':
      return Object.assign({},state,{ filter:action.text})
   case 'addtask':
        return Object.assign({},state,{
          taskval:'',
          allBoards:state.allBoards.map((board,index)=>{
          if(index==state.boardnumber){
            return Object.assign({},board,{
           
              name:board.name,
              Tasks:[...board.Tasks,{ taskname:state.taskval,
          
              status:'Pending',
              comments:[]
            }]
          })
        }
          return board
        }
              )
    })  
          
           

       case 'addcomment':
        return Object.assign({},state,{commentval:'', allBoards:state.allBoards.map((board,index)=>{
          if(index===state.boardnumber){
          
            return Object.assign({},board,{
              name:board.name,
              Tasks:board.Tasks.map((task,index)=>{
                if(index===state.tasknumber)
                return Object.assign({},task,{ comments:[...task.comments,state.commentval]})  
                else return task 
              })
             
            })   
          }
          return board
          
 
            })
           
           })   
 
         case 'change_status':
         return Object.assign({},state,{ allBoards:state.allBoards.map((board,index)=>{
         if(index==state.boardnumber){
        
           return Object.assign({},board,{
             name:board.name,
             Tasks:board.Tasks.map((task,index)=>{
               if(index===state.tasknumber)
               return Object.assign({},task,{ status:action.text})  
               else return task 
             })
            
           })   
         }
         return board
         

           })
          
          })   

        
  
 

       default:return state   
  }
  
}

const store=createStore(reducer,intialsate,window.devToolsExtension && window.devToolsExtension())

export default store


// return Object.assign({},state,{ allBoards:state.allBoards.map((board,index)=>{
//   if(index==state.boardnumber){
//    console.log(board.name)
//     return Object.assign({},board,{
//       name:board.name,
//       Tasks:board.Tasks.map((task,index)=>{
//         if(index==state.tasknumber)
//         return Object.assign({},task,{ status:action.text})  
//         else return task 
//       })
     
//     })   
//   }
//   return board
  

//     })
   
//    })   