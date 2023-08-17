import './App.css'
import AddTodoForm from './components/addTodo'
import DisplayTodo from './components/displayTodo'
// import NewSearch from './components/newSearch'
// import Message from './components/message'
import SeatchTodo from './components/searchTodo'
function App() {
  
  return (
    <div className='lg:w-3/6 h-screen flex flex-col mx-auto justify-center'>
    {/* <Message props='app'/> */}
    <AddTodoForm/>
    <div className='backdrop-blur-md bg-white/40 mt-5 rounded-md w-full p-3'>
      {/* <NewSearch/> */}
    <SeatchTodo/>
    <DisplayTodo/>
    </div>
    </div>
  )
}

export default App
