
'use strict';

angular.module("ipAssignment")
.controller('CoverController',['$scope','coverFactory',function($scope,coverFactory){

$scope.teacher = coverFactory.getTeacher(0);

$scope.student = coverFactory.getStudent(0);
	
}])

.controller('AssignmentController',['$scope','assignmentFactory',function($scope,assignmentFactory){

	$scope.information = assignmentFactory.getInfo(0);
	


}])
.controller('MenuController',['$scope',function($scope){
	$scope.menuItem = 'cover';
	
}])
.controller('AnswerController',['$scope','ansFactory',function($scope,ansFactory){

	$scope.answer = ansFactory.getAnsOfQues();

}])
;