"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const mongoose_1 = require("mongoose");
const playerSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, 'El nombre es obligatorio.'], unique: true },
    avatar: { type: String, required: [true, 'Escoge un avatar.'] },
    path: { type: String },
    patePerro: { type: Number },
    unos: { type: Number }
});
exports.Player = (0, mongoose_1.model)('Player', playerSchema);
