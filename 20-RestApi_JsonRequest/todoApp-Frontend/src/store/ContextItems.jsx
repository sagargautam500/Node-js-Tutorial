import React, { useEffect, useReducer,useRef } from 'react'
import { createContext } from 'react'
import reducer from './reducer';
import { addItemToServer, deleteTodoItems, getTodoItems, markTodoItems} from '../../services/itemsService';

export const ContextItem = createContext();

export default  function ContextItems({ children }) {
  useEffect(() => {
    const fetchData = async () => {
      const Items = await getTodoItems();
      dispatch({ type: 'setInitialData', payload: { items: Items } });
    };
    fetchData();
  }, []);
  
  const [listItems, dispatch] = useReducer(reducer, [])
// console.log('listItems:',listItems)

  const text = useRef();
  const date = useRef();

  const handleAddButton = async (evet) => {
    evet.preventDefault()
    if (text !== '' && date !== '') {
      let Name = text.current.value;
      let Date = date.current.value;
      let Item= await addItemToServer(Name,Date);
      text.current.value = ''
      date.current.value = ''
      dispatch({
        type: 'handleAddButton',
        payload: Item,
      })
    }
  }

  const handleDeleteButton = async(Id) => {
      const id=await deleteTodoItems(Id);
    const newDeleteItem={
      type: "handleDeleteButton",
      payload: { id }
    }
    dispatch(newDeleteItem)
  }


const handleMarkComplete = async (id) => {
  try {
    const updatedItem = await markTodoItems(id);
    dispatch({ type: "handleMarkComplete", payload: { id: updatedItem.Id } });
  } catch (error) {
    console.error("Failed to mark complete:", error);
  }
};



  return (
    <>
      <ContextItem.Provider
        value={{ listItems, handleDeleteButton, handleAddButton,handleMarkComplete, text, date }}
      >
        {children}
      </ContextItem.Provider>
    </>
  )
}

export const ItemContext = createContext();



