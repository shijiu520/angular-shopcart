angular.module('myApp',[])
.filter('cityFilter',function(){
	return function(data,pid){
		var filterData = [];
		angular.forEach(data,function(obj){
			if(obj.pid == pid){
				filterData.push(obj);
			}
		})
		return filterData;
	}
})
.controller('firstController',['$scope',function($scope){
	var that = this;
	$scope.hobbies = [
		{
			id:1,
			name:'足球'
		},
		{
			id:2,
			name:'游泳'
		},
		{
			id:3,
			name:'阅读'
		},
	];


	$scope.cities = [
		{
			id:1,
			name:'广东省',
			pid:0
		},
		{
			id:2,
			name:'广州市',
			pid:1
		},
		{
			id:3,
			name:'深圳市',
			pid:1
		},
		{
			id:4,
			name:'浙江省',
			pid:0
		},
		{
			id:5,
			name:'杭州市',
			pid:4
		},
		{
			id:6,
			name:'宁波市',
			pid:4
		},
		{
			id:7,
			name:'天河区',
			pid:2
		},
		{
			id:8,
			name:'福田区',
			pid:3
		},
	];



	$scope.data = {
		hobbies:[1,2],
		district:8,
		city:6
	};


	$scope.origData = angular.copy($scope.data);
	$scope.reset = function(){
		$scope.data = angular.copy($scope.origData);
		$scope.myForm.$setPristine();
		that.initCity()
	}


	this.findDistrictId = function(parent){
		var pid;
		angular.forEach($scope.cities,function(district){
			if(district.id == parent){
				pid = district.pid;
				return;
			}
		})
		return pid;
	}

	

	this.initCity = function(){
		if($scope.data.city != undefined){
		//$scope.data.city = this.findDistrictId($scope.data.district);
			$scope.data.province = this.findDistrictId($scope.data.city);
		}

		if($scope.data.district != undefined){
			$scope.data.city = this.findDistrictId($scope.data.district);
			$scope.data.province = this.findDistrictId($scope.data.city);
		}
	}

	this.initCity.call(this);
	


	$scope.toggleHobbySelection = function(id){
		var index = -1;
		if($scope.data.hobbies == undefined){
			$scope.data.hobbies = [];
		}else{
			index = $scope.data.hobbies.indexOf(id);
		}
		
		if(index === -1){
			$scope.data.hobbies.push(id);
		}else{
			$scope.data.hobbies.splice(index,1);
		}
	}
}])