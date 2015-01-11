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



.controller('OrderCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };

    $scope.items = [{
        id: 0,
        order_id: 'A00000001',
        order_date: '2014/12/1',
        status: '己完成'
    },{
        id: 1,
        order_id: 'A00000002',
        order_date: '2014/12/15',
        status: '己出貨'
    }];

})

.controller('OrderDetailCtrl', function($scope, $stateParams) {

})


.controller('CartCtrl', function($scope) {
    
})

.controller('OtherCtrl', function($scope) {
    
})

;
