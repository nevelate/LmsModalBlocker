"use strict"
// Enable the content script by default.
let enabled = true
const keys = ["enabled", "item"]

chrome.storage.sync.get(keys, (data) => {
    if (data.enabled === false) {
        enabled = false
    }
    // Only start observing the DOM if the extension is enabled and there is text to blur.
    if (enabled) {
        const modal = document.getElementById("attendanceModal");
        const modal_backdrop = document.getElementsByClassName("modal-backdrop")[0];
        modal.remove();
        modal_backdrop.remove();
    }
})