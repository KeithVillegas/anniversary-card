function calculateScore() {
    let score = 0;
    const q1 = document.querySelector('input[name="q1"]:checked');
    
    if (q1 && q1.value === 'correct') {
        score++;
    }

    alert(`You scored ${score} out of 1!`);
}