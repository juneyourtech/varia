// ==UserScript==
// @name        NRJ
// @namespace   nrj
// @description Turn off background animation resource hog
// @updateURL https://github.com/juneyourtech/varia/raw/master/NRJ.user.js
// @include     http://nrj.ee/*
// @include     http://player.nrj.ee/*
// @version     1.0.0.1
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle("BODY.Site {animation:none;}") //Removes animation
