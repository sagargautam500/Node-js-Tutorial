import './App.css'
import AddTodo from './components/AddTodo'
import AppName from './components/AppName'
import TodoItems from './components/TodoItems'
import WelcomeMsg from './components/WelcomeMsg'
import ContextItems from './store/ContextItems'

function App() {
  return (
    <ContextItems>
      <center className='todo-container '>
        <AppName />
        <AddTodo />
        <WelcomeMsg />
        <TodoItems />
      </center>
    </ContextItems>
  )
}

export default App
