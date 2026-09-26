import app from './src/app.js'
import dotenv from 'dotenv'

dotenv.config()
app.listen(process.env.PORT,()=>{
    console.log('start the server...')
    console.log(process.env.PORT)
})