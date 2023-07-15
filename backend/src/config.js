import {config} from "dotenv";
config();

export default {
    host: process.env.HOST,
    database : process.env.DBNAME,
    user : process.env.USUARIO,
    password : process.env.PASSWORD
}