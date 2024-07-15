const express = require('express')
const app = express()
const port = 5000
const cors = require("cors")
app.use(express.json())
app.use(cors())


const phonepeRoute = require("./routes/PhonePeRoute")
app.use("/api/phonepe", phonepeRoute);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))