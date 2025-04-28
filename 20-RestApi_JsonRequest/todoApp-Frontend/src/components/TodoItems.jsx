/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { ContextItem, ItemContext } from '../store/ContextItems'




function TodoItems() {

  const { listItems, handleDeleteButton } = useContext(ContextItem)
  return (
    <>

      <div className="todos-items">

        {listItems.map((item, index) => (
          <ItemContext.Provider
            key={index}
            value={{ todoName: item.Name, todoDate: item.Date, handleDeleteButton: () => handleDeleteButton(item) }}>

            <TodoItem />

          </ItemContext.Provider>

        ))}


      </div>
    </>
  )
}

export default TodoItems