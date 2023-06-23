import './todoFilters.scss';

const TodoFilters = () => {
  return (
    <div className="filters">

      <div className="filters__inform">2 items left</div>

      <div className='filters__btns'>
        <button className="filters__btn">All</button>
        <button className="filters__btn">Active</button>
        <button className="filters__btn">Completed</button>

        <button className="filters__btn">Clear completed</button>
      </div>

    </div>
  )
}

export default TodoFilters;