var cartController = function($scope){

	$scope.cart = [
		{
			id:1000,
			name:'iphone6s',
			quantity:3,
			price:4600
		},
		{
			id:2000,
			name:'huawei',
			quantity:20,
			price:3200
		},
		{
			id:3000,
			name:'vivo',
			quantity:10,
			price:2700
		},
		{
			id:4000,
			name:'oppo',
			quantity:12,
			price:1999
		},
	];


	var findIndex = function(id){
		var index = -1;
		angular.forEach($scope.cart,function(item,key){
			if(item.id === id){
				index = key;
				return;
			}
		});
		return index;
	}


	$scope.totalPrice = function(){
		var total = 0;
		angular.forEach($scope.cart,function(item){
			total += item.quantity * item.price
		});
		return total;
	}


	$scope.totalQuantity = function(){
		var quantity = 0;
		angular.forEach($scope.cart,function(item){
			quantity += parseInt(item.quantity)
		});
		return parseInt(quantity);
	}

	$scope.remove = function(id){
		var index = findIndex(id);
		if(index != -1){
			$scope.cart.splice(index,1);
		}
	}

	$scope.add = function(id){
		var index = findIndex(id);
		if(index !== -1){
			++ $scope.cart[index].quantity;
		}
	}

	$scope.reduce = function(id){
		var index = findIndex(id);

		if(index !== -1){
			var item = $scope.cart[index];
			if(parseInt(item.quantity) > 1){
				--item.quantity;
			}else{
				var returnKey = confirm('确定从购物车删除?');
				if(returnKey){
					$scope.remove(id);
				}
			}
		}
	}


	$scope.$watch('cart',function(newValue,oldValue){
		angular.forEach(newValue,function(item,key){
		
			if(parseInt(item.quantity) < 1 || !item.quantity){
				var returnKey = confirm('确定从购物车删除?');
				if(returnKey){
					$scope.remove(item.id);
				}else{
					item.quantity = oldValue[key].quantity;
				}

			}
		})
	},true);
}