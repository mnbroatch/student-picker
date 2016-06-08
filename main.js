var studentArray = [];

document.addEventListener('DOMContentLoaded',function() {

	document.querySelector('.submit-button').addEventListener('click', function() {
		if (document.getElementById('studentInput').value){
			addStudentsToArray();
			clearInputBox();
			refreshList();
		}
	});

	document.querySelector('.random-button').addEventListener('click', function() {
		updateRandomStudent();
	});

	document.querySelector('.team-button').addEventListener('click', function() {
		clearTeams();
		makeTeams();	
	});

});





function addStudentsToArray() {
	var studentString = document.getElementById('studentInput').value;
	studentArrayTrimmed = studentString.split(',').map(function(entry){
		return entry.trim();
	});
	studentArray = studentArray.concat(studentArrayTrimmed);
}

function clearInputBox() {
	document.getElementById('studentInput').value = "";
}

function clearTeams() {
	var teams = document.getElementsByClassName('team-list')[0];
	if(teams){
		teams.remove();
	}
}

function refreshList() {
	var studentListField = document.getElementById("studentList");
	var studList = document.createElement('ol');
	while (studentListField.firstChild)
		studentListField .removeChild(studentListField.firstChild);

	for (var stud in studentArray) {
		var student = document.createElement('li');
		var newText = document.createTextNode(studentArray[stud]);
		student.appendChild(newText);
		studList.appendChild(student);
	}
	studentListField .appendChild(studList);
}

function updateRandomStudent(){
	var randomStudentField = document.getElementById("randomStudent");
	randomStudentField.removeChild(randomStudentField.firstChild);
	var randomStudent = studentArray[Math.floor(Math.random() * studentArray.length)];
	var newText = document.createTextNode(randomStudent);
	randomStudentField.appendChild(newText);
}

function makeTeams(){
	var teamListField = document.getElementById("teamBox");
	var teamList = document.createElement('ol');
	teamList.className="team-list";
	var shuffledStudentArray = shuffle(studentArray);
	var indexOfArray = 0;

	var teamSize = document.getElementById("numberBox").value;
	var numTeams = Math.ceil(studentArray.length / teamSize);

	for (var i = 0; i<numTeams; i++){
		var teamToAdd = document.createElement('li');
		var studentStr = "";
		for (var j = 0; j < teamSize; j++){
			if (shuffledStudentArray[indexOfArray]){
				studentStr += shuffledStudentArray[indexOfArray];
				indexOfArray++;
				if (j < teamSize - 1 && indexOfArray < shuffledStudentArray.length){
					studentStr += ", ";
				}
				var newText = document.createTextNode(studentStr);
			}
		}
		teamToAdd.appendChild(newText);
		teamList.appendChild(teamToAdd);
	}
	teamListField.appendChild(teamList);
}


function shuffle(arr) {
	var arrToReturn = arr;
	var temp;
	for (var i = 0, len = studentArray.length; i<len; i++) {
		var randIndex = Math.floor(Math.random() * (len - i)) + i;
		temp = arr[i];
		arrToReturn[i] = arr[randIndex];
		arrToReturn[randIndex] = temp;
	}
	return arrToReturn;
}

















