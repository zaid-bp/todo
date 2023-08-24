import './App.css'
import UpdateCard from './components/updateCard'
import Notification from './components/notification'
import AddTodoForm from './components/addTodo'
import DisplayTodo from './components/displayTodo'
import SeatchTodo from './components/searchTodo'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './features/store'
import { closePopUp } from './features/slices/todoSlice'
function App() {
  const dispatch = useDispatch()
  const store = useSelector((state: RootState) => state.todo);
  const popUp = store.popUp;
  const shouldUpdate =store.shouldUpdate;
  useEffect(() => {
    if (!popUp)
      return
    setTimeout(() => {
      dispatch(closePopUp())
    }, 1000);
  }, [popUp])

  return (
    <>
    
     {shouldUpdate && <UpdateCard />}

       <Notification />
       <div className='lg:w-3/6 h-full mx-auto flex flex-col py-5'>
         <AddTodoForm />
         <div className='backdrop-blur-md bg-white/40 mt-5 rounded-md w-full p-3'>
           <SeatchTodo />
           <DisplayTodo />
         </div>
       </div>
     </>
  )
}

export default App
