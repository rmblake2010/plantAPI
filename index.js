//DEPENDENCIES
const express = require('express')
const app = express()

//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT

//DATABASE CONNECTION

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//ENTRY POINT
app.get('/plantAPI/v1', (req, res) => {
    try{
        res.send('plantAPI!')
    }catch(err){
        res.status(err)
    }
})

//CONTROLLERS
const plantsController = require('./controllers/plants_controller')
app.use('/plantAPI/v1/plants', plantsController)


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

