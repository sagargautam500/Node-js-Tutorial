/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { ContextItem } from '../store/ContextItems'
 
function WelcomeMsg() {
  const {listItems}=useContext(ContextItem)
  // console.log(listItems)
  return (
    <div>
          {listItems.length == 0 && <h1 className="text-center text-gray-600 text-lg my-6" >Enjoy your Day</h1>}

    </div>
  )
}

export default WelcomeMsg