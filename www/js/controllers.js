angular.module('app.controllers', [])
  
.controller('menuCtrl', function ($scope, $ionicModal, $timeout, $ionicLoading, Conexao, ConfigUrl) {
$scope.lista = [];

$scope.carregar = function (){

	var valores = {
		parametros:'leitura'
	}	

	Conexao.getConexao(valores, ConfigUrl.BaseUrl).success(function(data){
		console.log(data);
			$scope.lista = data;
		}).error(function(data){
		});

}

$scope.carregar();


$scope.dados = function(valor){
	$scope.nome2 = $scope.lista[valor].nome;
	$scope.telefone2 = $scope.lista[valor].telefone;
	$scope.email2 = $scope.lista[valor].email;
	$scope.origem2 = $scope.lista[valor].origem;
	$scope.ufOrigem2 = $scope.lista[valor].ufOrigem;
	$scope.destino2 = $scope.lista[valor].destino;
	$scope.ufDestino2 = $scope.lista[valor].ufDestino;
	$scope.freteEmpresa2 = $scope.lista[valor].freteEmpresa;
	$scope.freteMotorista2 = $scope.lista[valor].freteMotorista;
	$scope.roteiro2 = $scope.lista[valor].roteiro;

}

$scope.deletar = function(valor){
	result = window.confirm("Apagar Registro: "+$scope.nome2);
	if(result==1){

		var valores = {
		parametros:'deletar',
		id:$scope.id2
		}

	Conexao.getConexao(valores, ConfigUrl.BaseUrl).success(function(data){

		console.log(data);

		if(data == ""){
			alert('Registro Deletado com Sucesso');
			$scope.carregar();
		}else{
			alert('Nao foi possivel deletar esse registro no momento...');
		}


	}).error(function(){

	});

	}
}



})
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   

.controller('fretesCtrl', function ($scope, $http, $ionicModal, $timeout, Conexao, ConfigUrl) {

$scope.atualizar = function(){
    $http.get('#/app/fretes')
}

$scope.atualizar();

})


.controller('freteCtrl', function ($scope, $ionicModal, $timeout, Conexao, ConfigUrl) {


})


.controller('cadastraFreteCtrl', function ($scope, $ionicModal, $timeout, $ionicLoading, Conexao, ConfigUrl) {

$scope.voltar = function() {
    window.history.back();
}



$scope.cadastrar = function (nome, telefone, email, origem, ufOrigem, destino, ufDestino, freteEmpresa, freteMotorista, roteiro) {

	var valores = {
		parametros:'cadastro',
		nome:nome,
		telefone:telefone,
		email:email,
		origem:origem,
		ufOrigem:ufOrigem,
		destino:destino,
		ufDestino:ufDestino,
		freteEmpresa:freteEmpresa,
		freteMotorista:freteMotorista,
		roteiro:roteiro
	}

	if (nome == undefined){
		alert('O campo nome está vazio');
	}else{
		if (telefone == undefined){
		alert('O campo telefone está vazio');
		}else{
			if (email == undefined){
			alert('O email está incorreto');
			}else{
				if (origem == undefined){
					alert('O campo origem está vazio');
				}else{
					if (ufOrigem == undefined){
					alert('O campo UF está vazio');
					}else{
						if (destino == undefined){
							alert('O campo destino está vazio');
						}else{
							if (ufDestino == undefined){
								alert('O campo UF está vazio');
							}else{
								if (freteEmpresa == undefined){
									alert('O campo Frete Empresa está vazio');
								}else{
									if (freteMotorista == undefined){
										alert('O campo Frete Motorista está vazio');
									}else{

								Conexao.getConexao(valores, ConfigUrl.BaseUrl).success(function(data){
									console.log(data);
									$scope.voltar();

								}).error(function(data){

								});

									}
								}		
							}
						}
					}
				}
			}
		}
	}

 }

})

.controller('cadastraMotoristaCtrl', function ($scope, $ionicModal, $timeout, $ionicLoading, Conexao, ConfigUrl) {



})


.controller('refresh', function($scope, $http) {
 
  $scope.doRefresh = function() {
    $scope.carregar()
    $http.get('#/app/frete')
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };
});
