   const app = angular.module('ToDo',[]);
    app.controller('todo_Controller',['$scope', function($scope){
        $scope.todos = [
            {
                'title':'build a todo app',
                'done':false
            
            }
        ];
            $scope.addTodo = function(){
                $scope.todos.push({'title':$scope.newTodo,'done':false});
                $scope.newTodo = '';
            };
            $scope.clearCompleted = function(){
                $scope.todos = $scope.todos.filter((item)=>{
                    return !item.done;
                })
            };
        
    }])