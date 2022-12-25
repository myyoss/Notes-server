import mongoose from "mongoose";


const NoteSchema = new mongoose.Schema({
  title:String,
  details:String,
  category:String

});

const noteModel = mongoose.model("notes", NoteSchema);
export default noteModel;
