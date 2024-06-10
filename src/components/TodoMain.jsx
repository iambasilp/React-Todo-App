import TodoInput from "./TodoInput"
import TodoList from "./TodoList"
TodoList
const TodoMain = () => {
  return (
    <div className="Todo container">
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default TodoMain
