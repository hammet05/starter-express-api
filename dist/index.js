"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const server_1 = __importDefault(require("./classes/server"));
const body_parser_1 = __importDefault(require("body-parser"));
const jugador_1 = __importDefault(require("./routes/jugador"));
const award_route_1 = __importDefault(require("./routes/award.route"));
const punishment_route_1 = __importDefault(require("./routes/punishment.route"));
const express = require('express');
const server = new server_1.default();
//body parser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
// rutas
server.app.use('/player', jugador_1.default);
server.app.use('/award', award_route_1.default);
server.app.use('/punish', punishment_route_1.default);
mongoose_1.default.connect('mongodb+srv://alejo:alejo_123@pateperro.rymlz1n.mongodb.net/test', {
    useNewUrlParser: true,
    // useCreateIndex: true,                    
})
    .then((res) => {
    console.log('%cindex.ts line:14 Base de Datos ONLINE', 'color: #007acc;');
})
    .catch((err) => {
    console.log(`Initial API Database connection error occured -`, err);
});
server.start(() => {
    console.log('Running server in port ' + server.port);
});
