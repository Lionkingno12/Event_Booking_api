import app from './src/app.js'
import dotenv from 'dotenv'
import {db} from './src/config/db.js'

dotenv.config()

const startserver= async ()=>{
    try{
    await db()
    app.listen(process.env.PORT,()=>{
        console.log('start the server...')
        console.log("Port:"+process.env.PORT)
    })
    }
    catch{
        console.log('database connection failed ')
    }
}
startserver()