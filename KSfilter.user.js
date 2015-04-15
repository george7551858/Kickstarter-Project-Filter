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
   $('<input type="text" id="filterTxt"/>').appendTo("div.back-to-top");
    var $filterBtn = $('<button id="filterBtn" type="button">Filter</button>');
    $filterBtn.appendTo("div.back-to-top");
     var $clearBtn = $('<button id="clearBtn" type="button">Clear</button>');
     $clearBtn.appendTo("div.back-to-top");
    $filterBtn.on("click",function(event){
        event.preventDefault();
        var keyword = $("#filterTxt").val();
       $(".project-blurb:contains("+keyword+")").closest("li.project").hide("slow");        
    });
    $clearBtn.on("click",function(event){
        event.preventDefault();
       $("li.project").show();
    });
    
})();
