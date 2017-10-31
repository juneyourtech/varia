// ==UserScript==
// @name        Politiko Rez
// @namespace   Politiko_Rez
// @description Separate Politico's in-text product placement. Sure, product placement is ok, but please make sure it's separated from the main text. Having product placement is okay-ish, as it might add additional context as to which industry group feels affected by the news.
// @include     https://www.politico.com/*
// @version     0.1
// @grant       GM_addStyle
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)

GM_addStyle("DIV.story-text > P[style*=\"line-height:\"][style*=\"1.5em\"] {border:solid 1px rgba(128,0,0,0.6); padding-left:5px; padding-right:5px;}"); //red
//Full contents: "line-height:1.5em;margin-bottom:1em;"

GM_addStyle("DIV.story-text > P[style*=\"line-height:\"][style*=\"1.5em\"]:before {content:\'A commercial message from one of Politico\\'s supporters\:\'; display:block; color:rgba(128,0,0,0.9); border-bottom:solid 1px rgba(128,0,0,0.5); padding-bottom:3px;}");
//Note, that double backspace has to be used to escape an apostrophe.