import React, { useReducer,useRef } from 'react'
import { createContext } from 'react'
import reducer from './reducer';

export const ContextItem = createContext();

export default function ContextItems({ children }) {

  let initialState = [{
    Name: "Milk",
    Date: "10/21/2024"
  },
  {
    Name: "Book",
    Date: "10/22/2024"
  },]

  const [listItems, dispatch] = useReducer(reducer, initialState)


  const text = useRef();
  const date = useRef();

  const handleAddButton = (evet) => {
    evet.preventDefault()
    if (text !== '' && date !== '') {
      let Name = text.current.value;
      let Date = date.current.value;
      text.current.value = ''
      date.current.value = ''
      dispatch({
        type: 'handleAddButton',
        payload: { Name, Date },
      })
    }
  }

  const handleDeleteButton = (item) => {
    const newDeleteItem={
      type: "handleDeleteButton",
      payload: { item }
    }
    dispatch(newDeleteItem)
  }


  return (
    <>
      <ContextItem.Provider
        value={{ listItems, handleDeleteButton, handleAddButton, text, date }}
      >
        {children}
      </ContextItem.Provider>
    </>
  )
}

export const ItemContext = createContext();



