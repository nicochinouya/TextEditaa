// Get the button element with id 'buttonInstall'
const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); // Prevent the default behavior of the event
    butInstall.style.visibility = 'visible'; // Make the button visible
    butInstall.textContent = 'Install!'; // Set the button text to 'Install!'
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    butInstall.setAttribute('disabled', true); // Disable the button
    butInstall.textContent = 'Installed!'; // Set the button text to 'Installed!'
});

// TODO: Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('😌', 'appinstalled', event); // Log the 'appinstalled' event
});
