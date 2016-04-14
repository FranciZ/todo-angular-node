var mongoose = require('mongoose');

exports.init = function(server){

    server.get('/api/todo', function(req, res){

        var Todo = mongoose.model('Todo');

        Todo.find(function(err, docs){

            if(err){
                res.status(400).send(err);
            }else{
                res.send(docs);
            }

        });

    });

    server.post('/api/todo', function(req, res){

        var todoData = req.body;

        var Todo = mongoose.model('Todo');

        var todo = new Todo(todoData);
        todo.save(function(err){

            if(err){
                res.status(400).send(err);
            }else {
                res.send(todo);
            }

        });

    });

    server.put('/api/todo/:id', function(req, res){

        var todoId = req.params.id;
        var todoData = req.body;

        var Todo = mongoose.model('Todo');

        Todo.findOneAndUpdate({_id:todoId}, todoData, { new:true }, function(err, doc){

            if(err){
                res.status(400).send(err);
            }else {
                res.send(doc);
            }

        });

    });

    server.delete('/api/todo/:id', function(req, res){

        var todoId = req.params.id;

        var Todo = mongoose.model('Todo');

        Todo.findOneAndRemove({_id:todoId}, function(err, doc){

            if(err){
                res.status(400).send(err);
            }else {
                res.send(doc);
            }

        });

    });



    return server;

};





