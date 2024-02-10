const questions = [
	{
		title: "How many colors are there in a rainbow ?",
		id: 1,

		options: [
			{
				title: "Five",
				isCorrect: false,
				id: 1,
			},
			{
				title: "Eight",
				isCorrect: false,
				id: 2,
			},
			{
				title: "Seven",
				isCorrect: true,
				id: 3,
			},
			{
				title: "six",
				isCorrect: false,
				id: 4,
			},
		],
	},

	{
		title: "Where is the Eiffel Tower ?",
		id: 2,

		options: [
			{
				title: "Italy",
				isCorrect: false,
				id: 1,
			},
			{
				title: "Paris",
				isCorrect: true,
				id: 2,
			},
			{
				title: "United States",
				isCorrect: false,
				id: 3,
			},
			{
				title: "China",
				isCorrect: false,
				id: 4,
			},
		],
	},

	{
		title: "In which country was golf first played ?",
		id: 3,

		options: [
			{
				title: "Scotland",
				isCorrect: true,
				id: 1,
			},
			{
				title: "Iraq",
				isCorrect: false,
				id: 2,
			},
			{
				title: "Germany",
				isCorrect: false,
				id: 3,
			},
			{
				title: "Korea",
				isCorrect: false,
				id: 4,
			},
		],
	},

	{
		title: "What are the primary colors ?",
		id: 4,

		options: [
			{
				title: "Black , White",
				isCorrect: false,
				id: 1,
			},
			{
				title: "Green , Red , Yellow",
				isCorrect: false,
				id: 2,
			},
			{
				title: "Blue , Red",
				isCorrect: false,
				id: 3,
			},
			{
				title: "Red , Blue , Yellow",
				isCorrect: true,
				id: 4,
			},
		],
	},

	{
		title: "How many legs does a spider have ?",
		id: 5,

		options: [
			{
				title: "Two",
				isCorrect: false,
				id: 1,
			},
			{
				title: "Four",
				isCorrect: false,
				id: 2,
			},
			{
				title: "Six",
				isCorrect: false,
				id: 3,
			},
			{
				title: "Eight",
				isCorrect: true,
				id: 4,
			},
		],
	},

	{
		title: "What are Google Chrome and Firefox ?",
		id: 6,

		options: [
			{
				title: "Operation systemswo",
				isCorrect: false,
				id: 1,
			},
			{
				title: "Web browsers",
				isCorrect: true,
				id: 2,
			},
			{
				title: "Media players",
				isCorrect: false,
				id: 3,
			},
			{
				title: "Photo editors",
				isCorrect: false,
				id: 4,
			},
		],
	},

	{
		title: "Which is the largest member of the cat family ?",
		id: 7,

		options: [
			{
				title: "Lion",
				isCorrect: false,
				id: 1,
			},
			{
				title: "Tiger",
				isCorrect: true,
				id: 2,
			},
			{
				title: "Street Cat",
				isCorrect: false,
				id: 3,
			},
			{
				title: "atNone of above",
				isCorrect: false,
				id: 4,
			},
		],
	},
];

let currentQuestion = 0;
let score = 0;

function renderQuestions() {
	const parent = document.querySelector(".quiz-app");

	const renderOptions1 = () => {
		let optionsHTML = "";
		questions[currentQuestion].options.slice(0, 2).forEach((q) => {
			optionsHTML += `<button class="option" onclick="handleNext(${q.isCorrect});">${q.title}</button>`;
		});
		return optionsHTML;
	};
	const renderOptions2 = () => {
		return questions[currentQuestion].options
			.slice(2, 4)
			.map((q) => {
				return `<button id="option" class="option" onclick="handleNext(${q.isCorrect});">${q.title}</button>`;
			})
			.join("");
	};

	parent.innerHTML = ` <div class="quiz-body">
    <div class="quiz-nav"> <img src="./assets/image/google-quiz.webp" alt=""></div>
    <div class="quiz-title">${questions[currentQuestion].title}</div>
    
    <div class="quiz-options">
    <div class="row">
    ${renderOptions1()}
    </div>
    <div class="row">
    ${renderOptions2()}
    </div>
    </div>
    </div>`;
}

const handleNext = (correct) => {
	const parent = document.querySelector(".quiz-app");
	if (questions[currentQuestion + 1]) {
		currentQuestion = currentQuestion + 1;
		renderQuestions();
	} else {
		parent.innerHTML = ` <div class="quiz-nav img"> <img src="./assets/image/google-quiz.webp" alt=""></div>
        <div class="result">Your Score: ${score} <button class="reset" onclick="handleReset();">Reset</button></div>`;
	}
	if (correct) {
		score = score + 1;
	}
};
document.addEventListener("DOMContentLoaded", () => {
	renderQuestions();
});

const handleReset = () => {
	currentQuestion = 0;
	score = 0;
	renderQuestions();
};
