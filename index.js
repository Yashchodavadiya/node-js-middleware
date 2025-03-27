const express = require("express")
const infoRoute = require("./src/routes/info")
const userRoute = require("./src/routes/user")
const { infoMiddleware } = require("./src/middleware/info")


const app = express()


app.use(infoRoute)
app.use("/user", userRoute)
app.use((error, req, res, next) => {
    console.log("Error Middlware runnig")
    console.log(error)
    res.status(500).json({ msg: "Server Error", error: error })
}
)

app.listen(7000) 