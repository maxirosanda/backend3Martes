import express from 'express'
import cluster from 'cluster'
import { cpus } from 'os'
import compression from 'express-compression'
import { logger } from './utils/logger.js'
import { faker } from '@faker-js/faker';


const app = express()

const users = []

app.use(compression({
    threshold: '10kb', 
    filter: (req, res) => {
        if (req.headers['x-no-compression']) {
            return false;
        }
        return compression.filter(req, res);
    },

}));

app.get('/operacionsencilla', (req, res) => {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      sum += i;
    }
    res.send({ sum });
  });
  
  app.get('/operacioncompleja', (req, res) => {
    let sum = 0;
    for (let i = 0; i < 5e8; i++) {
      sum += i;
    }
    res.send({ sum });
  });

  app.post('/register', (req,res)=>{
    const { first_name, last_name, email, password } = req.body;

    console.log(`Registering ${first_name} ${last_name} email: ${email} and pwd: ${password}`);

    if (!first_name || !last_name || !email || !password)
      return res.status(400).send({ status: "error", error: "Incomplete values" });
  
    const exists = users.find(user => user.email === email)
    if (exists)
      return res.status(400).send({ status: "error", error: "User already exists" });
  
    const user = {
      first_name,
      last_name,
      email,
      password,
    };
  
    users.push(user)
    res.send({ status: "success", message: "Registered" });
  })

  app.post('/login',(req,res)=>{

    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).send({ status: "error", error: "Incomplete values" });
  
    const user = users.find(user => user.email === email)
    if (!user)
      return res.status(404).send({ status: "error", error: "User not found" });
  

    console.log(`El ingreso de ${email} fue satisfactorio`);
    res.send({ status: "success", message: "logged in" });
  })

  app.get('/test-user',(req,res)=>{
    const first_name = faker.person.firstName()
    const last_name = faker.person.lastName()
    const email = faker.internet.email()
    const password = faker.internet.password()
    res.json({first_name,last_name,email,password})
  })
  


if(cluster.isPrimary){
    for(let i = 1 ; i < cpus().length ; i++){
        cluster.fork()
    }
}

app.listen(8080,()=>logger.info("server in port 8080 process: " + process.pid))

