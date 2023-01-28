const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const Json = fs.readFileSync('asset/data.json')
const parseJson = JSON.parse(Json)
const datas = require('./filtersData')
app.set('view engine','ejs')
app.use(express.static('asset'))


app.get('/', (req, res) => {
  res.render('homepage')
})
app.get('/about', (req, res) => {
  res.render('about')
})
app.get('/data1', (req, res) => {
  res.json(datas(parseJson, 1))
})
app.get('/data2', (req, res) => {
  res.json(datas(parseJson, 2))
})
app.get('/data3', (req, res) => {
  res.json(datas(parseJson, 3))
})
app.get('/data4', (req, res) => {
  res.json(datas(parseJson, 4))
})
app.get('/data5', (req, res) => {
  res.json(datas(parseJson, 5))
})
app.use('/',(req, res)=>{
    res.render('404')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})