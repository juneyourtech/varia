// ==UserScript==
// @name        TrekMovie/DSC
// @namespace   TrekMov_dsc_Rez
// @description Enhances visibility and explanation of the TrekMovie comments loader. Small font fixes. (All trademarks are belong to their respective owners.)
// @updateURL   https://github.com/juneyourtech/varia/master/TrekMov_dsc_Rez.user.js
// @include     https://trekmovie.com/*
// @version     0.1.1
// @grant       GM_addStyle
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)

//BODY, FONTS //general-purpose

GM_addStyle("HTML > BODY {font-family:\'Georgia\',\'Times New Roman\',\'Times\',\'serif\',\'PT Serif\';}") //

//Text
GM_addStyle("DIV.entry-content > P {font-size:85%; line-height:1.6em;}") //

//Airiam
GM_addStyle("DIV.entry-content > H3 {font-size:141%;}") //Original: 24px

//GM_addStyle("DIV.dn {font-size:12px; line-height:1.5em; color:black;}") //

GM_addStyle("DIV#wpcomm .wc-comment-text {font-family:\'Arial\',\'Helvetica\',\'Helv\',\'sans-serif\'; color:black; font-size:80%;}")

GM_addStyle("DIV.wpdiscuz-loading-bar:after {content:\'Loading Disqus comments...\'; display:block; color:black; background-color:rgba(255,255,255,0.5); border-top:solid 1px Silver; font-size:x-small;}") //