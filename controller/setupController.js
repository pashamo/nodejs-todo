let Todos = require('../models/todoModel');

module.exports = (app) => {
    
    app.get('/api/setupTodos', (req, res) => {

        //seed database
        let starterTodos = [
            {
                username: 'test1',
                todo: 'Buy Eggs',
                isDone: false,
                hadAttachment: false
            },
            {
                username: 'test1',
                todo: 'Clean Toilet',
                isDone: false,
                hadAttachment: false
            },
            {
                username: 'test2',
                todo: 'Learn Node',
                isDone: false,
                hadAttachment: false
            }
        ];

        Todos.create(starterTodos, (err,results) => {
            res.send(results);
        })
    })
}