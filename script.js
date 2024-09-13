import './components/quiz/quiz-component.js';
import './components/landing-page/landing-page.js';

const loadLandingPage = async () => {
    try {
        const response = await fetch('./components/landing-page/landing-page.html');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const html = await response.text();
        document.getElementById('landing-page').innerHTML = html;
    } catch (err) {
        console.error('Error loading landing page:', err);
    }
};

const loadQuizComponent = async () => {
    try {
        const response = await fetch('./components/quiz/quiz-component.html');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const html = await response.text();
        document.getElementById('quiz-component').innerHTML = html;
    } catch (err) {
        console.error('Error loading component:', err);
    }
};

loadLandingPage();
loadQuizComponent();
