"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const player_model_1 = require("../models/player.model");
var express = require('express'), bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const playerRoutes = (0, express_1.Router)();
playerRoutes.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
playerRoutes.get('/test', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'All OKis'
    });
});
playerRoutes.post('/create', (req, resp) => {
    console.log('%cjugador.ts line:30 req.body', 'color: #007acc;', req.body);
    const player = {
        name: req.body.name,
        avatar: req.body.avatar,
        path: req.body.path,
        patePerro: req.body.patePerro,
        unos: req.body.unos,
    };
    //SAVE      
    player_model_1.Player.create(player).then(userDB => {
        resp.json({
            ok: true,
            mensaje: 'Jugador guardado exitosamente.',
            player: userDB
        });
    }).catch(err => {
        resp.json({
            ok: false,
            mensaje: 'Error: ' + err
        });
    });
});
playerRoutes.get('/getPlayers', (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const players = yield player_model_1.Player.find().exec();
    resp.json({
        ok: true,
        mensaje: 'Retornando todos los jugadores',
        players
    });
}));
playerRoutes.post('/updateUnos', (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('%cjugador.ts line:66 req', 'color: #007acc;', req.body);
    if (!req.body) {
        console.log('viene nulo el cuerpo ');
        resp.json({
            ok: false,
            mensaje: "Valor nulo el body",
            player: req.body
        });
        return;
    }
    const value = 1;
    const player = {
        unos: req.body.unos
    };
    player_model_1.Player.findById(req.body._id, function (err, docs) {
        console.log('%cjugador.ts line:98 seletedPlayer', 'color: #007acc;', docs);
        player.unos = docs.unos + 1;
        player_model_1.Player.findByIdAndUpdate(req.body._id, player, { new: true }, (err, userDB) => {
            if (err)
                throw err;
            if (!userDB) {
                return resp.json({
                    ok: false,
                    mensaje: "Error: No existe usuario con ese ID" + req.body._id
                });
            }
            resp.json({
                ok: true,
                mensaje: "Actualizado",
                player: userDB
            });
            console.log("Result : ", userDB.unos);
        });
    });
}));
//-------------------
playerRoutes.post('/updatePatePerros', (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body) {
        console.log('viene nulo el cuerpo ');
        resp.json({
            ok: false,
            mensaje: "Valor nulo el body",
            player: req.body
        });
        return;
    }
    const player = {
        patePerro: req.body.patePerro
    };
    player_model_1.Player.findById(req.body._id, function (err, docs) {
        player.patePerro = docs.patePerro + 1;
        player_model_1.Player.findByIdAndUpdate(req.body._id, player, { new: true }, (err, userDB) => {
            if (err)
                throw err;
            if (!userDB) {
                return resp.json({
                    ok: false,
                    mensaje: "Error: No existe usuario con ese ID, valide la info" + req.body._id
                });
            }
            resp.json({
                ok: true,
                mensaje: "Actualizado",
                player: userDB
            });
            console.log("Result : ", userDB.patePerro);
        });
    });
}));
exports.default = playerRoutes;
