import { Client } from 'pg'
//install dependency
//npm install --save-dev @types/pg

//imported the particular url from the config file
import { DB_URL } from './config';

export const client = new Client({
    connectionString: DB_URL
});
