const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/habit_tracker",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.error(err);
})