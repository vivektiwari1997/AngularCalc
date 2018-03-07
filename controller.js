app.controller("mycntrl",mycontroller);
function mycontroller($scope,myfactory){

    $scope.add=function (){
        var result=myfactory.calculate1(parseInt($scope.firstno),parseInt($scope.secondno));
        $scope.resultname=result;
    }
    $scope.subtract=function (){
        var result=myfactory.calculate2($scope.firstno,$scope.secondno);
        $scope.resultname=result;
    }
    $scope.multiply=function (){
        var result=myfactory.calculate3($scope.firstno,$scope.secondno);
        $scope.resultname=result;
    }
    $scope.divide=function (){
        var result=myfactory.calculate4($scope.firstno,$scope.secondno);
        $scope.resultname=result;
    }
}