import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AllTodos from './allTodos';
import PendingTodos from './pendingTodos';
import CompletedTodo from './completedTodo';
function DisplayTodo() {
    
  return (
    <>
        <BrowserRouter>
                 <nav>
                    <ul className='flex text-gray-600 bg-white/30 justify-between px-3 rounded-full my-3'>
                        <li className=''>
                            <Link to="/">ALL</Link>
                        </li>
                        <li className=''>
                            <Link to="/pendingTodos">Pending</Link>
                        </li>
                        <li className=''>
                            <Link to="/completedTodo">Completed</Link>
                        </li>
                    </ul>
                 </nav>
            <Routes>
                <Route path="/" element={<AllTodos />} />
                <Route path="/pendingTodos" element={<PendingTodos />} />
                <Route path="/completedTodo" element={<CompletedTodo />} />
            </Routes>
        </BrowserRouter>


    </>
  )
}

export default DisplayTodo