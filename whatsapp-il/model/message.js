import mongoose from 'mongoose'

const messageSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String
});

export default mongoose.model('message', messageSchema);