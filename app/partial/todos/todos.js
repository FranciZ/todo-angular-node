angular.module('todoApp').controller('TodosCtrl',function($scope, todoService){

    $scope.todoModel = todoService.model;

    $scope.todo = {};

    $scope.addTodoClick = function(){

        todoService.add($scope.todo);

    };

    $scope.itemToggle = function(item){

        console.log(item);
        item.done = !item.done;
        
    };

    $scope.itemRemove = function(item, date){

        console.log('item:', item);
        console.log('date:', date);

    };

});
