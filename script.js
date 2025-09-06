document.addEventListener("DOMContentLoaded", function() {
    const loadComponent = (url, elementId) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.innerHTML = data;
                } else {
                    console.error(`Element with id "${elementId}" not found.`);
                }
            })
            .catch(error => console.error(`Error loading component from ${url}:`, error));
    };

    loadComponent('sidebar.html', 'sidebar-container');
    loadComponent('footer.html', 'footer-container');
});