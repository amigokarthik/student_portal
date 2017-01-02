(function(){
var module = angular.module('thirdmodule',[]);
app.controller('third', ['$scope', '$resource','$location','$filter','$window', function ($scope, $resource, $location,$filter,$window) {

$scope.createMeetup = function () {	
	console.log($scope.userName);
var resGajala = $resource('./adminc.php', {}, {    
    'save': {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
});	
var input = {"cn":$scope.cName,"cd":$scope.cdesc};
resGajala.save(input,function(response){
});  
$window.location.reload();
}

var dp = $resource('./scourser.php',{},{
	'query' : {
		method : 'GET',
		isArray : true
	}
	});
	dp.query(function(response){
		$scope.datap = [];
		for(var i = 0;i<response.length; i++){
			$scope.datap.push(response[i]);
			//console.log(response[i].cdesc);
		}
		//console.log($scope.datap[0]);
		//$scope.Genderl = $scope.datap;
	});	
$scope.Gender = ["1", "2", "3"];
$scope.rank = function(name,course) {


var resGajala = $resource('./rank.php', {}, {    
    'save': {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
});	
var res=document.getElementById("rnk").value;
//var res=$scope.phone;
console.log(res);
var input = {"un":name,"cn":course,"rn":res};
resGajala.save(input,function(response){
});  
$window.location.reload();
//document.getElementById("co").style.display = "none";
}


}]);
})();