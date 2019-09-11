// ==UserScript==
// @name        DataLounge
// @namespace   DL
// @description Get it right old style
// @include     https://www.datalounge.com/thread*
// @version     1
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle("HTML > BODY {background:none; background-color:black;}")

GM_addStyle("NAV#nav-options {min-height:unset !important; max-height:unset !important;}")

GM_addStyle("DIV.content-area {position:absolute; top:70px; right:32%; float:none; float:unset; width:auto; max-width:500px; margin-left:8px; margin-right:3px; background:none; background-color:rgb(82,82,82);}")
//for much of the width
//margin-left, right: 30% ;max-width:480px; margin-right:auto; margin-left:auto; 
//16.10.2016: +position:absolute w/ top, right, max-width.

GM_addStyle("DIV.content {float:right; margin-left:unset; margin-right:400px; max-width:480px}") //
//margin-left:auto; margin-right:auto;

//GM_addStyle("BODY.dark .content-area {background-color:rgb(82,82,82); margin-left:unset; float:right; margin-right:33%;}") //for much of the width

GM_addStyle("DIV.post-summary.lead {font-size:11pt;}") //for much of the width

//Set font to Arial
GM_addStyle("DIV.post-body *, DIV#thread-watcher .subject, DIV#thread-watcher-canvas .item A, DIV.popover {font-family:\'Arial\',\'Arimo\',\'Helvetica\',\'Helv\',\'sans-serif\';}")

//rightside links
GM_addStyle("DIV#thread-watcher-canvas .item A {display:inline;}");
//added on 30.07.2019

//rightside links
GM_addStyle("DIV#thread-watcher-canvas .item A {margin-left:0px; padding-left:6px;}");
//added on 30.07.2019

GM_addStyle("DIV.post-body * {font-size:90%; color:black;}")

GM_addStyle("DIV.post-body > a.link {text-decoration:underline;}")

GM_addStyle("EM.pull-right {color:white;}") //27.01.2017

GM_addStyle("DIV.popover * {font-size:100%;}")

GM_addStyle("DIV#sidebar {position:fixed; top:0px; right:0px; width:33%; height:calc(100% - 51px); padding-right:0px; display:block !important;}") //

GM_addStyle("DIV#thread-watcher {postion:fixed !important; top:53px !important; margin-top:0px !important; height:83% !important; overflow-y:auto !important;}") //Alternate height can be 75%, if need be.

GM_addStyle("DIV#thread-watcher .subject {margin-right:25px; white-space:normal;}") //

GM_addStyle("DIV#thread-watcher-canvas .item {margin-top:5px; padding-top:0px; padding-bottom:2px;}") //

GM_addStyle("DIV#thread-watcher-canvas .item a {margin-right:25px; white-space:normal;}") //

//TOP title container
GM_addStyle("DIV.sticky-thing {padding:3px 5px; background-color:#252c33; color:Gray;}");

//TOP title part title
GM_addStyle("DIV.post.op H1 {padding-bottom:0em;}");
GM_addStyle("DIV.sticky-thing H1 {text-overflow:initial; overflow:visible; white-space:normal; border-right:solid 1px Grays; font-size:1.2em; margin-bottom:5px;}");
//30.07.2019

//TOP title part glyphicon
GM_addStyle("DIV.glyphicon-eye-open, SPAN.glyphicon-eye-open {visibility:visible;}"); //border:solid 1px Silver;
/* :before ""; font-family: Glyphicons Halflings */
/* 30.07.2019 */

//embedded addresses' caption colors
GM_addStyle("DIV.post-body .zeitgeist-caption:hover > H3, DIV.post-body .zeitgeist-caption:hover > P, DIV.post-body .zeitgeist-caption:hover > SMALL, DIV.ogPreview .caption H3, DIV.ogPreview .caption H4 {color:white;}")

GM_addStyle("DIV.ogPreview.hovering > DIV.caption {overflow-y:auto;}")

//GM_addStyle("DIV.hovering > DIV.caption > H4 {margin-top:0px; overflow-y:scroll; padding-right:2px; overflow-y:scroll; font-weight:normal; font-size:10px; font-family:\'Verdana\',\'Bitstream Vera\'; margin:0px;}")
//margin-top can be set to -24px, but there's more

/* SEARCH RESULTS's color */
GM_addStyle("div#quick-search li {color:Silver;}");
GM_addStyle("div#quick-search li em {font-weight:bold; color:white;}");
GM_addStyle("div#quick-search li A {color:#95C200;}");