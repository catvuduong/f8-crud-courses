const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Course = new Schema({
  _id: { type: Number },
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  videoId: { type: String, required: true },
  slug: { type: String, slug: 'name', unique: true },
  level: { type: String }
}, {
  timestamps: true,
  _id: false
});

// Course.pre('updateOne', function (doc) {
//   console.log(doc);
//   this.set({
//     slug: doc.slug.toLowerCase()
//       .replace(/ /g, '-')
//       .replace(/[^\w-]+/g, '')
//   });
// });

//add plugin
mongoose.plugin(slug);

Course.plugin(AutoIncrement);

Course.plugin(mongooseDelete, {
  overrideMethods: 'all',
  deletedAt: true
});

module.exports = mongoose.model('course', Course, 'course');
