"use strict";
const res = require('express/lib/response');
const req = require('express/lib/request');
const prueba2 = (req, res) => {
    res.status(200).json({
        ok: true,
        status: 200,
        mensaje: 'pasjdas'
    });
};
module.exports = { prueba2 };
