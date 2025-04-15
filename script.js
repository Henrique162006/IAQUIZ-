const questions = [
    {
        question: "O que é Inteligência Artificial?",
        options: ["Um tipo de robô físico", "Tecnologia que simula a inteligência humana", "Um sistema operacional", "Um aplicativo de redes sociais"],
        answer: 1
    },
    {
        question: "Qual dessas áreas é um exemplo de IA no dia a dia?",
        options: ["Assistente de voz (como Siri ou Alexa)", "Lâmpada comum", "Caneta esferográfica", "Calculadora simples"],
        answer: 0
    },
    {
        question: "O que é Machine Learning?",
        options: ["Um novo tipo de máquina", "Aprendizado baseado em regras fixas", "Algoritmos que aprendem com dados", "Robôs com emoções humanas"],
        answer: 2
    },
    {
        question: "IA pode ser usada para:",
        options: ["Diagnosticar doenças", "Criar músicas", "Detectar fraudes", "Todas as alternativas"],
        answer: 3
    },
    {
        question: "Qual desses é um risco associado à IA?",
        options: ["Viés algorítmico", "Melhor desempenho de tarefas", "Economia de tempo", "Aumento da produtividade"],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

function startGame() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question-title").textContent = q.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => selectOption(i);
        optionsDiv.appendChild(btn);
    });
}

function selectOption(selected) {
    const correct = questions[currentQuestion].answer;
    if (selected === correct) {
        score++;
    }
    document.querySelectorAll("#options button").forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
    document.getElementById("score").textContent = "Você acertou " + score + " de " + questions.length + " perguntas.";
    let level = "";
    if (score <= 2) level = "Nível: Iniciante";
    else if (score <= 4) level = "Nível: Intermediário";
    else level = "Nível: Avançado";
    document.getElementById("level").textContent = level;
}
