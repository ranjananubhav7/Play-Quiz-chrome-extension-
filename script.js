fetch('https://opentdb.com/api.php?amount=1&difficulty=easy&type=boolean')
    .then(data => data.json())
    .then(questionData => {
        const questionText = questionData.results[0].question;
        const correctAns = questionData.results[0].correct_answer;
        const questionElement = document.getElementById('questionElement');
        questionElement.innerHTML = questionText;
        const ans = document.getElementById('correct');
        ans.innerHTML = correctAns;
    })
function Load(){
    fetch('https://opentdb.com/api.php?amount=1&difficulty=easy&type=boolean')
    .then(data => data.json())
    .then(questionData => {
        document.getElementById('correct').style.display = 'none';
        const questionText = questionData.results[0].question;
        const correctAns = questionData.results[0].correct_answer;
        const questionElement = document.getElementById('questionElement');
        questionElement.innerHTML = questionText;
        const ans = document.getElementById('correct');
        ans.innerHTML = correctAns;
    })
}


document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('Btn');
    // onClick's logic below:
    link.addEventListener('click', function() {
        document.getElementById('correct').style.display = 'block';
        setTimeout(function() {
            Load();
          }, 2500);
    });
});
