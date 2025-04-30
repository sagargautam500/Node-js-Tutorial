const mapServerItemToLocalItem = (serverItem) => ({
  Id: serverItem._id,
  Name: serverItem.task,
  Date: serverItem.date,
  Completed: serverItem.completed,
});

export const addItemToServer = async (task, date) => {
  const response = await fetch("http://localhost:3001/api/todos/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task, date }),
  });

  if (!response.ok) {
    throw new Error(`Server responded with status ${response.status}`);
  }
  const data = await response.json();
  return mapServerItemToLocalItem(data);
};

export const getTodoItems = async () => {
  const res = await fetch("http://localhost:3001/api/todos/getall");
  const itemsList = await res.json();
  // console.log('itemsList:',itemsList);
  return itemsList.map(mapServerItemToLocalItem);
};

export const markTodoItems = async (id) => {
  const res = await fetch(`http://localhost:3001/api/todos/completed/${id}`, {
    method: "PUT",
  });
  const item = await res.json();
  return mapServerItemToLocalItem(item);
};

export const deleteTodoItems = async (id) => {
  const res = await fetch(`http://localhost:3001/api/todos/delete/${id}`, {
    method: "DELETE",
  });
  const item = await res.json();
  return item._id;
};
