   const app = angular.module('ToDo',[]);
    app.controller('todo_Controller',['$scope', function($scope){
        $scope.todos = [
            {
            'title':'Hello stranger',
            'date': null,
            'done':false
            }
        ];
        $scope.addTodo = function(){
            $scope.todos.push({'title':$scope.newTodo,'date':$scope.todo_date,'done':false});
            $scope.newTodo = '';
            $scope.todo_date = null;
        };
        $scope.clearCompleted = function(){
            $scope.todos = $scope.todos.filter((item)=>{
                return !item.done;
            })
        };    
    }])
