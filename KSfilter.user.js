// ==UserScript==
// @name         KickStarter Project Filter
// @description  Filter out some Kickstarter projects with a blacklist.
// @author       george7551858
// @version      0.1
// @namespace    https://github.com/george7551858
// @homepage     https://github.com/george7551858/Kickstarter-Project-Filter
// @license      The MIT License
// @include      https://www.kickstarter.com/discover*
// @run-at       document-end
// @grant        none
// @require     http://code.jquery.com/jquery-2.1.3.min.js
// ==/UserScript==

(function() {
    $(".project-blurb:contains('iPhone')").closest("li.project").hide();
})();