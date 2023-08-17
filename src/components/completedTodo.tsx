import { useSelector } from 'react-redux'
import { RootState } from '../features/store'
import Input from './input';

function CompletedTodo() {
  const compTodos=useSelector((state:RootState)=>state.todo)
  let completed=compTodos.todo

  return (
    <div className="rounded-2xl overflow-hidden">
  <table className="w-full">
              <thead className='bg-[#3d39aa] text-white py-7'>
              <tr className=''><th>Todo Title</th><th>Date/Time</th><th>Status</th><th>Actions</th></tr>
              </thead>
      
              <tbody>
    {
  completed.map((item, index)=>{
    return compTodos.status[index]?(<Input key={index} item={item} id={index} status={'completed'}/>): null
      })     
      
    }
                    </tbody>
          </table>
     </div>
  )
}

export default CompletedTodo




