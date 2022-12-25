import express from 'express';
const router = express.Router();

import { addNote, getNote, deleteNote } from '../controllers/noteCont'

router
.post('/addNote',addNote)
.get('/getNote', getNote)
.post('/deleteNote', deleteNote)



export default router;

