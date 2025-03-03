import express from 'express'

const port = 1337
const app = express()

app.listen(port, (req,res) => {
  console.log("Welcome to the game of guess the number!")
})


