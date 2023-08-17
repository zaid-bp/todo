import React from 'react'
import UpdateCard from './updateCard';
import Actions from './actions'
import { useDispatch, useSelector } from 'react-redux'
import { dragStart, dragEnd, drop } from '../features/slices/todoSlice';
import { RootState } from '../features/store';
import Card from './card';

const Input: React.FC <{item: string, id: number, status: string}>= ({item, id, status}) => {
    const store = useSelector((state:RootState)=>state.todo)
    const shouldUpdate=store.shouldUpdate;
    const updateItemId=store.updateItemId;
    const taskStatus= store.status;
    

    const dispatch = useDispatch();

    const handleDragStart=(id:number)=>{
      dispatch(dragStart(id))
    }

    const handleDragEnd=()=>{
      dispatch(dragEnd())

    }

    const handleDragOver=(event: React.DragEvent<HTMLDivElement>)=>{
      event.preventDefault()
    }

    const handleDrop=(event: React.DragEvent<HTMLDivElement>, id:number)=>{
      event.preventDefault()
      dispatch(drop(id))
    }
    return (
    shouldUpdate && updateItemId === id?(

      <UpdateCard id={id}/>

       ):(
       <tr className={`text-center ${ taskStatus[id] ? "bg-[#bcffb7]" : "bg-white"} border-b border-gray-300 sm:text-md text-sm`}
       draggable='true' onDragStart={()=>handleDragStart(id)} onDragEnd={handleDragEnd} onDragOver={handleDragOver} onDrop={(e)=>handleDrop(e, id)}>
                        <Card id={id} item={item} status={status} />
                        <Actions index={id}/>
      </tr>)
  )
}

export default Input