import express from "express"
import { hashSync } from "bcryptjs"

let db = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "./dev.sqlite3"
    }
})

const port = 3000
const app = express()
app.use(express.json())

app.get("/timestamp", (req, res) => {
    let timeStamp = Date.now()
    let dictTimeStamp = {"timestamp": timeStamp}
    res.send(JSON.stringify(dictTimeStamp))
})

app.post("/registrations", (req, res) => {
    let logReg = {
        "username": req.body.username,
        "displayed_name": req.body.displayed_name,
        "hashed_password": hashSync(req.body.password, 10)
    }
    db.insert(logReg).table("registrations").then((resp:any) => {

    }).catch((err:any) => {
        console.log("Insert data error " + err)
    })
    res.send(JSON.stringify({error: 0}))
})

app.get("/registrations", (req, res) => {
    db.select("*").table("registrations").then((data:any) => {
        let dictRes = {
            error: 0,
            data: data
        }
        res.send(JSON.stringify(dictRes))
    }).catch((err:any) => {
        console.log("Fetch data error " + err)
    })
})

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})