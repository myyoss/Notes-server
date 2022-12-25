
import noteModel from '../models/noteModel'

export const getNote = async (req: any, res: any) => {
    try {
        const allNotes = await noteModel.find({})
        if (!allNotes) throw new Error('no Note were found')
        res.send({ allNotes, ok: true })
    } catch (error) {
        console.log(error.error)
        res.send({ error: error.message })
    }
}

export const deleteNote = async (req: any, res: any) => {
    try {
        const { id } = req.body;
        const noteToDelete = await noteModel.deleteOne({ _id: id })
        const allNotes = await noteModel.find({})
        res.send({ allNotes })
    } catch (error) {
        console.log(error.error)
        res.send({ error: error.message })
    }
}

export const addNote = async (req, res) => {
    try {
        const { note } = req.body;
        let newNote = new noteModel(note)
        const result = await newNote.save()
        res.send({ result, ok: true })
    } catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false });
    }
}

