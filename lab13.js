const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome to Arithmetic operation page!')
})

app.get('/add/:num1/:num2', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var sum = (num1 + num2).toString()
  res.send("the result is:"+sum)
})

app.get('/subtract/:num1/:num2', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var minus = (num1 - num2).toString()
  res.send("the result is:"+minus)
})

app.get('/multiply/:num1/:num2', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var multi = (num1 * num2).toString()
  res.send("the result is:"+multi)
})

app.get('/divide/:num1/:num2', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var division = (num1 / num2).toString()
  res.send("the sum is:"+division)
})

app.listen(8021, function () {
  console.log('Well Done!')
})