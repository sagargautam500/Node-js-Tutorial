import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import ContextItems from "./store/ContextItems";

function App() {
  return (
    <ContextItems>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-200 py-12 px-4">
        <div className="w-5xl mx-auto rounded-3xl shadow-xl p-8 bg-gradient-to-br from-blue-100 via-cyan-100 to-green-100">
          <AppName />
          <AddTodo />
          <WelcomeMsg />
          <TodoItems />
        </div>
      </div>
    </ContextItems>
  );
}

export default App;
