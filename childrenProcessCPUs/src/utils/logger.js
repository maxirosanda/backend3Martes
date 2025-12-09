import winston from 'winston'
/*
error: 0
warn: 1
info:2
http:3
verbose:4
debug:5
*/ 

const levels = {
    fatal:0,
    error:1,
    warning:2,
    info:3
}

const colors = {
    fatal :'red',
    error:'orange',
    warning:'yellow',
    info:'blue'
}

export const logger = winston.createLogger({
    levels,
    transports:[
        new winston.transports.Console({
            level:"info",
            format: winston.format.combine(
                winston.format.colorize(colors),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            filename:'./errors.log',
            level:"warn",
            format:winston.format.simple()
        })
    ]
})