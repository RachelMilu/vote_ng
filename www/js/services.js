angular.module('starter.services', [])

.factory('Proxy', function($http) {
  return {
    getData : function(url,option){
        if(useDummy){
          var promise = $http.get(prefix+url+"?i="+Math.random()*1000).then(function(rs){
            console.log(rs)
            return rs.data;
            //option.succCallback(data.data);
          });
          return promise;

         }else{

         }
    }

  }
})

.factory('Chats', function($http,Proxy) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [];

  return {
    setChats: function(data){
      chats = data;
    },
    all: function(url,option) {
      var promise = Proxy.getData(url,option).then(function(){
        option.succCallback();
      });
      return promise;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
