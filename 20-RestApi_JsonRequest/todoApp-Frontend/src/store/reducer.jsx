const reducer = (listItems, action) => {
  switch (action.type) {
    case "setInitialData": {
      return action.payload.items;
    }

    case "handleAddButton": {
      const { Id, Name, Date, Completed } = action.payload;
      const newItem = { Id, Name, Date, Completed };
      return [...listItems,newItem];
    }

    case "handleDeleteButton": {
      const { id } = action.payload;
      return listItems.filter((item) => item.Id !== id);
    }

    case "handleMarkComplete": {
      const updatedItems = listItems.map(item =>
        item.Id === action.payload.id
          ? { ...item, Completed: !item.Completed }
          : item
      );
      return updatedItems;
    }
    

    default:
      return listItems;
  }
};

export default reducer;
