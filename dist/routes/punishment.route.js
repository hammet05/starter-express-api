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
const punishment_model_1 = require("../models/punishment.model");
const punishmentRoutes = (0, express_1.Router)();
punishmentRoutes.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
punishmentRoutes.post('/create', (req, resp) => {
    const punishment = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        state: true,
        pathImage: req.body.pathImage
    };
    //SAVE      
    punishment_model_1.Punishment.create(punishment).then(punishmentDB => {
        resp.json({
            ok: true,
            mensaje: 'Castigo guardado exitosamente.',
            punishment: punishmentDB
        });
    }).catch(err => {
        resp.json({
            ok: false,
            mensaje: 'Error: ' + err
        });
    });
});
punishmentRoutes.get('/getPunishments', (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const punishments = yield punishment_model_1.Punishment.find().exec();
    resp.json({
        ok: true,
        mensaje: 'Retornando todos los castigos',
        punishments
    });
}));
exports.default = punishmentRoutes;
