// ==UserScript==
// @name        NRJ
// @namespace   nrj
// @description Turn off background animation resource hog
// @include     http://nrj.ee/*
// @include     http://player.nrj.ee/*
// @version     1
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle("BODY.Site {animation:none;}") //Removes animation