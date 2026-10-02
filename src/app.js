import express from 'express'
import { index_router } from './routes/index.js'
let app=express()
app.use(express.json())
app.use('/api/v1',index_router)
app.get('/',(req,res)=>{
    res.redirect('/api/v1/health')
})
export default app