import './todoSearch.scss';

const TodoSearch = () => {
  return (
    <>
      <div className='form__title'>What's the Plan for Today?</div>
      <form className='form'>
        <input className='form__input' placeholder="What needs to be done?" type="text"/>
        <button className='form__btn' type="submit">Add</button>
      </form>
    </>
  )
}

export default TodoSearch;