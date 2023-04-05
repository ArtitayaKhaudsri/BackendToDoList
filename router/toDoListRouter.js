const express = require('express');
const router = express.Router();
const {validator} = require('../middleware/validator');
const {getAllToDoList, getToDoList, createToDoList, editToDoList, deleteToDoList, getTodayList} = require("../controller/toDoList");

router.get('/toDoLists', getAllToDoList);
router.get('/toDoList/:id', getToDoList);
router.get('/toDoListsToday', getTodayList)
router.post('/addToDoList', validator, createToDoList);
router.post('/editToDoList/:id', editToDoList);
router.delete('/toDoLists/:id', deleteToDoList);

module.exports = router;