import { removeTodo, updateTodo } from '../features/slices/todoSlice'
import { useDispatch } from 'react-redux';
import trash from '../assets/bin.png'
import edit from '../assets/edit.png'
interface index{
    index:number
}

const Actions:React.FC<index>=(index)=> {

    const id:number=index.index;
    const dispatch = useDispatch();
    
    
    return (
    <td>
        <button className='ml-auto m-2' onClick={()=>{
          dispatch(removeTodo(id));
        }}><img src={trash} alt='fali' className='w-10/12'/></button>
        <button onClick={()=>dispatch(updateTodo(id))}><img src={edit} className='w-10/12'/></button>
    </td>
  )
}

export default Actions