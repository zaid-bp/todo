import { updatingTodo, cancleUpdate } from '../features/slices/todoSlice';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import cancle from '../assets/cancel.png'
import { RootState } from '../features/store';
const UpdateCard:React.FC = () =>  {
    const prevVal = useSelector((state:RootState)=>state.todo.prevValue)
    const dispatch = useDispatch();
    const [newValue, setNewValue] = useState(prevVal);
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      setNewValue(event.target.value); 
    };

    const handleUpdate=()=>{
        dispatch(updatingTodo(newValue))
      }

  return (
    <div className='fixed h-screen w-screen z-20'>
      <div className='absolute backdrop-blur-md bg-black/30 w-full h-full flex items-center justify-center'>
              <div className='bg-white flex flex-col items-end p-1'>
                <button className='' onClick={()=>dispatch(cancleUpdate())}><img src={cancle} alt="" /></button>
                <form className='p-5 flex flex-col space-y-3' onSubmit={(e)=>e.preventDefault()}>
                  <input className='border-b-2 outline-none' value={newValue} onChange={handleChange} type="text" placeholder='enter new value' />
                  <button className='bg-green-200 rounded-md px-3 py-1 font-bold' type="submit" onClick={()=>handleUpdate()}>save</button>
                </form>
              </div>
      </div>
    </div>
  )
}

export default UpdateCard
