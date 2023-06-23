import TodoListItem from "../todoListItem/TodoListItem";

const TodoList = () => {
  return (
    <ul className="todo-list">
      <TodoListItem/>
      <TodoListItem/>
      <TodoListItem/>
    </ul>
  )
}

export default TodoList;