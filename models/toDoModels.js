import { query } from "../data/index.cjs";

export async function getAllTodos() {
    const result = await query("SELECT * FROM todolist_database;");
    return result.rows;
  }
  
export async function getTodoByID(id) {
    const result = await query(`SELECT * FROM todolist_database WHERE id = $1;`, [id]);
    return result.rows[0];
  }

export async function createTodo({ todo, completed }) {
  const result = await query(`INSERT INTO todolist_database (todo, completed) VALUES ($1, $2) RETURNING *`, [todo, completed]);
  return result.rows;
}

export async function updateTodoByID(id) {
  const result = await query(`UPDATE todolist_database SET completed = NOT completed WHERE id = $1`, [id]);
  return result.rows[0];
}

export async function deleteTodoById(id) {
  const result = await query(
    `DELETE FROM todolist_database WHERE id = $1 RETURNING *`, [id])  
    return result.rows[0];
}