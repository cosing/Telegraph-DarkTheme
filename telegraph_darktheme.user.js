// ==UserScript==
// @name         Telegraph Dark
// @namespace    https://github.com/maffinca69/Telegraph-DarkTheme
// @version      1.1
// @description  Dark theme for the site Telegraph
// @author       maffinca69
// @author       cosing
// @match        https://telegra.ph/*
// @grant        GM_addStyle
// @run-at       document-start
// @downloadURL  https://raw.githubusercontent.com/maffinca69/Telegraph-DarkTheme/master/telegraph_darktheme.user.js
// @updateURL    https://raw.githubusercontent.com/maffinca69/Telegraph-DarkTheme/master/telegraph_darktheme.user.js
// ==/UserScript==

(function() {
    'use strict';

    const darkThemeCss = `/*  Background  */
body {
  background-color: #202020;
}

/*  Main text color */
.tl_article .tl_article_content, .tl_article .tl_article_content .ql-editor * {
  color: #f3f4f8;
}

.tl_article h1, .tl_article h2, .tl_article .tl_article_content, .tl_article .tl_article_content {
  color: #79828B;
}

/*  The color of the side of the text */
.tl_article.tl_article_edit.title_focused [data-label]:after {
  color: #f3f4f8;
}

/*  The publish and edit button  */
.tl_article_edit .publish_button, .tl_article_saving .publish_button, .tl_article .share_button, .tl_article_editable .edit_button {
  color: white;
  background-color: #404040;
}

::selection {
    background-color: #444444 !important;
    color: #ffffff !important;
}

::-moz-selection {
    background-color: #444444 !important;
    color: #ffffff !important;
}
    `;

    GM_addStyle(darkThemeCss);
})();