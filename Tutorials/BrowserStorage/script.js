// DOM Elements
const localInput = document.getElementById('localInput');
const sessionInput = document.getElementById('sessionInput');
const localList = document.getElementById('localList');
const sessionList = document.getElementById('sessionList');
const saveLocalBtn = document.getElementById('saveLocalBtn');
const saveSessionBtn = document.getElementById('saveSessionBtn');
const clearStorageBtn = document.getElementById('clearStorageBtn');

// Load existing values from storage (if any)
window.onload = () => {
    loadLocalStorage();
    loadSessionStorage();
};

// Function to load and display values from LocalStorage
function loadLocalStorage() {
    const localStoredValues = JSON.parse(localStorage.getItem('localValues')) || [];
    localList.innerHTML = '';  // Clear the list
    localStoredValues.forEach(value => {
        const li = document.createElement('li');
        li.textContent = value;
        localList.appendChild(li);
    });
}

// Function to load and display values from SessionStorage
function loadSessionStorage() {
    const sessionStoredValues = JSON.parse(sessionStorage.getItem('sessionValues')) || [];
    sessionList.innerHTML = '';  // Clear the list
    sessionStoredValues.forEach(value => {
        const li = document.createElement('li');
        li.textContent = value;
        sessionList.appendChild(li);
    });
}

// Save to LocalStorage
saveLocalBtn.addEventListener('click', () => {
    const localValue = localInput.value;
    if (localValue) {
        let localStoredValues = JSON.parse(localStorage.getItem('localValues')) || [];
        localStoredValues.push(localValue);
        localStorage.setItem('localValues', JSON.stringify(localStoredValues));
        localInput.value = '';  // Clear the input
        loadLocalStorage();  // Reload the list
    }
});

// Save to SessionStorage
saveSessionBtn.addEventListener('click', () => {
    const sessionValue = sessionInput.value;
    if (sessionValue) {
        let sessionStoredValues = JSON.parse(sessionStorage.getItem('sessionValues')) || [];
        sessionStoredValues.push(sessionValue);
        sessionStorage.setItem('sessionValues', JSON.stringify(sessionStoredValues));
        sessionInput.value = '';  // Clear the input
        loadSessionStorage();  // Reload the list
    }
});

// Clear both storages
clearStorageBtn.addEventListener('click', () => {
    localStorage.clear();
    sessionStorage.clear();
    localList.innerHTML = '';  // Clear the local storage list
    sessionList.innerHTML = '';  // Clear the session storage list
    alert('All storage cleared!');
});
