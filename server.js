const express = require('express');
var cors = require('cors')
const quizData = require('./data.js');

const app = express();
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).json({quizData});
});

app.get('/quiz/:quizId', (req, res) => {
  const quizId = req.params.quizId
  try{
  const findQuiz = quizData.find(item => item.id === quizId);
  res.status(200).json({success: true, quiz: findQuiz})
  }catch(err){
  res.status(400).json({success: false, message: 'Could not fetch quiz'})
  }
});

app.listen(3000, () => {
  console.log('server started on port 3000');
});