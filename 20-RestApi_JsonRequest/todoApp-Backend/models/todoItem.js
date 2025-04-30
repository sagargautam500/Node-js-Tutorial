const { default: mongoose } = require("mongoose");

const todoItemSchema = mongoose.Schema(
  {
    task: { type: String, required: true },
    date: { type: Date, required: true },
    completed: { type: Boolean, default: false },
  },
  {
    Timestamp: true,
  }
);

module.exports = mongoose.model("TodoItem", todoItemSchema);
 