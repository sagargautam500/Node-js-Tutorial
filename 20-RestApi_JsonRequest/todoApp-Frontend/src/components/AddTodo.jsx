/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { ContextItem } from "../store/ContextItems";

function AddTodo() {
  const { handleAddButton, text, date } = useContext(ContextItem);

  return (
    <>
      <form onSubmit={handleAddButton}>
        <div className="row mar-top mar-bottom">
          <div className="col-6  ">
            <input
              ref={text}
              type="text"
              placeholder="Enter todo here"
              required
            />
          </div>
          <div className="col-4 ">
            <input ref={date} type="date" required />
          </div>
          <div className="col-2 ">
            <button className="btn btn-success kg-btn ">
              <IoMdAddCircle />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddTodo;
