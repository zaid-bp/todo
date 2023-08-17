import { updatingTodo, cancleUpdate } from '../features/slices/todoSlice';
import { useDispatch } from 'react-redux'
import { useRef } from 'react';

const UpdateCard:React.FC<{id:number}> = (id) =>  {
    const dispatch = useDispatch();
    const updateInputRef=useRef<HTMLInputElement | null>(null);

    const handleUpdate=(id:number)=>{
        const newValue=updateInputRef.current!.value
        if(updateInputRef.current!.value)
        dispatch(updatingTodo({newValue, id}))
      }
  return (
       <tr className='py-2'>
       <td></td>
        <td><input type='text' className='w w-40 sm:w-7/12' ref={updateInputRef}/></td>
        <td className='hidden sm:block'></td><td className='hidden sm:block'></td>
        <td className='flex sm:ml-auto w-auto sm:w-32 text-sm sm:text-md'>
        <button className='ml-auto bg-white px-2 rounded-md mr-2 font-serif' onClick={()=>dispatch(cancleUpdate())}>cancle</button>
          <button className=' bg-white px-2 rounded-md mr-2 font-serif' onClick={()=>handleUpdate(id.id)}>save</button>
        </td>
        
       </tr>
  )
}

export default UpdateCard
