import mongoose from 'mongoose'

const roomSchema = mongoose.Schema({
  name: String,
  owner: String,
  timestamp: String
});

export default mongoose.model('room', roomSchema);