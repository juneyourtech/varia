// ==UserScript==
// @name        Slashdot Rez
// @namespace   slashdot_rez
// @description Width issues. The userscript was built around NoScript and an adblocker being active
// @include     *.slashdot.org/*
// @include     https://slashdot.org/*
// @version     0.1.0
// @grant       GM_addStyle
// ==/UserScript==
/*
// @updateURL https://github.com/juneyourtech/GM_Wikipedia/raw/master/wikipedia_vector.user.js
*/

/* hp Firefox profile Surf 2:
   Created: N., 18.05.2017., 06:42:31
  Modified: N., 18.05.2017., 06:43:28 */

/* COMMENTS SECTION: Make wider: Removes the right margin of comments
   section. Assume that NoScript and/or and adblocker are installed and
   turned on. */
GM_addStyle("DIV.main-content > DIV#comments.a2commentwrap {margin-right:0px;}");

/* BOTTOM GREEN BAR | make fluid | R., 30.08.2019. */
GM_addStyle("#fhft, BODY > footer#ft {min-width:823px;}");

/* COMMENTS GRAY TEXT (make darker) */
GM_addStyle("LI.oneline > div > .commentBody, DIV#comments .oneline > div > div > div > p {color:#3D3D3D !important;}");

/* BOTTOM, BELOW FOOTER | This is the quote thing. */
GM_addStyle("SECTION.bq {top:0px; width:100%; min-width:unset; max-width:478px; margin-top:0px; margin-right:0px; margin-bottom:10px;}");
