import express from 'express';
const todoRouter = express.Router();

import { getAllTodos, getTodoByID, createTodo, updateTodoByID, deleteTodoById } from "../models/toDoModels.js";

todoRouter.get("/", async function (req, res){
    const allTodos = await getAllTodos();
    res.status(200).json(allTodos);
});

todoRouter.get("/:id", async function (req, res) {
    const todos = await getTodoByID(req.params.id);
    res.json({ success: true, payload: todos });
});

todoRouter.post("/", async function (req, res) {
    const newTodo = req.body;
    const result = await createTodo(newTodo);
    res.status(200).json(result);
})

todoRouter.patch("/:id", async function (req, res) {
    // const data = req.body;
    const updatedTodo = await updateTodoByID(req.params.id);
    res.json({ success: true, payload: updatedTodo });
})

todoRouter.delete("/:id", async function (req, res) {
    const result = await deleteTodoById(req.params.id);
    res.json({ success: true, payload: result });
  });

export default todoRouter;