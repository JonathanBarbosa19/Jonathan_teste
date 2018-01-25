(function(){
	'use strict';
	
	angular.module('myruns').config(function ($routeProvider){
		$routeProvider
			.when('/',{
				controller: 'IndexController',
				templateUrl: 'view/index.html'
			})
			.when('/corridas',{
				controller: 'CorridaConsultaController',
				templateUrl: 'view/corrida/consulta.html'
			})
			.when('/passageiros', {
				controller: 'PassageiroConsultaController',
				templateUrl: 'view/passageiro/consulta.html'
			})
			.when('/motoristas',{
				controller: 'MotoristaConsultaController',
				templateUrl: 'view/motorista/consulta.html'
			});
	});
})();