"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Punishment = void 0;
const mongoose_1 = require("mongoose");
const punishmentSchema = new mongoose_1.Schema({
    id: { type: Number, unique: true },
    name: { type: String, required: [true, 'El nombre del premio es obligatorio.'], unique: true },
    description: { type: String, required: [true, 'Una descripción es obligatoria.'], unique: true },
    state: { type: Boolean },
    pathImage: { type: String }
});
exports.Punishment = (0, mongoose_1.model)('Punishment', punishmentSchema);
