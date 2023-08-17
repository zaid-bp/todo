import {useRef} from 'react'
import { useDispatch } from 'react-redux';
import { addTodos, setDate } from '../features/slices/todoSlice';

function AddTodoForm() {
    const todoRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch();
   
    const checkTime=()=>{
      const date=new Date()
      const currDate=`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
      const currTime=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      return {currDate, currTime}
    }
    
    const addTodo = () => {
      
      if (todoRef.current?.value) {
        const todo = todoRef.current.value;
        dispatch(addTodos(todo))
        todoRef.current.value='';
        
        // calling checkTime
        const dateAndTime=checkTime();
          // dispatching checkTime
          dispatch(setDate(dateAndTime));
        }
      };
      
      return (
    <>
        <form onSubmit={(e)=>e.preventDefault()} className='p-4 rounded-md w-full backdrop-blur-sm bg-white/40'>
          <label className='bg-white text-lg rounded-md p-1 w-full sm:h-12 flex items-center justify-between' htmlFor='add'>
          <input id="add" type='text' placeholder='Add New Todo...' className='placeholder-gray-500 placeholder-color-900 focus:outline-none' ref={todoRef}/>
          <button type='submit' className='text-white bg-slate-500 px-2 py-1 rounded-md' onClick={addTodo}>+</button>
          </label>
        </form>
    </>
  )
}

export default AddTodoForm