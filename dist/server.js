"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const noteRoute_1 = __importDefault(require("./routes/noteRoute"));
const app = (0, express_1.default)();
require('dotenv').config();
const port = process.env.PORT || 4005;
app.use(express_1.default.static('public/build'));
app.use(express_1.default.json());
const url = process.env.MONGODB_URI;
mongoose_1.default.connect(url)
    .then(res => {
    console.log("connected to Mongoose");
})
    .catch((err) => {
    console.log("Failed to connect to Mongoose:");
    console.log(err.message);
});
app.use('/api/notes', noteRoute_1.default);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map