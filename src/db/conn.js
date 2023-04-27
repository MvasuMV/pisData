const mongoose = require("mongoose");


// mongoose.connect("mongodb://localhost:27017/route-info", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//     // useCreateIndex: true
// }).then(() => {
//     console.log("Connected");
// }).catch((e) => {
//     console.log(e);
// })
const connectDB = (uri)=>{
    console.log("DB Connected");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports=connectDB;

