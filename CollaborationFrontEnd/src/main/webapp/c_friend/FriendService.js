'use strict';
 
app.factory('FriendService', ['$http', '$q','$rootScope', function($http, $q,$rootScope){
	
	console.log("FriendService...")
	
	var BASE_URL='http://localhost:8080/CollaborationBackEndTest/'
    return {
         
		getMyFriends: function() {
                    return $http.get(BASE_URL+'/myFriends')
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                   null
                            );
            },
            
               
            sendFriendRequest: function(friendID){
                    return $http.get(BASE_URL+'addFriend/'+friendID)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while creating friend');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
             
            acceptFriendRequest: function(friendID)
            {
            	console.log('inside FriendService acceptFriendRequest method')
                    return $http.put(BASE_URL+'acceptFriend/'+friendID)
            		//return $http.post(BASE_URL+'acceptFriend/'+friendID)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while updating friend');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
            
            rejectFriendRequest: function(friendID)
            {
            	console.log('inside FriendService rejectFriendRequest method')
                return $http.put(BASE_URL+'rejectFriend/'+friendID)
                //return $http.post(BASE_URL+'rejectFriend/'+friendID)
                        .then(
                                function(response){
                                    return response.data;
                                }, 
                                function(errResponse){
                                    console.error('Error while updating friend');
                                    return $q.reject(errResponse);
                                }
                        );
        },
             
        /*    deleteFriend: function(id){
                    return $http.delete(BASE_URL+'/friend/'+id)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while deleting friend');
                                        return $q.reject(errResponse);
                                    }
                            );
            }*/
            
           
         
    };
 
}]);