import mongoose,{ ConnectOptions } from "mongoose";
import Server from "./classes/server";
import bodyParser from "body-parser";

import playerRoutes from "./routes/jugador";
import awardsRoutes from "./routes/award.route";
import punishmentRoutes from "./routes/punishment.route";

const express = require('express');
const server = new Server();

//body parser
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());


// rutas
server.app.use('/player',playerRoutes);
server.app.use('/award', awardsRoutes);
server.app.use('/punish', punishmentRoutes);


mongoose.connect('mongodb+srv://alejo:alejo_123@pateperro.rymlz1n.mongodb.net/test', {
                    useNewUrlParser: true,                  
                    // useCreateIndex: true,                    
                  } as ConnectOptions)
                  .then((res) => {
                    console.log('%cindex.ts line:14 Base de Datos ONLINE', 'color: #007acc;');
                  })
                  .catch((err) => {
                    console.log(
                      `Initial API Database connection error occured -`,
                      err
                    );
                  });

server.start(()=>{
    console.log('Running server in port::: ' + server.port );
});