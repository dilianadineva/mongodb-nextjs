import connectToDb from '../../../utils/connectToDb';
import Note from '../../../models/Note';

connectToDb();

export default async function (req, res) {
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        const notes = await Note.find({});
        res.status(200).json({ success: true, data: notes });
      } catch (error) {
        res.status(400).json({ success: false, data: error });
      }
      break;
    case 'POST':
      try {
        const note = await Note.create(req.body);
        res.status(201).json({ success: true, data: note });
      } catch (error) {
        res.status(400).json({ success: false, data: error });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
