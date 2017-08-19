// ==UserScript==
// @name        JS console
// @namespace   console
// @description chrome_console
// @include     chrome://global/content/console.xul
// @version     1
// @grant       GM_addStyle
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)

GM_addStyle("xul:box.console-row[type=\"warning\"] {overflow-x:auto; mine-height:80px;}");
