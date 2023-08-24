import { useRef } from 'react'
import { searchTodos } from '../features/slices/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../features/store';
// import { RootState } from '../features/store';
function SearchTodo() {
  // clearTime---->used for calling dispatch just once
  var clearTime:number
  const dispatch=useDispatch()
  // const searchedList:string[]= useSelector((state:RootState)=>state.todo.searchedTodo)
  const searchRef= useRef<HTMLInputElement | null>(null)
  const store =useSelector((state:RootState)=>state.todo)
  const list =store.todo
  const statusArray=store.status;
const trueCount = statusArray.reduce((count, value) => count + (value ? 1 : 0), 0);
const comp=trueCount;
const pend=list.length-comp;
var noOfTodo
list.length?noOfTodo=`${list.length} Total, ${comp} Completed and ${pend} Pending`:noOfTodo= 'Nothing to Show'

  const handleChange=()=>{
    delay()
  }

  function delay() {
    const prevLenght:number = searchRef.current!.value.length
    
    if(clearTime){
      clearTimeout(clearTime)
    }
        clearTime= setTimeout(()=>{
        const newLenght:number = searchRef.current!.value.length
        if(newLenght === prevLenght){
          dispatch(searchTodos(searchRef.current!.value))
        }
        else{
          delay()
        }
      },1000)
    
  }

  return (
    <>
    <div className='sm:grid grid-cols-2 text-center'>
    <div className='sm:text-left text-center'>
      <h3 className='text-gray-800 sm:text-4xl font-medium text-xl'>Todo's</h3>
      <p>{noOfTodo}</p>
   </div>
   <div className='sm:flex justify-end'>
    <input type="text"  ref={searchRef} onChange={handleChange} className='focus:outline-none h-9 rounded-full my-auto placeholder-ml-1 px-3' placeholder='search'/>
  </div>
    </div>    
    </>
  )
}

export default SearchTodo

