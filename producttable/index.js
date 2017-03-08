angular.module('product',[])
.service('productData',function(){
	return [
		{
			id:1,
			name:'huawei',
			price:1023
		},
		{
			id:2,
			name:'vivo',
			price:9999
		},
		{
			id:3,
			name:'oppo',
			price:7777
		},
		{
			id:4,
			name:'xiaomi',
			price:6666
		},
		{
			id:5,
			name:'iphone',
			price:5555
		},
	]
})
.controller('productController',function($scope,productData){
	$scope.productData = productData;
	$scope.orderType = 'id';
	$scope.order = '-';

	$scope.changeOrder = function(type){
		$scope.orderType = type;
		if($scope.order === ''){
			$scope.order = '-';
		}else{
			$scope.order = '';
		}
	}
})

