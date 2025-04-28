/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { ItemContext } from '../store/ContextItems';

function TodoItem() {
 const {todoName,todoDate,handleDeleteButton}=useContext(ItemContext)
  return (
    <div>
       <div className="row mar-bottom" >
          <div className="col-6 ">
           {todoName}
          </div>
          <div className="col-4 ">
            {todoDate}
          </div>
          <div className="col-2 ">
            <button type="button" className="btn btn-danger kg-btn"
            onClick={handleDeleteButton}
            ><MdDeleteForever /></button>
          </div>
        </div>
    </div>
  )
}

export default TodoItem