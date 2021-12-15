const express = require("express");
const cors = require("cors");
const productRouter = require("./Routes/product/product.route")

const app = express();



app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}))

app.use('/api', productRouter);
app.get("/", (req, res, next) => {
    res.json({started: "We have started the application"})
})








module.exports = app;
