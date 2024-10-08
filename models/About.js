import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema({
  description: {
    fa: { type: String, required: true },
    en: { type: String, required: true }
  },
}, { timestamps: true });

const About = mongoose.models.About || mongoose.model('About', aboutSchema);

export default About;
