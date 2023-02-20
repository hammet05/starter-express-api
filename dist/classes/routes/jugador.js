"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playerRoutes = (0, express_1.Router)();
playerRoutes.get('/test', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'All OK'
    });
});
exports.default = playerRoutes;
