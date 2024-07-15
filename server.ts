import express from 'express'
const app = express()
import cors from 'cors'
app.use(express.json())
app.use(cors())


const phonepeRoute = require("./routes/PhonePeRoute")
app.use("/api/phonepe", phonepeRoute);

const port = 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))