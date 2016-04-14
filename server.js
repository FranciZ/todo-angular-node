var express = require('express');
var bodyParser = require('body-parser');
var Promise = require('bluebird');
var server = express();

exports.server = server;

exports.init = function(){

    return new Promise(function(resolve, reject){

        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({extended:true}));

        server.listen(3050, function(){

            console.log('Server listening on port 3050');
            resolve(server);

        });

    });

};