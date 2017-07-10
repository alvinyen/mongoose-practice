const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    name: { type: String },
    content: { type: String },
  },
  { timestamps: true } // 千萬不要加逗號...eslint bug...
);

module.exports = mongoose.model('Post', postSchema);
                            // collection name will be posts
