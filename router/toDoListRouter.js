const express = require('express');
const router = express.Router();
const {validator} = require('../middleware/validator');
const {getAllToDoList, getToDoList, createToDoList, editToDoList, deleteToDoList, editStatusToDoList,getTodayList} = require("../controller/toDoList");

router.get('/toDoLists', getAllToDoList);
router.get('/toDoLists/:id', getToDoList);
router.get('/toDoListsToday', getTodayList)
router.post('/addToDoList', validator, createToDoList);
router.post('/editToDoList/:id', editToDoList);
router.get('/editStatusToDoList/:id', editStatusToDoList);
router.get('/deleteToDoList/:id', deleteToDoList);

module.exports = router;