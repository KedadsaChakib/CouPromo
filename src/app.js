import express from 'express';
import helmet from 'helmet';
import "./core/db.js";
import router from './routers/index.js';
import crypto from 'crypto';


const app = express();
const port = 8000;

app.use(express.json());
app.use(helmet());

app.get('/',(req,res) => {
    res.send("hello word");
})

app.use('/', router);


app.listen(port, ()=> {
    console.log(`Server listening on port ${port}`);
})
