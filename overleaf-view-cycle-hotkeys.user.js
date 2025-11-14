// ==UserScript==
// @name         Overleaf View Cycle + Direct Hotkeys + Sidebar Toggle
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Cycle Split/Editor/PDF with Ctrl+Alt+Y, direct hotkeys, and toggle sidebar with Ctrl+E
// @match        https://www.overleaf.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    //----------------------------------------------------
    // Layout functions
    //----------------------------------------------------
    function openDropdown() {
        const btn = document.querySelector("#layout-dropdown-btn");
        if (!btn) return;
        btn.click();
    }

    function clickLayoutOption(n) {
        const option = document.querySelector(`div.layout-dropdown ul.dropdown-menu a.dropdown-item:nth-child(${n})`);
        if (option) option.click();
    }

    function getCurrentLayout() {
        const items = document.querySelectorAll("div.layout-dropdown ul.dropdown-menu a.dropdown-item");
        for (let i = 0; i < items.length; i++) {
            if (items[i].classList.contains("active")) {
                return i + 1;
            }
        }

        // Try opening dropdown if missing
        openDropdown();
        const items2 = document.querySelectorAll("div.layout-dropdown ul.dropdown-menu a.dropdown-item");
        for (let i = 0; i < items2.length; i++) {
            if (items2[i].classList.contains("active")) {
                return i + 1;
            }
        }
        return 1;
    }

    function cycleLayout() {
        openDropdown();
        setTimeout(() => {
            const current = getCurrentLayout();
            let next;

            if (current === 1) next = 2;       // Split → Editor
            else if (current === 2) next = 3;  // Editor → PDF
            else next = 1;                     // PDF → Split

            clickLayoutOption(next);
        }, 10);
    }

    function setLayout(n) {
        openDropdown();
        setTimeout(() => clickLayoutOption(n), 10);
    }

    //----------------------------------------------------
    // Sidebar toggle (Ctrl + E)
    //----------------------------------------------------
    function toggleSidebar() {
        // Look for both buttons
        const openBtn = document.querySelector(
            "button.custom-toggler.custom-toggler-west.custom-toggler-open"
        );
        const closedBtn = document.querySelector(
            "button.custom-toggler.custom-toggler-west.custom-toggler-closed"
        );

        // If sidebar is OPEN → click the open-btn to close it
        if (openBtn) {
            openBtn.click();
            return;
        }

        // If sidebar is CLOSED → click the closed-btn to open it
        if (closedBtn) {
            closedBtn.click();
            return;
        }

        console.warn("Sidebar toggle button not found.");
    }

    //----------------------------------------------------
    // Hotkeys
    //----------------------------------------------------
    window.addEventListener("keydown", (e) => {

        // Ctrl+E → sidebar toggle
        if (e.ctrlKey && !e.shiftKey && !e.altKey && e.key.toLowerCase() === "e") {
            console.log("pressed ctrl+e");
            e.preventDefault();
            toggleSidebar();
            return;
        }

        // Your existing shortcuts
        if (e.ctrlKey && e.altKey) {

            const key = e.key.toLowerCase();
            if (["y", "1", "2", "3"].includes(key)) e.preventDefault();

            if (key === "y") cycleLayout();
            if (key === "1") setLayout(2);  // Editor
            if (key === "2") setLayout(3);  // PDF
            if (key === "3") setLayout(1);  // Split
        }
    }, true);

})();
