// ==UserScript==
// @name         Overleaf View Cycle + Direct Hotkeys
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Cycle Split/Editor/PDF with Ctrl+Alt+Y and direct hotkeys
// @match        https://www.overleaf.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

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

        // If dropdown closed, open temporarily
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

            if (current === 1)       next = 2;  // Split → Editor
            else if (current === 2)  next = 3;  // Editor → PDF
            else                     next = 1;  // PDF → Split

            clickLayoutOption(next);
        }, 10);
    }

    function setLayout(n) {
        openDropdown();
        setTimeout(() => clickLayoutOption(n), 10);
    }

    // Hotkeys
    window.addEventListener("keydown", (e) => {
        if (!e.ctrlKey || !e.altKey) return;

        const key = e.key.toLowerCase();
        if (["y", "1", "2", "3"].includes(key)) e.preventDefault();

        if (key === "y") cycleLayout();
        if (key === "1") setLayout(2);  // Editor Only
        if (key === "2") setLayout(3);  // PDF Only
        if (key === "3") setLayout(1);  // Split View
    });

})();
