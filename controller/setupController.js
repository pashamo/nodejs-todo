let Todos = require('../models/todoModel');

module.exports = app => {
    
    app.get('/api/setupTodos', (req, res) => {

        //seed database
        let starterTodos = [
            {
                username: 'test',
                todo: 'Buy Eggs',
                isDone: false,
                hadAttachment: false
            },
            {
                username: 'test',
                todo: 'Clean Toilet',
                isDone: false,
                hadAttachment: false
            },
            {
                username: 'test',
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