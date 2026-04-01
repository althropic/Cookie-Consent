/**
 * Cookie Consent Banner Script
 * Handles banner visibility and persists user consent using localStorage
 */

(function() {
    'use strict';

    // Configuration
    const STORAGE_KEY = 'cookie-consent-accepted';
    
    // DOM Elements
    const cookieBanner = document.getElementById('cookie-consent');
    const acceptButton = document.getElementById('accept-cookies');

    /**
     * Check if user has previously accepted cookies
     * @returns {boolean} True if consent was previously given
     */
    function hasConsent() {
        return localStorage.getItem(STORAGE_KEY) === 'true';
    }

    /**
     * Save user's cookie consent to localStorage
     */
    function saveConsent() {
        localStorage.setItem(STORAGE_KEY, 'true');
    }

    /**
     * Hide the cookie consent banner with animation
     */
    function hideBanner() {
        if (cookieBanner) {
            cookieBanner.classList.add('hidden');
            // Remove from DOM after animation completes
            setTimeout(function() {
                cookieBanner.style.display = 'none';
            }, 300);
        }
    }

    /**
     * Show the cookie consent banner
     */
    function showBanner() {
        if (cookieBanner) {
            cookieBanner.style.display = 'block';
            // Small delay to ensure display:block is applied before removing hidden class
            setTimeout(function() {
                cookieBanner.classList.remove('hidden');
            }, 10);
        }
    }

    /**
     * Handle accept button click
     * @param {Event} event - Click event
     */
    function handleAccept(event) {
        event.preventDefault();
        saveConsent();
        hideBanner();
    }

    /**
     * Initialize the cookie consent banner
     */
    function init() {
        // Check if user has already consented
        if (hasConsent()) {
            // Hide banner if consent already given
            if (cookieBanner) {
                cookieBanner.style.display = 'none';
            }
        } else {
            // Show banner if no prior consent
            showBanner();
        }

        // Attach event listener to accept button
        if (acceptButton) {
            acceptButton.addEventListener('click', handleAccept);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();