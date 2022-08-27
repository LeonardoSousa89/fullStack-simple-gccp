const port=process.env.PORT || 3003
const server=require('./server/index')
const cors=require('cors')
const express=require('express')
const application=express()

application.use(express.urlencoded({ extended:true }))
application.use(express.json())
application.use('/',server)
application.use(cors({origin:'*'}))

application.listen(port)