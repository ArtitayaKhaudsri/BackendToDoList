const toDoLists = require("../data/to-do-list.json");
const ToDoList = require("../data/toDoList");

const toDoList = new ToDoList();
const getAllToDoList = async (req, res) => {

    try {
        const data = await toDoList.getAllToDoList()
        res.status(200).json({message: "Get to do list success", data: data});
    } catch (err) {
        res.status(400).json({message: "Can't get to do list", error: err});
    }
}
const getToDoList = async (req, res) => {
    try {
        let { id } = req.params;
        const data = await toDoList.getAToDoList(id)
        if (!data) {
            return res.status(404).json({message: "Sorry not found data"})
        }
        res.status(200).json({message: "Get a to do list success", data: data});
    } catch (err) {
        res.status(400).json({message: "Sorry can't get data", error: err});
    }
}

const getTodayList = async (req, res) => {
    try {
        const data = await toDoList.getTodayToDoList()
        res.status(200).json({message: "Get to do list success", data: data});
    } catch (err) {
        res.status(400).json({message: "Sorry can't get data", error: err});
    }
}

const createToDoList = async (req, res) => {
    const id = toDoList.createId();
    try {
        await toDoList.create(id, req.body);
        res.status(201).json({ message: 'Create to do list successfully.'})
    } catch (err) {
        res.status(400).json({message: "Some error occured", error: err});
    }
}

const editToDoList = async (req, res) => {
    try {
        await toDoList.updateToDoList(req.params.id, req.body)
        res.status(201).json({message: 'Edit to do list successfully.'})
    } catch (err) {
        res.status(400).json({message: "Some error occured", error: err});
    }
}

const deleteToDoList = async (req, res) => {
    await toDoList.deleteToDoList(req.params.id)
    try {

        res.status(204).send("delete to do list success");
    } catch (err) {
        res.status(400).json({message: "Some error occured", error: err});
    }
}

module.exports = {
    getAllToDoList,
    getToDoList,
    getTodayList,
    createToDoList,
    editToDoList,
    deleteToDoList
}