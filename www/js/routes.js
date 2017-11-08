angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    

    .state('menu', {
    url: '/app',
    abstract:true,
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.login', {
    url: '/login',
    views: {
      'app': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.fretes', {
    url: '/fretes',
    views: {
      'app': {
        templateUrl: 'templates/fretes.html',
        controller: 'fretesCtrl'
      }
    }
  })

  .state('menu.frete', {
    url: '/frete',
    views: {
      'app': {
        templateUrl: 'templates/frete.html',
        controller: 'freteCtrl'
      }
    }
  })

   .state('menu.cadastraFrete', {
    url: '/cadastraFrete',
    views: {
      'app': {
        templateUrl: 'templates/cadastraFrete.html',
        controller: 'cadastraFreteCtrl'
      }
    }
  })

   .state('menu.cadastraMotorista', {
    url: '/cadastraMotorista',
    views: {
      'app': {
        templateUrl: 'templates/cadastraMotorista.html',
        controller: 'cadastraMotoristaCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/app/login')


});