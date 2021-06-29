const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');

const News = require('../models/News')


//get all
router.get('/',(req,res) => {
  // let headerInfo = req.headers.authorization;
  //   console.log(headerInfo);
  // if(headerInfo){
  //   let token = headerInfo.replace('Bearer ', '');
  //   let result = jwt.verify(token, 'secret1234');
    News.find()
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
  // }
  // else{
  //   res.send(null);
  // }
})

router.get('/:id', (req, res) => {
  
  const { id } = req.params
  // const id  = req.params.id
  console.log(id);
  News.findById(id)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
})

router.delete('/:id', (req, res) => {
  // const { id } = req.params
  const id = req.params.id
  console.log(id);

  News.findByIdAndDelete(id)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
})

router.post('/', (req, res) => {
  const { title, description, url, urlToImage, publishedAt } = req.body
  //Task.insertMany
  //or 
  //Task.create
  const news = new News()
  
  news.title = title
  news.description = description
  news.url = url
  news.urlToImage = urlToImage
  news.publishedAt = publishedAt


  news.save()
  .then(data => res.json(data))
  .catch(err => res.status(500).json(err))
})

//http://localhost:3000/news/new.id
router.put('/:id', (req, res) => {
  // const { id } = req.params
  const id = req.params.id
  
  const { title, description, url, urlToImage, publishedAt } = req.body
 
  News.title = title
  News.description = description
  News.url = url
  News.urlToImage = urlToImage
  News.publishedAt = publishedAt
  console.log(News.description);
  
  News.findByIdAndUpdate(id,
    {title: News.title,
      description: News.description,
       url: News.url,
        urlToImage: News.urlToImage, 
        publishedAt: News.publishedAt, }, function(err, result){

    if(err){
        res.send(err)
    }
    else{
        res.send(result)
    }
})
})


// router.put('/:id', (req, res) => {
//   // const { id } = req.params

//   const { id } = req.params.id
//   News.findById(id)
//     .then(news => { //new News()
//       news.completed = !news.completed
//       return news.save()
//     })
//     .then(updatednews => res.json(updatednews))
//     .catch(err => res.status(500).json(err))
// })




module.exports = router