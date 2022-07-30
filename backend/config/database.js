const mongoose = require('mongoose');





 const connectDatabse=()=>{
    mongoose.connect(process.env.DB_URI).then((data)=>{
        console.log(`mongodb connected with server : ${data.connection.host}`);
    })
    // .catch((error)=>{  
    //     console.log(error);
    // })
 }


    // mongoose.connect(process.env.DB_URI,
    //     { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true}).then((data)=>{
    //         console.log(`mongodb connected with server : ${data.connection.host}`);
    //     }).catch((error)=>{  
    //         console.log(error);
    //     })



    module.exports  = connectDatabse