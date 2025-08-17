export const createBaseUrl = () => {
    if (window.location.host.includes('localhost')) {
        return 'http://localhost:7071';
    } else {
        return '';
    }
};