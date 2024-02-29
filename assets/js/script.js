let clickCount = 0;

function incrementClickCount() {
    clickCount++;
    updateClickCount();
}

function updateClickCount() {
    const clickCountElement = document.getElementById('click-count');
    clickCountElement.textContent = clickCount;
}
