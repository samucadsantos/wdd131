const today = new Date();

function formatDate(date, options) {
    return date.toLocaleDateString('en-US', options);
}

function displayDate() {
    const dateElement = document.getElementById('currentyear');

    if (dateElement) {
        dateElement.textContent = formatDate(today, { year: 'numeric' });
    }
}

function displayLastModified() {
    const lastModifiedElement = document.getElementById('lastmodified');

    if (lastModifiedElement) {
        const lastModifiedDate = new Date(document.lastModified);
        const options = { 
                year: 'numeric', 
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            };

        lastModifiedElement.textContent = formatDate(lastModifiedDate, options);
    }
}

displayDate();
displayLastModified();