// ==UserScript==
// @name          Ilmateenistus Rez pisitekst
// @namespace     ilmateenistus_pisi
// @description  Vaatlusandmete eriti väike tekst, oleks tabelist saaks teksti võimalikult kiiresti valida.
// @updateURL 
// @version 0.1.1.1
// @include       *.ilmateenistus.ee/*
// @grant         GM_addStyle
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)
/* ____80_character_separator________________________________________________ */

/* ÜLDISED READ change font here */
GM_addStyle("TABLE.table-compressed > TBODY[aria-live=\'polite\'] > TR:not(:nth-child(-n+3)):not(:nth-last-child(-n+6)) > TD {border-top:none; border-bottom:none; font-family:Verdana; font-size:1px; line-height:1px;}");
/* line-height:6px; font-size:6px; - added the most space;
   Arial: font-size:8px; line-height:8px;
   background-color:#99ccff; */
