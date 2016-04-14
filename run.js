var server = require('./server');
var database = require('./database');
var routes = require('./todo-routes');

function init(){

    server.init()
        .then(routes.init)
        .then(database.connect)
        .then(function(){

            require('./todo-model');
            console.log('All is well');

        })
        .catch(function(err){

            console.log(err);

        });

}


init();