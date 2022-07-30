const app = require('./app');
const dotenv = require('dotenv');
const cloudinary = require('cloudinary');

const connectDatabse = require('./config/database');

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});


// config
dotenv.config({ path: "backend/config/config.env" });


//conection Db
connectDatabse();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// cloudinary.config({ 
//   cloud_name: 'dirckibis', 
//   api_key: '766516767596184', 
//   api_secret: 'lk_YSLhlQLAy4yaVN6l9NJZ2K44' 
// });

// app.listen(process.env.PORT, () =>{

//     console.log(`listening on port ${process.env.PORT}`);
// });

app.listen(8080, () => {
  console.log("backend running ");
})

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});