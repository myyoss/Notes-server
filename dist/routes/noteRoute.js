"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const noteCont_1 = require("../controllers/noteCont");
router
    .post('/addNote', noteCont_1.addNote)
    .get('/getNote', noteCont_1.getNote)
    .post('/deleteNote', noteCont_1.deleteNote);
exports.default = router;
//# sourceMappingURL=noteRoute.js.map