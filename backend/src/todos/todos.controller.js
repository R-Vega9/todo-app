const service = require("./todos.service");
const asyncErrorBoundary =  require("../errors/asyncErrorBoundary");

async function todoExist(req, res, next){
    const foundTodo = await service.read(req.params.todo_id);
    if (foundTodo){
        res.locals.todo = foundTodo
        return next()
    }
    return next ({
        status: 404,
        message: `Todo does not exist for id: ${req.params.todo_id}`
    });
}

async function create(req, res){
    const data = await service.create(req.body.data);
    res.status(201).json({ data: data })
}

async function read(req, res, next){
    res.json({ data: res.locals.todo })
};


async function update(req, res){
    const updatedTodo = {
        ...req.body.data,
        todo_id: res.locals.todo.todo_id
    }
    const data = await service.update(updatedTodo)
    res.json({ data })
}

async function list(req, res, next){
    const data = await service.list();
    res.json({ data })
}

async function destroy (req, res){
    const {todo} = res.locals;
    await service.delete(todo.todo_id)
    res.sendStatus(204)
}

module.exports = {
    create: asyncErrorBoundary(create),
    update: [asyncErrorBoundary(todoExist), asyncErrorBoundary(update)],
    read: [todoExist, read],
    delete: [asyncErrorBoundary(todoExist), asyncErrorBoundary(destroy)],
    list: asyncErrorBoundary(list)
}