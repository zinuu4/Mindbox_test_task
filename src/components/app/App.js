import TodoSearch from "../todoSearch/TodoSearch";
import TodoList from "../todoList/TodoList";
import TodoFilters from "../todoFilters/TodoFilters";

import '../../style/style.scss';
import './app.scss';

function App() {
  return (
    <div className="todo">
      <TodoSearch/>
      <TodoList/>
      <TodoFilters/>
    </div>
  );
}

export default App;