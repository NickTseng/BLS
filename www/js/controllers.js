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

.controller('ItemDetailCtrl', function($scope, $stateParams, Items) {
    $scope.item = Items.get($stateParams.itemId);
})

.controller('FriendsCtrl', function($scope, Friends) {
    $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
    $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
})

// ProductsCtrl
.controller('ProductsCtrl', function($scope, Products) {
    $scope.products = Products.all();

})

.controller('ProductsDetailCtrl', function($scope, $stateParams, Products) {
    $scope.product = Products.get($stateParams.productId);
})


.controller('RefundCtrl', function($scope) {
    
})

.controller('OtherCtrl', function($scope) {
    
})

;
