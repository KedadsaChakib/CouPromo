import mongoose from 'mongoose';
import { init } from "./init.js";
const username = "islam";
const password = "islam";

const dbURI = `mongodb+srv://${username}:${password}@cluster0.hi9iw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const promise = mongoose.connect(dbURI);

promise.then(()=>{
    init().then(()=>{
        console.log("Initiallization complete");
    })
}).catch(err=>{console.error(err.message);

})
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDb");
});

mongoose.connection.on("error",
    err => console.log("Connection error" + err.message));

mongoose.connection.on("disconnected",
    () => console.log("Connection disconnected"));

process.on("SIGINT", () => {
    mongoose.connection.close(() => {
        console.log("Connection stoped");
        process.exit(0);
    });
});