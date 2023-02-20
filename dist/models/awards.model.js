"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Award = void 0;
const mongoose_1 = require("mongoose");
const awardsSchema = new mongoose_1.Schema({
    id: { type: Number, unique: true },
    name: { type: String, required: [true, 'El nombre del premio es obligatorio.'], unique: true },
    description: { type: String, required: [true, 'Una descripción es obligatoria.'], unique: true },
    state: { type: Boolean },
    pathImage: { type: String }
});
// awardsSchema.pre('save',function(next){
//     // this.id = this.$inc('id', 1)
// });
exports.Award = (0, mongoose_1.model)('Award', awardsSchema);
