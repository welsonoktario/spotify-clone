import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port http://localhost:${port}`)
})
