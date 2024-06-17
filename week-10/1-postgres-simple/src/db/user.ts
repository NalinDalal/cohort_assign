import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    //my code start
    const result=await client.query(
        //created a table, with parametrs username, password, name
        `CREATE TABLE USERS(        
            username VARCHAR(255),
            password VARCHAR(255),
            name VARCHAR(255)
        )`
    )
    //my code end
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    // my code start
    const result=await client.query(
        `SELECT * FROM USERS WHERE id=${userId}`
    )
    const result2=await client.query(
        `SELECT * FROM USERS WHERE id='username'`
    )
    const result3=await client.query(
        `SELECT * FROM USERS WHERE id='password'`
    )
    const result4=await client.query(
        `SELECT * FROM USERS WHERE id='name'`
    )
    console.log(result)
    console.log(result2)
    console.log(result3)
    console.log(result4)
    //my code end
}
