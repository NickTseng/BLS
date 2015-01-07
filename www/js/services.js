angular.module('starter.services', [])

.factory('Groups', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var items = [{
        id: 0,
        name: '手機類',
        lastText: '智慧型手機',
        face: 'http://placehold.it/128'
    }, {
        id: 1,
        name: '電腦類',
        lastText: '桌上型電腦',
        face: 'http://www4.pcmag.com/media/images/336347-apple-imac-27-inch-late-2013.jpg'
    }, {
        id: 2,
        name: '手機2類',
        lastText: '智障型手機',
        face: 'http://www.theonlinemarketer.co/wp-content/uploads/2013/08/Nokia-3310-5.jpg'
    }, {
        id: 3,
        name: '內衣類',
        lastText: '雙峰話題',
        face: 'http://images.payeasy.com.tw/products/3424/1964/1964826.jpg'
    }, {
        id: 4,
        name: '汽車類',
        lastText: '進口汽車',
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


.factory('SubGroups', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var items = [{
        id: 0,
        name: 'Android',
        lastText: '安卓機',
        face: 'http://imgapi.nownews.com/?w=800&q=80&src=http%3A%2F%2Fs.nownews.com%2F15%2F8f%2F158f9f82e223f3539ac4cc077dabeb32.jpg'
    }, {
        id: 1,
        name: 'RAM',
        lastText: '記憶體',
        face: 'http://www4.pcmag.com/media/images/336347-apple-imac-27-inch-late-2013.jpg'
    }, {
        id: 2,
        name: 'CPU',
        lastText: '中央處理器',
        face: 'http://www.theonlinemarketer.co/wp-content/uploads/2013/08/Nokia-3310-5.jpg'
    }, {
        id: 3,
        name: 'CUP',
        lastText: '罩杯',
        face: 'http://images.payeasy.com.tw/products/3424/1964/1964826.jpg'
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
});
