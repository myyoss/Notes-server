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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNote = exports.deleteNote = exports.getNote = void 0;
const noteModel_1 = __importDefault(require("../models/noteModel"));
const getNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allNotes = yield noteModel_1.default.find({});
        if (!allNotes)
            throw new Error('no Note were found');
        res.send({ allNotes, ok: true });
    }
    catch (error) {
        console.log(error.error);
        res.send({ error: error.message });
    }
});
exports.getNote = getNote;
const deleteNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const noteToDelete = yield noteModel_1.default.deleteOne({ _id: id });
        const allNotes = yield noteModel_1.default.find({});
        res.send({ allNotes });
    }
    catch (error) {
        console.log(error.error);
        res.send({ error: error.message });
    }
});
exports.deleteNote = deleteNote;
const addNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { note } = req.body;
        let newNote = new noteModel_1.default(note);
        const result = yield newNote.save();
        res.send({ result, ok: true });
    }
    catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false });
    }
});
exports.addNote = addNote;
//# sourceMappingURL=noteCont.js.map