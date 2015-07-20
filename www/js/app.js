var useDummy = true;
var prefix = "http://localhost:8000/www/";
var i18n_config = {
  language: "en",
  path: "i18n/"
}

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','starter.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    //if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      //cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    //}
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
      .state('enter', {
    url: "/enter",
    templateUrl: "templates/enter.html",
    controller: 'EnterCtrl'
  })

   .state('vote', {
    url: "/vote",
    templateUrl: "templates/vote.html",
    controller: 'VoteCtrl'
  })
  .state('new-vote', {
    url: "/newVote",
    templateUrl: "templates/new_vote.html",
    controller: 'NewVoteCtrl'
  })
  .state('vote-rs', {
    url: "/voteRs",
    templateUrl: "templates/vote_rs.html",
    controller: 'VoteRsCtrl'
  })
  .state('vote-list', {
    url: "/voteList",
    templateUrl: "templates/vote-list.html",
    controller: 'VoteListCtrl'
  })
  .state('login', {
    url: "/login",
    templateUrl: "templates/login.html",
    controller: 'LoginCtrl'
  })
/*
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })


  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
  */

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/enter');

});
