const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: String,
    })

const News = mongoose.model('News', NewsSchema)

module.exports = News