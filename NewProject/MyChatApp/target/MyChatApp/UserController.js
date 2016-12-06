'use strict';
 
angular.module('myApp').controller('UserController', ['$scope', 'UserService', '$location', function($scope, UserService,$location) {
	var self = this;
    self.user={id:'',email:'',userRole:'',name:'',address:'',mobileNo:'', password:'',datecreated:'',gender:'',enabled:''};
    self.users=[];
 
//    self.submit = submit;
//    self.edit = edit;
//    self.remove = remove;
//    self.reset = reset;
 
 
    self.fetchAllUsers = function (){
        UserService.fetchAllUsers()
            .then(
            function (d){
            	self.users = d;
            },
            function(errResponse){
                console.error('Error while fetching User');
            }
        );
    };
    
 
    self.createUser = function (user){
        UserService.createUser(user)
            .then(
            
            	self.fetchAllUsers,
            
            function(errResponse){
                console.error('Error while creating User');
            }
        );
    };
 
    self.updateUser = function (user, id){
        UserService.updateUser(user, id)
            .then(
            self.fetchAllUsers,
            function(errResponse){
                console.error('Error while updating User');
            }
        );
    };
 
  
 
    self.submit = function ()
    {
    	aler('inside UserController.js');
        if(self.user.id===null){
            console.log('Saving New User', self.user);
            createUser(self.user);
        }else{
//            updateUser(self.user, self.user.id);
//            console.log('User updated with id ', self.user.id);
        	  console.log('Saving new user 2', self.user);
        	  self.createUser(self.user);
        	  $location.path('/test');
 
        }
        self.reset();
    };
 
    self.reset = function (){
        self.user={id:'',email:'',userRole:'',name:'',address:'',mobileNo:'', password:'',datecreated:'',gender:'',enabled:''};
        $scope.myForm.$setPristine(); //reset Form
    }
 
}]);