const plants = require('express').Router()



//GET
plants.get('/', async (req, res) => {
    res.status(200).json(
        { plant: 'Acer' }
    )
})
//GET - NEW
plants.get('/new', async (req, res) => {
    //new plant form 
    console.log('new plant stub')
})
//GET - ID
plants.get('/:id', async (req, res) => {
    console.log(`id ${req.params.id}`)
})
//POST
plants.post('/', async (req, res) => {
    // Create new plant based on form input
    console.log('new plant accepted')
})
//GET - EDIT
plants.get('/:id/edit', async (req, res) => {
    //form for editing plant
    console.log('edit page')
})
//PUT - UPDATE
plants.put('/:id', async (req, res) => {
    //updates req.params.id plant info
    console.log('plant updated')
})
//DELETE
plants.delete('/:id', async (req, res) => {
    //Deleting req.params.id plant
    console.log('plant deleted')
})


//EXPORT
module.exports = plants