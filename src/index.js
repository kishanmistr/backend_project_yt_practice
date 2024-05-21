import app from "./app.js";
import connectDB from "./db/index.js";
import dotenv from 'dotenv'


dotenv.config({

    path : './env'

})


connectDB()
.then( () => {

    app.on( "error" , (error) => {

        console.log("error in server" , error );

    } )  

    app.listen(process.env.PORT || 3000 , () => {


        console.log(` server at http://localhost:${process.env.PORT}  `);

    } )
    
} )
.catch( (err) => {

    console.log(err,"MONGODB connection is failed ! ");

} )



