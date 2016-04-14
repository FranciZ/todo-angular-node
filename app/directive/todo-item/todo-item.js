angular.module('todoApp').directive('todoItem', function() {
	return {
		restrict: 'EA',
		replace: true,
        //transclude:true,
		scope: {
            ngModel:'=',
            onToggle:'&',
            onRemove:'&'
		},
		templateUrl: 'directive/todo-item/todo-item.html',
		link: function(scope, element, attrs, fn) {

            scope.onToggleClick = function(){

                scope.onToggle({item:scope.ngModel});

            };

            scope.onRemoveClick = function(){

                scope.onRemove({ item:scope.ngModel, dateTime:scope.ngModel.dateTime });

            };

		}
	};
});
