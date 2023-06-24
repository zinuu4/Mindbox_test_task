import { useState, useEffect } from 'react';

import TodoForm from '../todoForm/TodoForm';
import TodoFilters from '../todoFilters/TodoFilters';

import './todoList.scss';

const TodoListItem = () => {

  const [todoList, setTodoList] = useState([]);
  const [totalTodos, setTotalTodos] = useState(0);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    calcTodoAmount();
  }, [todoList])

  const onToggleChecked1 = (id) => {
    setTodoList(todo => {
      return todo.map(item => {
        if (item.id === id) {
          return {...item, checked: !item.checked};
        }
        return item;
      })
    })
  }

  const addTodo = (todo) => {
    const newTodo = [todo, ...todoList];

    setTodoList(newTodo);
  }

  const calcTodoAmount = () => {
    setTotalTodos(todoList.length);
  }

  const clearTodos = () => {
    setTodoList(todo => 
      todo.filter(item => item.checked !== true)
    )
  }

  const filterTodos = (items, filter) => {
    switch (filter) {
      case 'Active':
        return items.filter(item => !item.checked);
      case 'Completed':
        return items.filter(item => item.checked);
      default:
        return items
    }
  }

  const onFilterSelect = (filter) => {
    setFilter(filter);
  }
  
  const todoListMap = () => {
    const visibleData = filterTodos(todoList, filter);
    return (
      visibleData.map((todo, i) => {
        const itemClass = todo.checked ? 'item complete' : 'item';
        return (
          <li key={i} className={itemClass}>
            
            <div className="checkbox-wrapper-12">
              <div className="cbx">
                <input 
                  id={i}
                  type="checkbox"
                  checked={todo.checked}
                  onChange={() => onToggleChecked1(todo.id)}/>
                <label htmlFor="cbx-12"></label>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                  <path d="M2 8.36364L6.23077 12L13 2"></path>
                </svg>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                  <filter id="goo-12">
                    <fegaussianblur in="SourceGraphic" stdDeviation="4" result="blur"></fegaussianblur>
                    <fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo-12"></fecolormatrix>
                    <feblend in="SourceGraphic" in2="goo-12"></feblend>
                  </filter>
                </defs>
              </svg>
          </div>
    
            <span className="item__task">{todo.todo}</span>
          </li>
        )
      })
    )
  }

  return (
    <>
    <TodoForm addTodo={addTodo}/>
    <ul>
      {todoListMap()}
    </ul>
    <TodoFilters filter={filter} onFilterSelect={onFilterSelect} todoAmount={totalTodos} clearTodos={clearTodos}/>
    </>
  )
}

export default TodoListItem;