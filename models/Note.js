const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Add a title'],
    unique: true,
    trim: true,
    maxlength: [50, "can't be more that 50 chars"],
  },
  description: {
    type: String,
    required: [true, 'Add a description'],
    unique: true,
    trim: true,
    maxlength: [500, "can't be more that 500 chars"],
  },
});

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);
