import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface todo{
    shouldUpdate:boolean;
    updateItemId:number;
    draggedId: number|null;
    todo:string[];
    searchedTodo:string[];
    status:boolean[];
    popUp:boolean;
    timeCreated:{currDate:string;currTime:string;}[];
    message: string;
    prevValue: string;

}
const initialState:todo={
    shouldUpdate:false,
    updateItemId:-1,
    draggedId:null,
    todo:[],
    searchedTodo:[],
    status:[],
    popUp:false,
    timeCreated:[],
    message: '',
    prevValue: '',
}


const todoSlice= createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodos(state, action:PayloadAction<string>){
            state.message = 'added'
            state.todo=[...state.todo, action.payload]
            state.status=[...state.status, false]
            state.searchedTodo=[...state.todo]
            state.popUp = true
        },
        removeTodo(state, action:PayloadAction<number>){
            state.message = 'deleted'
            const newList:string[]= state.todo.filter((_todo, index)=>{
                return index!==action.payload
            })
            state.todo = newList;   
            state.searchedTodo=[...state.todo]
            // use slice method for managing date and time and todo
            state.timeCreated.splice(action.payload,1)
            state.status.splice(action.payload,1)
            state.popUp = true
        },

        updateTodo(state, action:PayloadAction<number>){
            state.updateItemId = action.payload
            state.prevValue = state.todo[action.payload]
            state.shouldUpdate=true
        },
        
        updatingTodo(state, action:PayloadAction<string>){
            state.message = 'updated'
            state.todo[state.updateItemId]=action.payload
            // state.todo[action.payload.id]=action.payload.newValue;
            state.shouldUpdate=false
            state.popUp = true
        },

        cancleUpdate(state){
            state.shouldUpdate=false
        },

        searchTodos(state, action:PayloadAction<string>){
           const searchedList= state.todo.filter((item)=>{
                return item.includes(action.payload)
            })
            if(action.payload){
                state.todo=searchedList;
            }
            else{
                state.todo=state.searchedTodo
            }
            
        },

        setStatus(state, action:PayloadAction<{id:number; status:boolean;}>){
            state.status[action.payload.id]=action.payload.status;
        
        },

        setDate(state, action:PayloadAction<{currDate:string; currTime:string;}>){
            state.timeCreated.push(action.payload)
        },

        dragStart(state, action:PayloadAction<number>){
            state.draggedId=action.payload
        },

        dragEnd(state){
            state.draggedId=null
        },

        drop(state, action){
            if (state.draggedId !== null) {
                const updatedTodo = [...state.todo];
                const updatedStatus = [...state.status];
                const updatedTimeStamp = [...state.timeCreated]
                const draggedItem = updatedTodo[state.draggedId];
                const draggedStatus = updatedStatus[state.draggedId];
                const draggedTimeStamp = updatedTimeStamp[state.draggedId]
          
                // Remove the item from the old index
                updatedTodo.splice(state.draggedId, 1);
                updatedStatus.splice(state.draggedId, 1);
                updatedTimeStamp.splice(state.draggedId, 1);
                
                // Insert the dragged item at the new index
                updatedTodo.splice(action.payload, 0, draggedItem);
                updatedStatus.splice(action.payload, 0, draggedStatus);
                updatedTimeStamp.splice(action.payload, 0, draggedTimeStamp);
          
                // console.log(updatedItems);
                
                state.todo=updatedTodo;
                state.status=updatedStatus;
                state.timeCreated = updatedTimeStamp

                state.draggedId=null;
              }
            
        }, 
        closePopUp(state){
            state.popUp=false
        },
        openPopUp(state){
            state.popUp=true
        },
        

    }
})
export default todoSlice.reducer
export const {addTodos, removeTodo, updateTodo, updatingTodo, searchTodos, setStatus, setDate, cancleUpdate, dragStart, dragEnd, drop, openPopUp, closePopUp} = todoSlice.actions