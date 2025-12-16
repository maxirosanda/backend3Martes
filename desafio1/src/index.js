import express from "express";
import mocksRouter from "./routes/mocks.router.js";
import cluster from "cluster";
import { cpus } from "os";

const app = express();

app.use(express.json());
app.use("/mocks", mocksRouter);


if(cluster.isPrimary){
    for(let i = 1 ; i <= cpus().length ; i++){
        cluster.fork()
    }
    cluster.on("exit", (worker) => {
        console.log(`Worker ${worker.process.pid} died`);
        setTimeout(() => cluster.fork(), 500);
    })

} else {
    app.listen(8080, () => {
        console.log("Server running on port 8080 , Process id: ", process.pid);
    });
}


