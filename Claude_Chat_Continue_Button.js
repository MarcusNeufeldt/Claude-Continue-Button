// ==UserScript==
// @name         Claude Chat Continue Button
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Adds a Continue button to Claude chat
// @match        https://claude.ai/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addContinueButton() {
        const targetArea = document.querySelector('.flex.flex-col.bg-bg-000');
        if (!targetArea) return;

        // Check if the button already exists
        if (document.getElementById('claudeContinueButton')) return;

        const continueButton = document.createElement('button');
        continueButton.textContent = 'Continue';
        continueButton.id = 'claudeContinueButton';
        continueButton.style.cssText = `
            background-color: #4CAF50;
            border: none;
            color: white;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 10px 0;
            cursor: pointer;
            border-radius: 4px;
        `;

        continueButton.addEventListener('click', function() {
            const inputArea = document.querySelector('[contenteditable="true"]');
            if (inputArea) {
                inputArea.textContent = 'Continue';
                inputArea.dispatchEvent(new Event('input', { bubbles: true }));

                // Focus on the input area
                inputArea.focus();

                // Wait a short moment for the UI to update
                setTimeout(() => {
                    // Find and click the send button
                    const sendButton = document.querySelector('button[aria-label="Send Message"]');
                    if (sendButton) {
                        sendButton.click();
                    } else {
                        console.log('Send button not found');
                    }
                }, 100);
            }
        });

        targetArea.appendChild(continueButton);
    }

    // Run the function initially after a short delay
    setTimeout(addContinueButton, 2000);

    // Use a MutationObserver to check for changes in the DOM
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                addContinueButton();
            }
        });
    });

    // Start observing the document body for changes
    observer.observe(document.body, { childList: true, subtree: true });
})();
