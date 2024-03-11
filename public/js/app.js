if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
    console.log('Service Worker registrado');
}

const isOnline = () => {
    if (navigator.onLine) {
        alert('Conectado');
    } else {
        alert('Desconectado');
    }
}

window.addEventListener('online', isOnline);
window.addEventListener('offline', isOnline);

isOnline();