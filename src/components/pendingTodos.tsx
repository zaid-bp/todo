import { useSelector } from 'react-redux'
import { RootState } from '../features/store'
import Input from './input';


function PendingTodos() {
    const penTodos=useSelector((state:RootState)=>state.todo)
    let pending=penTodos.todo
     return (
      <div className="rounded-2xl overflow-hidden">
    <table className="w-full">
                <thead className='bg-[#3d39aa] text-white py-7'>
                <tr className=''><th>Todo Title</th><th>Date/Time</th><th>Status</th><th>Actions</th></tr>
                </thead>
        
                <tbody>
      {
        pending.map((item, index)=>{
          return penTodos.status[index]? (null):(<Input key={index} item={item} id={index} status={'pending'}/>)
        })     
        
      }
                      </tbody>
            </table>
       </div>
    )
   }
  

export default PendingTodos