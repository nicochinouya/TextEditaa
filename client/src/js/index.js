// Import necessary modules
import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

// Clear the main element
const main = document.querySelector('#main');
main.innerHTML = '';

// Function to display a loading spinner
const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
    <div class="loading-container">
      <div class="loading-spinner" />
    </div>
  `;
  main.appendChild(spinner);
};

// Create an instance of the Editor class
const editor = new Editor();

// Check if the editor instance is undefined
if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // Register the workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
