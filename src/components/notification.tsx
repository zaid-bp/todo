import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../features/store';

const Notification: React.FC = () => {
    const message = useSelector((state: RootState) => state.todo.message)
    const popUp = useSelector((state: RootState) => state.todo.popUp)
    return (
        <div className={`fixed w-full h-screen transition-all transform ease-linear ${popUp ? 'scale-100' : 'scale-0'} z-20`}>
            <div className={`absolute backdrop-blur-md bg-black/30 w-full h-full flex items-center justify-center`}>
                <div className={`px-20 py-5 ${message === 'deleted' ? 'bg-red-200' : 'bg-green-200'}`}>
                    <h5 className='text-black capitalize font-medium'>sucessfully {message}</h5>
                </div>
            </div>
        </div>
    )
}

export default Notification