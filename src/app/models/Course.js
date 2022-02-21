const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const mongooseDelete = require('mongoose-delete');

const Course = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  videoId: { type: String, required: true },
  slug: { type: String, slug: 'name', unique: true },
  level: { type: String }
}, { timestamps: true });

// Course.pre('updateOne', function (doc) {
//   console.log(doc);
//   this.set({
//     slug: doc.slug.toLowerCase()
//       .replace(/ /g, '-')
//       .replace(/[^\w-]+/g, '')
//   });
// });

Course.plugin(mongooseDelete, {
  overrideMethods: 'all',
  deletedAt: true
});

module.exports = mongoose.model('course', Course, 'course');
