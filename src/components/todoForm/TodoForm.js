import { useState } from 'react';

import './todoForm.scss';

const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addTodo({
      id: Math.floor(Math.random() * 10001),
      todo: inputValue,
      checked: false,
      animation: false
    })

    setInputValue('');
  }

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <>
      <div className='form__title'>What's the Plan for Today?</div>
      <form className='form' onSubmit={handleSubmit}>
        <input 
          className='form__input' 
          placeholder="What needs to be done?" 
          type="text"
          value={inputValue}
          onChange={handleInputValue}/>
        <button className='form__btn' type="submit">Add</button>
      </form>
    </>
  )
}

export default TodoForm;