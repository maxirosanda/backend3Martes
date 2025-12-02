import express from 'express'
import cluster from 'cluster'
import { cpus } from 'os'
import compression from 'express-compression'

const app = express()

app.use(compression({
    threshold: '10kb', 
    filter: (req, res) => {
        if (req.headers['x-no-compression']) {
            return false;
        }
        return compression.filter(req, res);
    },

}));



if(cluster.isPrimary){
    for(let i = 1 ; i < cpus().length ; i++){
        cluster.fork()
    }
}

app.listen(8080,()=>console.log("server in port 8080 process: " + process.pid))