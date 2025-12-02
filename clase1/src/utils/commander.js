import { Command } from "commander";

const program = new Command();

program
    .option('-p, --port <port>','server port number',8080)
    .option('-d, --dev <dev>','',false)

program.parse();

 export const options = program.opts();