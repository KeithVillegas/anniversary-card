// Fetch the quiz component and insert it into the page
fetch('./components/quiz/quiz-component.html')
    .then(response => response.text())
    .then(data => {
        // Insert the quiz component into the div with id "quiz-component"
        document.getElementById('quiz-component').innerHTML = data;

        // After the quiz component is loaded, load the quiz.js script
        const script = document.createElement('script');
        script.src = './components/quiz/quiz-component.js';
        document.body.appendChild(script);
    })
    .catch(err => console.log('Error loading component:', err));
