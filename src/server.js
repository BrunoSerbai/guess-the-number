import express from 'express'

const port = 1337
const app = express()

const num = 7
const low = "<p>Your guess is too low, try again</p>"
const high = "<p>Your guess is too high, try again</p>"
const right = "<p>Your guess is right! Thanks for playing! </p>"

// Tells express to server files on the 'public' folder as static files
app.use(express.static('public'))

// Middleware - use JSON bodies
app.use(express.json())

// Website endpoints - serve static files
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: './public' })
})

app.listen(port, (req, res) => {
  console.log(`The app is running on http://localhost:${port}`)
  console.log("Welcome to the game of guess the number!")
})

// API Endpoints - Process the requests
app.get('/test', (req, res) => {
  res.send("Server is running! Test successful")
  console.log("Test successful")
})

app.post('/submit', (req, res) => {
  let response = req.body.number
  console.log(number)

  res.json({
    message: "Number received",
    number: number
  })
})
