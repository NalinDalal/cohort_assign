import { PrismaClient } from '@prisma/client';
import { string,boolean,number,z } from 'zod';   //since we are using zod to validate the input, we need to import it here

const prisma = new PrismaClient();

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
// down implementation
const TodoInputSchema = z.object({
    title: z.string(),
    description: z.string(),
    done: z.boolean(),
    id: z.number()
});

export async function createTodo(userId: number, title: string, description: string) {
    const todoData = TodoInputSchema.parse({ title, description, done: false, id: 0 });
    const todo = await prisma.Todo.create({
      data:{title: string,  //validate using zod as input type declared
      description: string,  //validate using zod as input type declared
      done: boolean,    //validate using zod as input type declared
      id: number    //validate using zod as input type declared
 } });
 return todo;
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
    const updateTodo = await prisma.Todo.update({
        where: {id: todoId},
        data: {done: true}
    });
    return updateTodo;
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
    const todos = await prisma.Todo.findMany({
        where:{userId: userId}
    });
    return todos;
}