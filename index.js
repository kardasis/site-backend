const express = require('express')
const cors = require('cors')


const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())

app.get('/', (request, response) => {
  return response.json({
    data: {
      message: `the time on the server is ${Date.now()}`,
    },
  })
})

app.listen(PORT, () => console.log(`App running on port ${PORT}`))

