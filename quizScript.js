var currentQuestion = 0;
var score = 0; 
var totalQuestions = 5; 
var alreadyPicked = []
var generate = 0


var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1'); 
var opt2 = document.getElementById('opt2'); 
var opt3 = document.getElementById('opt3'); 
var opt4 = document.getElementById('opt4'); 
var nextButton = document.getElementById('nextButton');
var resultCont =document.getElementById('result');


function loadQuestion(questionIndex) {
	generate = Math.floor((Math.random()*20)+1);
	var q = questions[generate];

	while (alreadyPicked.includes(q) == true) {
		generate = Math.floor((Math.random()*20)+1);
	}

	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1; 
	opt2.textContent = q.option2; 
	opt3.textContent = q.option3; 
	opt4.textContent = q.option4; 
	alreadyPicked.push(q)
};

function loadNextQuestion(){
		var selectedOption = document.querySelector('input[type=radio]:checked');
		// if(!selectedOption){
		// 	alert('Please select your answer')
		// 	return;
		// }
		var userAnswer = selectedOption.value;
		if(questions[generate].answer == userAnswer){
			score += 10; 
		}
		selectedOption.checked = false;
		currentQuestion++;

		//Once you are done with questions
		if(currentQuestion == totalQuestions){
			container.style.display = 'none'; 
			resultCont.style.display = 'none';
			resultCont.style.display = '';
			resultCont.textContent = 'Your score is: ' + score;
			return; 
		}

	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion); 





