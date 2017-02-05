var app=angular.module("MyApp",['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state("produits",{
		url:"/produits",
		templateUrl: "views/produits.html",
		controller:"ProduitController"
	});
	$stateProvider.state("categories",{
		url:"/categories",
		templateUrl: "views/categories.html",
		controller:"CategoriesController"
	});
	$stateProvider.state("home",{
		url:"/home",
		templateUrl: "views/home.html",
		controller:"HomeController"
	});
	$urlRouterProvider.otherwise("home");
});

app.controller("CategoriesController", function() {
	
});

app.controller("ProduitController", function($scope,$http){
	$scope.pageProduits=null;
	$scope.motCle="";
	$scope.currentPage=0;
	$scope.size=5;
	$scope.pages=[];
	$scope.chercher=function(){
		$http.get("chercher?mc="+$scope.motCle+
				"&page="+$scope.currentPage+
				"&size="+ $scope.size)
		.success(function(data){
			$scope.pageProduits=data;
			$scope.pages = new Array(data.totalPages)
		})
		.error(function(err){
			console.log(err);
		})
	}
	$scope.gotoPage=function(p){
		$scope.currentPage=p;
		$scope.chercher();
	}
});