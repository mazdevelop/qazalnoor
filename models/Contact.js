import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    fa: { type: String, required: true },
    en: { type: String, required: true }
  },
  email: { type: String, required: true },
  message: {
    fa: { type: String, required: true },
    en: { type: String, required: true }
  },
}, { timestamps: true });

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;
