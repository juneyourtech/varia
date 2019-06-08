// ==UserScript==
// @name        Teine
// @namespace   teine
// @include     http://2ndrun.tv/news_directory/national/cnn/*
// @include     http://2ndrun.tv/cnn*
// @include     http://2ndrun.tv/bbc-news/*
// @include     http://2ndrun.tv/msnbc/*
// @include     *.2ndrun.tv/cnn*
// @include     *.2ndrun.tv/bbc-news/*
// @include     *.2ndrun.tv/msnbc/*
// @include     https://tunein.com/*
// @include     http://retubeit.tv/cnn
// @include     http://retubeit.tv/bbc-news/
// @version     1.1
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle("BODY.custom-background {background-color:black;}");

//
GM_addStyle("#mh-wrapper, H1, H2, H3, H4, H5, H6, .search-form input, .header-sub LI A, .widget-list LI, .cat-item, .page_item, .sb-widget .menu-item, .footer-widgets .menu-item, .social-nav UL LI A, A, .button span, .social-button span, .main-nav LI {transition:none !important;}");

//background-image
GM_addStyle("DIV.entry-content > DIV {background-repeat:no-repeat !important; background-position:left top !important; background-size:100% 100% !important;}") //1920x1200; CNN newsroom image: 1920x1080px  background-image:none; background-position:right top

// CHANNEL BANNER
GM_addStyle("DIV#banner {position:relative; text-align:left; height:28px !important; width:auto; overflow-x:hidden;}") //
GM_addStyle("DIV.entry-content #banner IMG {position:absolute; right:-65px; width:145px; height:28px; position }") //right:-64px

// container
GM_addStyle("DIV#container {width:700px !important;}") //

// content
GM_addStyle("DIV#content {background-color:rgba(0,0,0,0.75); clear:both;}") //

GM_addStyle("DIV#content > CENTER {margin-top:50px; text-align:left; font-size:0px;}") //

// IMAGES
GM_addStyle("div#content > CENTER > IMG {opacity:0.9; width:90px; height:16px;}"); //opacity:0.5, 0.75

// sidebar hide
GM_addStyle("DIV#sidebar {display:none;}"); //works

// Summer 2017 new design
// "hand up" image div
GM_addStyle("DIV#wpfront-scroll-top-container {right:0px !important; bottom:0px !important; background:linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%);}"); //52x100

GM_addStyle("DIV#wpfront-scroll-top-container > IMG {width:35px !important; height:69px !important; opacity:0.3; background-color:rgba(0,0,0,0.5); }"); //52x100 > 36x69
//background:transparent linear-gradient(to top, rgba(0,0,0,0.5) 0%,  rgba(0,0,0,0.5) 50%, transparent 100%) repeat scroll 0% 0%;

// video, site title and navigation menu container (white bg)
GM_addStyle("DIV#mh-wrapper {width:auto; max-width:unset; padding-left:0px; padding-right:36px; background-color:transparent;}"); //has width
//width was: 90%

//HEADER (contains title and navigation menu)
GM_addStyle("HEADER.mh-header {margin-bottom:0px;}"); //L., 25.05.2019.

//contains masthead title and logo //L., 25.05.2019.
GM_addStyle("DIV.header-wrap {padding:0px; padding-top:9px;}");

//Logo image //L., 25.05.2019.
GM_addStyle("DIV.logo-wrap > IMG {width:auto; height:40px !important;}");
//Original width: 420px; height:90px

GM_addStyle("NAV.main-nav LI A {color:#CCDEE8;}");
//29.05.2019

GM_addStyle("@media only screen and (max-width:980px) { HTML.js .main-nav {display:block;}  NAV.main-nav LI A {padding:0px; padding-left:2px; padding-right:8px; font-size:80%; } }"); //L., 25.05.2019.
/*
HTML.js .main-nav is the navigation menu containing channel links
NAV.main-nav LI A is the channel links
*/

GM_addStyle("DIV.header-sub {padding:0px; padding-bottom:1px;}"); //after header menu //L., 25.05.2019.

//CNN logo container above video and ticker
GM_addStyle("ARTICLE.post-651 H1.entry-title.page-title {margin-bottom:0px; text-indent:0px; background-position:top right; line-height:1.1; height:40px; text-align:center;}"); //L., 25.05.2019.
//29.05.2019: center temporary

GM_addStyle("HEADER.entry-header H1.entry-title.page-title {font-size:100%;}");

//video container
GM_addStyle("DIV.entry-content > P {margin-bottom:0px}"); //L., 25.05.2019.
GM_addStyle("DIV.entry-content > P > SPAN {margin-top:0px !important;}"); //L., 25.05.2019.

//ticker (above video)
//ticker title
GM_addStyle("DIV#wptu-ticker-1 > .wptu-ticker-title {background-color:rgba(0, 0, 0, 0.4);}");
GM_addStyle("DIV#wptu-ticker-1 > .wptu-ticker-title .wptu-ticker-head {background-color:transparent; color:#CCDEE8;}"); //Original: #005A8C
//29.05.2019: color CCDEE8

GM_addStyle("DIV#wptu-ticker-1 > .wptu-ticker-title .wptu-ticker-head:before {content:\'Hover for \'; display:inline; color:#CCDEE8;}"); //Original: #005A8C
GM_addStyle("DIV#wptu-ticker-1 > .wptu-ticker-title .wptu-ticker-head:after {content:\' \(ticker\)\'; display:inline; color:#CCDEE8;}");
//29.05.2019: color CCDEE8

GM_addStyle("DIV.wptu-ticker.wptu-ticker-main DIV.wptu-ticker-block > UL {display:none; top:unset; margin-left:13px; margin-bottom:0px; font-size:9px; font-family:Verdana; height:54px; overflow-y:auto; z-index:0;}");

GM_addStyle("DIV.wptu-ticker.wptu-ticker-main:hover DIV.wptu-ticker-block > UL {display:block;}");

GM_addStyle("DIV.wptu-ticker.wptu-ticker-main DIV.wptu-ticker-block > UL A {color:white; text-decoration:underline;}");

//GM_addStyle("DIV.wptu-ticker-block:before {content:\'Hover for ticker news\'; display:inline; color:white;}");  //rem 21,5,2019

GM_addStyle("DIV.wptu-ticker-block:before:hover {display:none;}")

//video container inner
GM_addStyle("DIV.entry-content {background-color:rgba(0,0,0,0.4); color:rgba(255,255,255,0.9); font-size:70%;}") //color could be white

//VIDEO STARTS HERE
GM_addStyle("DIV.entry-content > IFRAME {width:100% !important;}");
//Original: 855x481

//36+15px
/* 15px is most likely for the scrollbar, 36px for the right-side hand 
symbol with a finger pointing up. */
//1024x768. 720p? 720p is just height.

//855+36+15px = 906px
GM_addStyle("@media screen and (max-width:906px) { DIV.entry-content > IFRAME {width:768px !important; height:432px !important;} }");

//768+36+15px = 819px
GM_addStyle("@media screen and (max-width:891px) { DIV.entry-content > IFRAME {width:720px !important; height:405px !important;} }");

//720+36+15px = 771px
GM_addStyle("@media screen and (max-width:771px) { DIV.entry-content > IFRAME {width:640px !important; height:360px !important;} }");

//640+36+15px = 691px
GM_addStyle("@media screen and (max-width:691px) { DIV.entry-content > IFRAME {width:576px !important; height:324px !important;} }");

//576+36+15px = 627px
GM_addStyle("@media screen and (max-width:627px) { DIV.entry-content > IFRAME {width:480px !important; height:270px !important;} }");

//480+36+15px = 531px
GM_addStyle("@media screen and (max-width:531px) { DIV.entry-content > IFRAME {width:432px !important; height:243px !important;} }");

//432+36+15px = 483px
GM_addStyle("@media screen and (max-width:483px) { DIV.entry-content > IFRAME {width:400px !important; height:225px !important;} }");

//400+36+15px = 451px
GM_addStyle("@media screen and (max-width:451px) { DIV.entry-content > IFRAME {width:376px !important; height:212px !important;} }");

GM_addStyle("DIV#jwplayer1 > DIV {width:100% !important;}");

GM_addStyle("@media only screen and (max-width:768px;) {DIV.entry-content {width:640px;} }");

GM_addStyle("@media only screen and (max-width:685px;) {DIV.entry-content {width:576px;} }");
/* max-width:660px, 676px. 691px works. Add 15px to main width, for some reason.

width:480px. 576px

07.05.2018: removed DIV#mh-wrapper from the two @media rulesets.
*/

//TUNEIN CONTENT BELOW MSNBC VIDEO
GM_addStyle("IFRAME[src*=\"tunein\.com\"] {max-height:25px;}");

GM_addStyle("IFRAME[src*=\"tunein\.com\"] HTML > BODY:before {content:\'\(tunein\.com iframe\)\';}");

//TUNEIN CONTENT BELOW VIDEO; specifically for tunein.com
//GM_addStyle("I.spinner {}");
GM_addStyle("I.spinner::before, .spinner::before {animation:none !important; transform:none !important;}"); //end of may, 2019

//"like button"
//Buttons below the video //07.05.2018.
GM_addStyle("SPAN.likebtn-wrapper, INPUT[type=\"button\"] {box-sizing:border-box; border-style:outset; border-width:1px;    border-color:rgba(0,0,0,0.6); border-collapse:separate;    border-image-outset:0 0 0 0; border-image-repeat:stretch stretch; border-image-slice:100% 100% 100% 100%; border-image-source:none; border-image-width:1 1 1 1; border-spacing 0px 0px; border-top-left-radius:0px; border-top-right-radius:0px; -moz-border-colors:none; background-color:rgba(0,0,0,0.2); background-clip:border-box; padding:0px; padding-left:6px; padding-right:6px;}");

//"like button"
GM_addStyle("SPAN.likebtn-wrapper {margin-bottom:2em;}");

//"like button" | Line added 07.05.2018.
GM_addStyle("SPAN.likebtn-wrapper {display:block; width:60%; min-width:332px; height:23px; margin-left:auto; margin-right:auto; text-align:center;}");
//Shared with bottom stuff.
//calc(100% - 2px)
//calc(100% - 8px)

//text in the button | 07.05.2018.
GM_addStyle("SPAN.likebtn-wrapper:after {content:\'Some stupid \"like\"-button \<SPAN\> from LikeBtn\.com\. Do not click\.\'; color:rgba(255,255,255,0.8); display:block; margin-top:0.8%; margin-bottom:0.8%; font-family:\'MS Sans Serif\',\'Microsoft Sans Serif\',\'sans-serif\';}");

//"Player will load" message
GM_addStyle("DIV.entry-content > CENTER > STRONG {color:rgba(255, 255, 255, 0.5);}");

//"Pop out chat" button
GM_addStyle("INPUT[type=\"button\"] {transition:none; width:unset !important;}");
//#D4D0C8

GM_addStyle("FORM:hover > INPUT[type=\"button\"] {border-width:2px; border-color:rgba(0,0,0,0.7); background-color:rgba(0,0,0,0.2); color:rgba(255,255,255,1.0);}");

//"bookmark" message //Should apply to: DIV.code-block.code-block-4
GM_addStyle("DIV.entry-content > DIV#wptu-ticker-1 ~ STRONG ~ IFRAME ~ DIV {top:0px !important; margin:0px !important; clear:unset !important;}")

//Should apply to: DIV.code-block.code-block-4 > SPAN
GM_addStyle("DIV.entry-content > DIV#wptu-ticker-1 ~ STRONG ~ IFRAME ~ DIV > SPAN {background-color:rgba(0,0,0,0.2) !important; opacity:0.2 !important; overflow-x:visible;}");

//AMAZON wishlist button size to smaller
GM_addStyle("DIV.code-block-11 {display:inline; float:right; margin:0px !important;}");
//02.09.2018: Former selector: SPAN.likebtn-wrapper ~ CENTER

GM_addStyle("DIV.code-block-11 > CENTER > A[href*=\'amazon\'] > IMG.size-full {width:100px; height:44px; margin-top:0px; margin-bottom:0px;}"); //original: 300x133px to 100x44px //28.05.2018
//02.09.2018: Imma show you a real nice selector:
//SPAN.likebtn-wrapper ~ CENTER > A[href*=\'amazon\'] > IMG.size-full

//the P after that
GM_addStyle("SPAN.likebtn-wrapper ~ CENTER ~ P {display:none; margin-bottom:0px;}"); //28.05.2018

//the P after that
GM_addStyle("SPAN.likebtn-wrapper ~ CENTER ~ P ~ P {display:none; margin-bottom:0px;}"); //28.05.2018

GM_addStyle("DIV.code-block.code-block-4 ~ BR {display:none;}");

