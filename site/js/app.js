window.addEventListener('load', async e => {
    if ('serviceWorker' in navigator) {
        try {
            navigator.serviceWorker.register('/js/service-worker.js');
            console.log('SW registered');

        } catch (error) {
            console.log('SW failed');

        }
    }
});

let deferredPrompt;
const addBtn = document.querySelector('#installer');
console.log(addBtn);
window.addEventListener('beforeinstallprompt', (e) => {
    console.log(addBtn);
    console.log('beforeinstallprompt' + 1);
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
    console.log('beforeinstallprompt' + 2);
  // Update UI notify the user they can add to home screen
  addBtn.style.opacity = 100;
    console.log(addBtn);
    console.log('beforeinstallprompt' + 3);
});

document.getElementById("installer").addEventListener('click', (e) => {
  // hide our user interface that shows our A2HS button
        console.log(addBtn);
    console.log('click' + 1);
  addBtn.style.opacity = 0;
    
    console.log('click' + 2);
  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
            console.log(addBtn);
    console.log('click' + 3);
});
