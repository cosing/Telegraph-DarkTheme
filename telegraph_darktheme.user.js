// ==UserScript==
// @name         Telegraph Dark
// @namespace    https://github.com/maffinca69/Telegraph-DarkTheme
// @version      1.0
// @description  Dark theme for the site Telegraph
// @author       maffinca69
// @author       cosing
// @match        https://telegra.ph/*
// @resource     DARK_CSS https://raw.githubusercontent.com/maffinca69/Telegraph-DarkTheme/master/styles.css
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @run-at       document-start
// @downloadURL  https://raw.githubusercontent.com/maffinca69/Telegraph-DarkTheme/master/telegraph_darktheme.user.js
// @updateURL    https://raw.githubusercontent.com/maffinca69/Telegraph-DarkTheme/master/telegraph_darktheme.user.js
// ==/UserScript==

(function() {
    'use strict';
    const css = GM_getResourceText("DARK_CSS");
    
    if (css) {
        GM_addStyle(css);
    }else{
        console.error("Failed to load Telegraph Dark Theme CSS.");
    }
})();