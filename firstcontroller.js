(function(){
var module = angular.module('firstmodule',[]);
app.controller('first', ['$scope', '$resource','$location','$filter','$window', function ($scope, $resource, $location,$filter,$window) {

var somethingb = localStorage.getItem("un");
if(!somethingb){
		 $location.url("/");
}
if(somethingb){
		 $location.url("/home");
}

$scope.$watch("userName",function(Value){
if(typeof Value != "undefined")
	if(!Value.match(/^[a-zA-Z]+$/g))
	{
		$scope.usernameValid = true;
	}
	else{
		$scope.usernameValid = false;
	}		
});

$scope.createMeetup = function () {	
	console.log($scope.userName);
var resGajala = $resource('./index.bak.php', {}, {    
    'save': {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
});	
var input = {"un":$scope.userName,"pw":$scope.pswd,"cn":$scope.cName,"em":$scope.email	};
resGajala.save(input,function(response){
	if(response==" ")
	{
		//$window.location.reload();
		$location.url('/');
	}
	else
	{
		var data = Object.keys(response);
		$scope.data = [];
		for(var i = 0;i<data.length-2; i++){
		$scope.data.push(response[data[i]]);
		}
		$scope.regerr=$scope.data.join(" ");
	}
});  
}

$scope.createMeetupl = function () {	 
var dp = $resource('./lc.php',{},{
	'query' : {
		method : 'GET',
		isArray : false
	}
	});
var l=0;
dp.query(function(response){
var data = Object.keys(response);
console.log(data[0]);
$scope.data = [];
for(var i = 0;i<data.length-2; i++){
$scope.data.push(response[data[i]]);
}
for(var i = 0;i<data.length-2; i++){
		if($scope.data[i] == $scope.pswdl)
		{
			l=1;
		}
		}
		//console.log(l);
		if(l == 1)
		{
			        localStorage.setItem("un",$scope.userNamel);
                    $location.url('/home');		
		}
		else if(l==0)
		{
			$scope.er="Please enter correct credentials";
		}
	}); 
}
}]);
})();