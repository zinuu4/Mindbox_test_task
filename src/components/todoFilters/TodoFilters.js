import './todoFilters.scss';

const TodoFilters = (props) => {
  const handleClearTodos = () => {
    props.clearTodos();
  }

  const buttonsData = [
    {name: '', label: 'All'},
    {name: 'Active', label: 'Active'},
    {name: 'Completed', label: 'Completed'}
  ];

  const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;
    const clazz = active ? 'filters__btn active' : 'filters__btn';

    return (
      <button 
          className={clazz}
          type='button'
          key={name}
          onClick={() => props.onFilterSelect(name)}>
          {label}
      </button>
    )
  })

  return (
    <>
      <div className="filters">

        <div className="filters__inform">{props.todoAmount} items left</div>

        <div className='filters__btns'>
          {buttons}

          <button className="filters__btn" onClick={handleClearTodos}>Clear completed</button>
        </div>

      </div>
    </>
  )
}

export default TodoFilters;