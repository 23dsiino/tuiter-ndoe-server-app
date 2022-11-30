import express from 'express'
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from './controllers/tuits/tuits-controller.js';
import mongoose from "mongoose";
const DB_CONNECTION_STRING
    = 'mongodb+srv://dsiino:supersecretpassword@cluster0.k6fsdlr.mongodb.net' +
    '/?retryWrites=true&w=majority';

const CONNECTION_STRING = 'mongodb://localhost:27017/tuiter' || DB_CONNECTION_STRING;

//mongoose.connect('mongodb://localhost:27017/tuiter');
mongoose.connect(CONNECTION_STRING);


const app = express()

app.use(express.json());
app.use(cors())
HelloController(app)
UserController(app)
TuitsController(app)
app.listen(process.env.PORT || 4000);