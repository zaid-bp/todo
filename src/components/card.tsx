import { useDispatch, useSelector } from 'react-redux'
import { setStatus } from '../features/slices/todoSlice';
import { RootState } from '../features/store';
import { useRef } from 'react';
interface CardProp{
    id:number;
    status:string;
    item:string;
}
const Card:React.FC<CardProp> = ({id, status, item}) => {
    const statusRef=useRef<HTMLInputElement | null>(null);
    const store = useSelector((state:RootState)=>state.todo)    
    const taskStatus= store.status;
    const time= store.timeCreated;
    const dispatch = useDispatch();
    let statusVal:string
    taskStatus[id]?statusVal='completed': statusVal='pending'

      const handleChange=(id:number)=>{
        let status:(boolean)=statusRef.current!.checked
        if(statusRef.current)
        dispatch(setStatus({id, status}))
    }
  
  return (
    <>
    {status !== 'completed' && status !== 'pending' &&  
    <td><input type="checkbox" className='' ref={statusRef} checked={taskStatus[id]? true: false} onChange={() =>handleChange(id)}/></td>}
    <td className=''>{item}</td>
    <td className='text-sm'><span>{time[id].currTime}</span><br/><span>{time[id].currDate}</span></td>
    <td className='text-sm w-1/5'>{statusVal}</td>
    </>
  )
}

export default Card
