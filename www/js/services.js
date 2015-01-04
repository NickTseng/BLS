angular.module('starter.services', [])

.factory('Items', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var items = [{
    id: 0,
    name: '智慧型手機',
    lastText: 'iPhone 6',
    face: 'http://imgapi.nownews.com/?w=800&q=80&src=http%3A%2F%2Fs.nownews.com%2F15%2F8f%2F158f9f82e223f3539ac4cc077dabeb32.jpg'
  }, {
    id: 1,
    name: '桌上型電腦',
    lastText: 'iMac',
    face: 'http://www4.pcmag.com/media/images/336347-apple-imac-27-inch-late-2013.jpg'
  }, {
    id: 2,
    name: '智障型手機',
    lastText: 'Nokia 3310',
    face: 'http://www.theonlinemarketer.co/wp-content/uploads/2013/08/Nokia-3310-5.jpg'
  }, {
    id: 3,
    name: '內衣',
    lastText: '雙峰話題',
    face: 'http://images.payeasy.com.tw/products/3424/1964/1964826.jpg'
  }, {
    id: 4,
    name: '汽車',
    lastText: 'Audi S5',
    face: 'http://www.audifinance.com.au//App_Themes/AUDI/images/car_S5.png'
  }];

  return {
    all: function() {
      return items;
    },
    remove: function(item) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(itemId) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(itemId)) {
          return items[i];
        }
      }
      return null;
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    notes: 'Enjoys drawing things',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    notes: 'Odd obsession with everything',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlen',
    notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    notes: 'I think he needs to buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    notes: 'Just the nicest guy',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('Products', function() {

  var products = [{
    id: 0,
    name: 'Ben Sparrow',
    notes: 'Enjoys drawing things',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    notes: 'Odd obsession with everything',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlen',
    notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    notes: 'I think he needs to buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    notes: 'Just the nicest guy',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];


  return {
    all: function() {
      return products;
    },
    get: function(friendId) {
      // Simple index lookup
      return products[friendId];
    }
  }
})
;
