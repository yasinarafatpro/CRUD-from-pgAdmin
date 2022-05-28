import app from './src/app'
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './src/Entity/User';
import { Product } from './src/Entity/Products';
import { Item } from './src/Entity/Item';
const http=require('http');
const port=4001;

const server=http.createServer(app);

const pgp = require('pg-promise')()
const connectionString="postgres://postgres:12@localhost:5432/testapi"

export const db=pgp(connectionString);

(
    async function(){
        await createConnection({
            type:'postgres',
            host:'localhost',
            port:5432,
            username:'postgres',
            password:'12',
            database:'testapi',
            entities:[User,Product,Item],
            synchronize:true,
            logging:false
        })
    }
)()
server.listen(port,()=>{
    console.log(`Running the server at port http://localhost:${port}`);
});