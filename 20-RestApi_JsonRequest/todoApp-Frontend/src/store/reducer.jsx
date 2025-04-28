const reducer = (listItems, action) => {

  if(action.type==="handleAddButton")
  {
    let Name=action.payload.Name
    let Date=action.payload.Date
  
    let newItm = {Name, Date }
      let newAdditem = [newItm, ...listItems]
      return newAdditem;
  }
  
  if(action.type==="handleDeleteButton")
  {
    let item=action.payload.item
    let RemainingItem = listItems.filter((i) => i !== item)
    return RemainingItem;
  }
}

export default reducer;

