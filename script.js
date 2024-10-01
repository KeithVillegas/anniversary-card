import './components/quiz/quiz-component.js';
import './components/landing-page/landing-page.js';
import './components/messages/messages.js';
import './components/image-carousel/image-carousel.js';

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

const loadCarousel = async () => {
    try {
        const response = await fetch('./components/image-carousel/image-carousel.html');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const html = await response.text();
        document.getElementById('image-carousel').innerHTML = html;
        // Load CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './components/image-carousel/image-carousel.css';
        document.head.appendChild(link);
        // Load JS
        const script = document.createElement('script');
        script.src = './components/image-carousel/image-carousel.js';
        document.body.appendChild(script);
    } catch (err) {
        console.error('Error loading image carousel page:', err);
    }
};

const loadMessages = async () => {
    try {
        console.log('Loading messages component...');
        const response = await fetch('./components/messages/messages.html');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const html = await response.text();
        document.getElementById('messages').innerHTML = html;
        console.log('Messages component loaded successfully');
    } catch (err) {
        console.error('Error loading messages page:', err);
    }
};

loadLandingPage();
loadCarousel();
loadMessages();