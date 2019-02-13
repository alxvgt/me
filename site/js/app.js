window.addEventListener('load', async e => {
    await fetchTrending();

    if ('serviceWorker' in navigator) {
        try {
            navigator.serviceWorker.register('service-worker.js');
            console.log('SW registered');

        } catch (error) {
            console.log('SW failed');

        }
    }
});