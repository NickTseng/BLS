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

.controller('ItemsCtrl', function($scope, Items) {
    $scope.items = Items.all();
    $scope.remove = function(item) {
        Items.remove(item);
    }
})

// GroupsCtrl
.controller('GroupsCtrl', function($scope, Groups) {
    $scope.items = Groups.all();

})

.controller('GroupsDetailCtrl', function($scope, $stateParams, Groups) {
  $scope.item = Groups.get($stateParams.groupId);

})

.controller('ItemDetailCtrl', function($scope, $stateParams, Items) {
    $scope.item = Items.get($stateParams.itemId);
})



.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
})



.controller('RefundCtrl', function($scope) {
    
})

.controller('OtherCtrl', function($scope) {
    
})

;
