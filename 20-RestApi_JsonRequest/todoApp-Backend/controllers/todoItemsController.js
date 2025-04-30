const TodoItem = require("../models/todoItem");

exports.createTodoItems = async (req, res, next) => {
  // console.log("todoItems:", req.body);
  const { task, date } = req.body;
  const todoItem = new TodoItem({ task, date });
  await todoItem.save();
  res.status(201).json(todoItem);
};

exports.getTodoItems = async (req, res, next) => {
  const todoItems = await TodoItem.find();
  // console.log('all items are:',todoItems);
  res.json(todoItems);
};

exports.deleteTodoItems = async (req, res, next) => {
  const Id=req.params.Id;
  const deleteItem = await TodoItem.findByIdAndDelete(Id);
  res.status(201).json({_id:Id});
};

// exports.markTodoItems = async (req, res, next) => {
//   const Id=req.params.Id;
//   const todoItem = await TodoItem.findById(Id);
//   todoItem.completed=true;
//   await todoItem.save();
//   res.json(todoItem);
// };

exports.markTodoItems = async (req, res, next) => {
  const Id = req.params.Id;
  try {
    const todoItem = await TodoItem.findById(Id);
    if (!todoItem) {
      return res.status(404).json({ error: "Todo item not found" });
    }

    // Toggle completed value
    todoItem.completed = !todoItem.completed;

    await todoItem.save();
    res.json(todoItem);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
