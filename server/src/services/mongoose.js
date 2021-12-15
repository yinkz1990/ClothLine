const mongoose =  require("mongoose");


mongoose.connection.on("open", () => {
    console.log("connected to database");
})
mongoose.connection.on("error", (error) => {
    console.log(error);
})


const mongooseServer = async () =>{
   
    await mongoose.connect("mongodb+srv://Olayinka:idumu_1990@cluster0.axjfq.mongodb.net/Clothing?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}


module.exports = mongooseServer;






