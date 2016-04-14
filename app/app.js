angular.module('todoApp', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('todoApp').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('todos', {
        url: '/',
        templateUrl: 'partial/todos/todos.html',
        controller:'TodosCtrl'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/');

});

angular.module('todoApp').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
