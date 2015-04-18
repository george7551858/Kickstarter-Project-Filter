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

jQuery.expr[":"].icontains = jQuery.expr.createPseudo(function(arg) {
    return function( elem ) {
        return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});

(function() {
    var $filterDiv =  $('<div id="filterDiv">').css({
        "position": "fixed",
        "right": 0,
        "bottom": 0
    }).appendTo("body");
    var $filterTxt = $('<input type="text" id="filterTxt" placeholder="Filter String"/>').appendTo($filterDiv);

    var doFilter =  function(){
        $("li.project").show();
        var keyword = jQuery.trim($("#filterTxt").val());
        console.log("keyword",keyword);
        if( keyword === "" ) {
            $filterTxt.css("border-color", "#d9d9de");
            return;
        }
        else {
            $filterTxt.css("border-color", "#2bde73");
            $(".project-blurb:icontains("+keyword+")").closest("li.project").hide("slow");
        }
    };

    $filterTxt.on("keypress",function(event){
        if ( event.which == 13 ) doFilter();
    });



    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    var target = document.querySelector('#projects_list');

    var observer = new MutationObserver(function(mutations) {
        /*mutations.forEach(function(mutation) {
            console.log(mutation.type);
        });*/
        doFilter();
    });

    observer.observe(target, { childList: true});

})();
