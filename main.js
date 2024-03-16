function updateOnlineCount() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.onlineCount) {
            localStorage.onlineCount = Number(localStorage.onlineCount) + 1;
        } else {
            localStorage.onlineCount = 1;
        }
        document.getElementById("online-count").textContent = `Online: ${localStorage.onlineCount}`;
    } else {
        document.getElementById("online-count").textContent = "LocalStorage not supported";
    }
}

document.addEventListener("change", updateOnlineCount());

window.addEventListener('beforeunload', function() {
    localStorage.onlineCount = Number(localStorage.onlineCount) - 1;
});
