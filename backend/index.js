const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send(new Date)
})
  
app.listen(port, () => console.log(`listening on http://localhost:${port}`))
