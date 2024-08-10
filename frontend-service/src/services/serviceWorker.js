// serviceWorker.js
// This is a basic example; you can use create-react-app's default service worker or customize it

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(
        /^127(?:\.[0-9]+){0,2}\.[0-9]+$/
    )
);

const register = () => {
    if ('serviceWorker' in navigator) {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

        if (isLocalhost) {
            checkValidServiceWorker(swUrl);
        } else {
            registerValidSW(swUrl);
        }
    }
};

const registerValidSW = (swUrl) => {
    navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
            console.error('Service Worker registration failed:', error);
        });
};

const checkValidServiceWorker = (swUrl) => {
    fetch(swUrl)
        .then((response) => {
            if (
                response.status === 404 ||
                response.headers.get('content-type')?.indexOf('javascript') === -1
            ) {
                navigator.serviceWorker.ready.then((registration) => {
                    registration.unregister().then(() => {
                        window.location.reload();
                    });
                });
            } else {
                registerValidSW(swUrl);
            }
        });
};

const unregister = () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then((registration) => {
            registration.unregister();
        });
    }
};

export { register, unregister };
