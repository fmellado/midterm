module.exports = (app)=>{
    const todos = require('../controllers/todo.controller');

    app.post('/todos', todos.create);

    app.get('/todos', todos.findAll);
    app.get('/todos/:id', todos.findOne);

    app.put('/todos/:id', todos.update);
    app.delete('/todos/:id', todos.delete);
}