angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);

})

.controller('ItemsCtrl', function($scope, Groups) {
   
})

// GroupsCtrl
.controller('GroupsCtrl', function($scope, Groups) {
    $scope.items = Groups.all();

})

.controller('GroupsDetailCtrl', function($scope, $stateParams, SubGroups) {
  $scope.item = SubGroups.get($stateParams.groupId);

})

.controller('ItemDetailCtrl', function($scope, $stateParams, Groups) {
    $scope.item = Groups.get($stateParams.itemId);
})



.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
})



.controller('CartCtrl', function($scope) {
    
})

.controller('OtherCtrl', function($scope) {
    
})

;
