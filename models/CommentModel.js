const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    from: { type: String },
    commentValue: { type: String },
  },
  { timestamps: true } // 千萬不要加逗號...eslint bug...
);

module.exports = mongoose.model('Comment', commentSchema);
                              // collection name will be "comments"