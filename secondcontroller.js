(function(){
var module = angular.module('secondmodule',[]);
app.controller('second', ['$scope', '$resource','$location','$filter','$window', function ($scope, $resource, $location,$filter,$window) {

var something = localStorage.getItem("un");
if(!something)
{
	$location.url('/');
}
$scope.s = something;

var dp = $resource('./courser.php',{},{
	'query' : {
		method : 'GET',
		isArray : true
	}
	});
	dp.query(function(response){
		$scope.datap = [];
		for(var i = 0;i<response.length; i++){
			$scope.datap.push(response[i].cname);
			//console.log(response[i].cname);
		}
		
		$scope.Gender = $scope.datap;
	});	

$scope.logout = function() {
	 
	localStorage.clear();
    $location.url('/');
 
}

$scope.createMeetup = function () {	
var resGajala = $resource('./coursee.php', {}, {    
    'save': {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
});	
var input = {"un":something,"cn":$scope.gender};
resGajala.save(input,function(response){
});  
$window.location.reload();
}

var url = './coursec.php/?un='+something;
var dp1 = $resource(url,{},{
	'query' : {
		method : 'GET',
		isArray : true
	}
	});
	dp1.query(function(response){
		$scope.datap = [];
		for(var i = 0;i<response.length; i++){
			$scope.datap.push(response[i]);
			//console.log(response[i].cdesc);
		}
		console.log($scope.datap[0]);
		//$scope.Genderl = $scope.datap;
	});	

$scope.submit = function(name) {


var resGajala = $resource('./courseco.php', {}, {    
    'save': {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
});	
var input = {"un":something,"cn":name};
resGajala.save(input,function(response){
});  
$window.location.reload();
	 
	console.log(name+'complete');

	document.getElementById("co").style.display = "none";
}


var url = './ranksre.php/?un='+something;
var dp2 = $resource(url,{},{
	'query' : {
		method : 'GET',
		isArray : true
	}
	});
	dp2.query(function(response){
		$scope.datapr = [];
		for(var i = 0;i<response.length; i++){
			$scope.datapr.push(response[i]);
			//console.log(response[i].cdesc);
		}
		console.log($scope.datapr[0]);
		//$scope.Genderl = $scope.datap;
	});	

}]);
})();