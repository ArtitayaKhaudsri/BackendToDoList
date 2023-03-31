const express = require('express');
const router = express.Router();
const toDoLists = require("../data/to-do-list.json");

router.get('/toDoLists', (req, res) => {
    res.json(toDoLists)
})

router.get('/toDoLists/:id', (req, res) => {
    res.json(toDoLists.find(toDoLists => toDoLists.id === req.params.id))
})

router.post('/addToDoList', (req, res) => {
    toDoLists.push(req.body)
    res.status(201).json(req.body)
})

router.put('/toDoLists/:id', (req, res) => {
    const updateIndex =toDoLists.findIndex(book => book.id === req.params.id)
    res.json(Object.assign(toDoLists[updateIndex], req.body))
})

router.delete('/toDoLists/:id', (req, res) => {
    const deletedIndex = toDoLists.findIndex(toDoList => toDoList.id === req.params.id)
    toDoLists.splice(deletedIndex, 1)
    res.status(204).send()
})

module.exports = router;