// ==UserScript==
// @name        Rddit Rez
// @namespace   Rddit_Rez
// @description Fit the Reddit comment area to the sidebar. This should adjust the comment area width on smaller-resolution screens (1024x768px)
// @include     https://www.reddit.com/*
// @version     0.1.1
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle("DIV.sitetable {display:table-cell;}");

/* comment */
GM_addStyle("DIV.md, DIV.md P {font-family:\'Arial\',\'Helvetica\',\'Helv\',\'sans-serif\',\'sans\'; font-size:100%}");
