const fs = require('fs');

class ToDoList {

    constructor(filename = 'to-do-list.json') {
        this.path = `./data/${filename}`;
        try {
            fs.accessSync(this.path)
        } catch (error) {
            fs.writeFileSync(this.path, '[]')
        }
    }
    createId() {
        return new Date().getTime().toString();
    }

    async getAllToDoList() {
        return JSON.parse(await fs.promises.readFile(this.path))
    }

    async create(id, data) {
        //get data
        const totalData = await this.getAllToDoList();
        //edit the desired.
        totalData.push({ id, ...data, success:false});
        await fs.promises.writeFile(
            this.path,
            JSON.stringify(totalData, null, 2) //formatting in recipes.json
        );
    }

    async getAToDoList(id) {
        const data = await this.getAllToDoList();
        return data.find(toDoList => toDoList.id === id);
    }

    async getTodayToDoList() {
        const today = JSON.stringify(new Date()).slice(1,11);
        const data = await this.getAllToDoList();
        return data.filter(toDoList => toDoList.date === today).map(data => data);
    }

    async getIndexData(id) {
        const data = await this.getAllToDoList();
        return  data.findIndex((toDoList) => { return toDoList.id === id})
    }

    async updateToDoList(id, newData) {
        //get data
        const totalData = await this.getAllToDoList();
        //Find information the desired status.
        const indexData =  await this.getIndexData(id)
        //edit the desired.
        Object.assign(totalData[indexData], newData)
        //write edit status
        await fs.promises.writeFile(
            this.path,
            JSON.stringify(totalData, null, 2)
        );
    }

    async updateStatus(id) {
        //get data
        const data = await this.getAllToDoList();
        //Find information and edit the desired status.
        const indexData = await this.getIndexData(id)
        data[indexData].success = !data[indexData].success;
        //write edit status
        await fs.promises.writeFile(
          this.path,
          JSON.stringify(data, null, 2)
        );
        return data;
    }
    async deleteToDoList(id) {
        //get data
        const data = await this.getAllToDoList()
        //Find information and edit the desired status.
        const indexData = await this.getIndexData(id)
        data.splice(indexData, 1)
        await fs.promises.writeFile(
            this.path,
            JSON.stringify(data, null, 2) //formatting in recipes.json
        );
    }
}
module.exports = ToDoList;