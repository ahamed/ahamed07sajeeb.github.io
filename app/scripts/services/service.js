'use strict';
angular.module('ipAssignment')
.service('coverFactory',function(){
	
	

	var teacher = [
		{
			name: "MD. Monwarul Islam",
			designamtion: "Lecturar",
			dept : "Computer Science and Engineering",
			university: "Jagannath University, Dhaka-1100"
		}
	];

	var student = [
		{
			name: "Sajeeb Ahamed",
			dept: "Computer Science and Engineering",
			batch: "Third",
			roll: "B-110305035",
			university: "Jagannath University, Dhaka-1100"
		}
	];

	this.getTeacher = function(index){
		return teacher[index];
	};
	
	
});