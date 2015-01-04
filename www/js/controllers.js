angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

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
});
