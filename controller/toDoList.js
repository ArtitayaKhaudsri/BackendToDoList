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
        res.status(200).json({data: data});
    } catch (err) {
        res.status(400).json({message: "Sorry can't get data", err});
    }
}

const getTodayList = async (req, res) => {
    try {
        const data = await toDoList.getTodayToDoList()
        if (!data) {
            return res.status(404).json({message: "Not found data"})
        }
        res.status(200).json({data: data});
    } catch (err) {
        res.status(400).json({message: "Sorry can't get data", err});
    }
}

const createToDoList = async (req, res) => {
    const id = toDoList.createId();
    try {
        await toDoList.create(id, req.body);
        res.status(201).json({ message: 'Post create successfully.'})
        res.send("create successful");
    } catch (err) {
        res.status(400).json({message: "Some error occured", err});
    }
}

const editToDoList = async (req, res) => {
    await toDoList.updateToDoList(req.params.id, req.body)
    try {
        res.status(201).json({message: 'Post create successfully.'})
        res.send("create successful");
    } catch (err) {
        res.status(400).json({message: "Some error occured", err});
    }
}

const editStatusToDoList = async (req, res) => {
    try {
        const data = await toDoList.updateStatus(req.params.id)
        if (!data) {
            return res.json({success:false, message: 'Post not found!'})
        }
        res.status(201).json(data);
    } catch (err) {
        res.status(400).json({message: "sorry can't edit", err});
    }
}

const deleteToDoList = async (req, res) => {
    try {
        await toDoList.deleteToDoList(req.params.id)
        res.status(204).send()
    } catch (err) {
        res.status(400).json({message: "Some error occured", err});
    }
}

module.exports = {
    getAllToDoList,
    getToDoList,
    getTodayList,
    createToDoList,
    editToDoList,
    editStatusToDoList,
    deleteToDoList
}