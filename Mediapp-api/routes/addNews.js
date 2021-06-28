const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');

const News = require('../models/News')

// router.get('/',(req,res) => {
//   let headerInfo = req.headers.authorization;
//     console.log(headerInfo);
//   if(headerInfo){
//     let token = headerInfo.replace('Bearer ', '');
//     let result = jwt.verify(token, 'secret1234');
//     Task.find()
//     .then(data => res.json(data))
//     .catch(err => res.status(500).json(err))
//   }
//   else{
//     res.send(null);
//   }
// })

// router.get('/:id', (req, res) => {
  
//   const { id } = req.params

//   Task.findById(id)
//     .then(data => res.json(data))
//     .catch(err => res.status(500).json(err))
// })

// router.delete('/:id', (req, res) => {
//   // const { id } = req.params
//   const id = req.params.id

//   Task.findByIdAndDelete(id)
//     .then(data => res.json(data))
//     .catch(err => res.status(500).json(err))
// })

router.post('/', (req, res) => {
  const { title, description, url, urlToImage, publishedAt } = req.body
  //Task.insertMany
  //or 
  //Task.create
  const news = new News()
  
  news.title = title
  news.description = description
  news.description = url
  news.description = urlToImage
  news.description = publishedAt


  news.save()
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err))
})

// router.patch('/:id/status', (req, res) => {
//   const { id } = req.params
//   Task.findById(id)
//     .then(task => { //new Task()
//       task.completed = !task.completed
//       return task.save()
//     })
//     .then(updatedtask => res.json(updatedtask))
//     .catch(err => res.status(500).json(err))
// })

module.exports = router