angular.module('starter.controllers', [])

.controller('EnterCtrl', function($scope,$location) {
  $scope.gotoVote = function(){
    $location.path("/vote");
  }
})

.controller('VoteCtrl', function($scope,$location,Proxy) {
  $scope.pageTitle = "vote";
  $scope.voteObj = {};
  var option ={};
  Proxy.getData("dummy/vote.json",option).then(function(data){
    console.log("111",data)
    $scope.voteObj = data;
  });

  $scope.gotoResult = function(){
    $location.path("/voteRs");
  }
 /* $scope.voteObj.subject = "subject";
  $scope.voteObj.description = "description";
  $scope.voteObj.options = ["yes","no","let it go"];*/


})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  Chats.all("dummy/data.json",{
          succCallback : function(data){
              chats = data;
              console.log("succCallback called...",data);
          }
  });
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

