import { useSelector } from 'react-redux'
import { RootState } from '../features/store'
import Input from './input';
function AllTodos() {
    const todo = useSelector((state:RootState)=> state.todo)
    const value:string[] = todo.todo;

    return (
       
<div className="rounded-2xl overflow-hidden">
    <table className="w-full">
                <thead className='bg-[#3d39aa] text-white py-7'>
                <tr className='md:text-xl sm:text-md text-sm'><th>#</th><th>Todo Title</th><th>Date/Time</th><th>Status</th><th>Actions</th></tr>
                </thead>
        
                <tbody>
                    {
                        value.map((item: any, index: number) => {
                            return <Input key={index} item={item} id={index} status={'all todos'}/>
                        })
                    }
        
                </tbody>
            </table>
       </div>
  )
}

export default AllTodos