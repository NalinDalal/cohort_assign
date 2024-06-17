import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
  userId: number,
  title: string,
  description: string,
) {
  new Promise((resolve, reject) => {
    client.query(
      `INSERT INTO TODOS (title,description,done) VALUES (
                '${title}',
                '${description}',
                '$false',
                '${userId}'
            )`,
    );
  });
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
  new Promise((resolve, reject) => {
    client.query(
      `UPDATE TODOS SET done='$true' WHERE id=${todoId}
                '$true',
            )`,
    );
  });
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
  new Promise((resolve, reject) => {
    client.query(`SELECT * FROM TODOS WHERE id=${userId}`);
  });
}

