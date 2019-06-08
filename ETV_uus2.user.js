// ==UserScript==
// @name          	ETV uus2
// @namespace     etv_uus_kaks
// @description	ETV (no video)
// @include       https://*.err.ee/*
// @include       https://otse.err.ee/*
// @grant         GM_addStyle
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)

GM_addStyle("DIV.navbar-inner {min-height:unset; line-height:unset;}");

GM_addStyle("@media only screen and (min-width:980px) { DIV.containerGlobal {height:unset;} }");

//
GM_addStyle("DIV.row {margin-left:0px;}");

GM_addStyle("DIV.span6 {margin-left:0px;}");

GM_addStyle("DIV.span6.media-column {width:560px;}");

GM_addStyle("DIV.container {margin-left:0px !important;}");
GM_addStyle("DIV.margin-top {margin-top:1px !important;}");

//UUDISED
GM_addStyle("ARTICLE.prime .body .text {font-family:\'Arial\',\'Helvetica\',\'Helv\',\'sans-serif\'; font-size:84%;}");

//ETV "MENU" / Menüü | 21.05.2018
GM_addStyle("SECTION.siteMenu {background-color:#616161;}"); //21.05.2018

GM_addStyle("DIV.siteName > A {background-color:#808080;}"); //21.05.2018

GM_addStyle("DIV.siteDropdown {display:block;}"); //UUDISED | GALERIID

GM_addStyle("DIV.dropdown1 {margin-right:15px;}"); //21.05.2018

//VIKERRAADIO
GM_addStyle("DIV.radio-timeline-calendar-date {color:white;}");
//27.05.2018

GM_addStyle("DIV#radio-timeline-calendar > DIV {color:#F9B133;}");

// RAADIO 2 lehitsejanõue //2018
//GM_addStyle("DIV#playerNotSupportedOverlay {display:none !important;}");

GM_addStyle("DIV#playerNotSupportedOverlay {position:relative; top:unset; padding:0px;}"); //R2, 2018

GM_addStyle("DIV.supportedBrowserOverlayText.real-fp-container {font-size:75%; margin-right:110px; padding-left:9px;}"); //R2, 2018

GM_addStyle("DIV.supportedBrowserOverlayLogos.real-fp-container {display:block; position:absolute; top:0px; right:9px; text-align:left; width:100px; height:100%; margin:0px;}"); //R2, 2018

GM_addStyle("DIV#loader {top:unset; left:unset; bottom:55px; right:12px; animation:none; transform:none;}");
GM_addStyle("DIV#loader:before {content:\'Spinner...\';}");

//R2: old browser msg: logos
//logos div
GM_addStyle("DIV.supportedBrowserOverlayLogos.real-fp-container > DIV {margin:0px;}");// margin-right:4px; //2018

//R2: old browser msg: chrome logo container
GM_addStyle("DIV.supportedBrowserOverlayLogos.real-fp-container > DIV:first-child {margin-top:1px; margin-bottom:3px;}");
//.real-fp-container //2018

//R2: old browser msg: links | 2018
GM_addStyle("DIV.supportedBrowserOverlayLogos.real-fp-container > DIV > A {display:block; margin:0px; padding:0px; font-size:0px;}");

//R2: old browser msg: link images | 2018
GM_addStyle("DIV.supportedBrowserOverlayLogos.real-fp-container > DIV > A > IMG {width:100%;}");

GM_addStyle("DIV.supportedBrowserOverlayLogos.real-fp-container > DIV > A > IMG[SRC*=firefox] {width:79px;}"); //works //was:77px, 80px //2018

//UUDISED/ÜLES | 2018

//Don't forget to include 'and' between 'screen' and pixel widths.

//GM_addStyle("@media only screen and (max-device-width:1280px) { DIV.real-fp-container {max-width:1123px;} }"); //2018

//main content #article | 2018
//GM_addStyle("DIV.real-fp-container {margin-left:70px; margin-right:70px; width:auto; max-width:unset;}");
/* This would work, but the alternative is, that it fails to account 
for the original design. */

//main
GM_addStyle("DIV.real-fp-container {padding-right:70px;}");

GM_addStyle("DIV.content A {word-wrap:normal; word-break:normal; font-size:85%;}");

GM_addStyle("DIV.content A::first-line {word-break:break-all !important; padding-right:0px; margin-right:0px;}"); //does not seem to work properly on Firefox 39.0.3
//former selector: h1.header-font::first-line
//background-color:#99ccff; font-size:85%; 

//rightside
GM_addStyle("DIV.content .right-block {background-color:white; float:right; padding-left:0px;}");

//rightside links
GM_addStyle("DIV.newslist > DIV {padding-left:15px;}");

GM_addStyle("@media only screen and (min-width:640px) { BUTTON.back-to-top {transform:rotate(-90deg); right: -45px; top:unset; bottom:75px;} }"); //2018

//GM_addStyle("@media only screen and (max-width:1007px) { BUTTON.back-to-top {transform:rotate(-90deg); right: -45px; top:unset; bottom:75px;} }"); //2018

GM_addStyle("BUTTON.back-to-top {opacity:0.5;}"); //2018

GM_addStyle("BUTTON.back-to-top:hover {opacity:1.0;}"); //2018

//ETVPLUSS VIDEOPLAYER | 2017>>2018
//GENERAL STUFF | 2017>>2018
GM_addStyle("HTML > BODY {background-color:black; color:#cdcdcd;}");

GM_addStyle("DIV.header H2.site-logo IMG {opacity:0.7;}");
GM_addStyle("DIV.header:hover H2.site-logo IMG {opacity:1;}");

GM_addStyle("DIV.globalNav A {color:Silver;}");
GM_addStyle("DIV.navbar .nav > LI > A {text-shadow:unset; color:#888;}");

//VIDEO PLAYER AREA BACKGROUND
GM_addStyle("DIV.background3 {background-color:black; box-shadow:unset; border-bottom-color:#555; background-image:none;}");

//VIDEO PLAYER AREA BORDER (OR HEADER BOTTOM BORDER)
GM_addStyle("DIV.base-color-border-top {border-top:1px;}");

//VIDEO PLAYLIST LINKS
GM_addStyle("H6, DIV.timestamp {font-size:12px;}");
GM_addStyle("A H6 {color:#777;}");

GM_addStyle("UL.small-thumb-list > li > a img {opacity:0.61 !important;}");
GM_addStyle("UL.small-thumb-list:hover > li > a img {opacity:1 !important;}");

//border at the top of the video
GM_addStyle("H2.marker {border-top-color:#888; box-shadow:unset; font-weight:normal; font-size:12px; padding-top:0px; padding-bottom:0px; border-top:none;}");

//VIDEO WIDTH
GM_addStyle("DIV.span8 {width:640px; margin-left:0px; margin-right:16px;}");
GM_addStyle("DIV.span8 ARTICLE {text-align:initial;}");

GM_addStyle("DIV.span4 {margin-left:0px; margin-right:0px;}");
GM_addStyle("DIV.scroll {padding-right:0px;}");

GM_addStyle("@media only screen and (max-width:979px) { DIV.span8 {width:640px;} }");

GM_addStyle("BUTTON.player-aria-button {background-color:#555;}");

//video title (at video bottom)
GM_addStyle("H1 {color:#555;}"); //pre-2018

GM_addStyle("DIV.rewatchperiod, DIV.category {font-size:13px;}");

/* was/part-original: #000000 !importanturl("/Content/images/static/player-gradient.jpg") repeat-y scroll center top */

//OTSE
GM_addStyle("SECTION.channelsMenu {background-color:#343434; border:none;}"); //#F7F7F7

GM_addStyle("SECTION.channelsMenu LI A {color:#888;}");

GM_addStyle("@media only screen and (max-width:1200px) { SECTION.channelsMenu LI A  {color:#888;}  SECTION.channelsMenu LI A, SECTION.channelsMenu LI A:hover {padding-left:7px padding-right:7px; padding-top:2px; padding-bottom:2px;} }");

GM_addStyle("DIV#otsePlayer {background-image:none !important;}");

//GM_addStyle("DIV.timeline-markers SPAN {left:unset !important;}");
//GM_addStyle("DIV.flowplayer .fp-progress {width:unset !important;}");

GM_addStyle("SECTION.otse-sections.player-section {border:none;}");

//768px
GM_addStyle("@media screen and (max-width:768px) { SECTION.otse-sections.player-section {width:640px !important;} }");

//640 + 15px = 655px
GM_addStyle("@media screen and (max-width:655px) { SECTION.otse-sections.player-section {width:576px !important;} }");

//576 + 15px = 591px
GM_addStyle("@media screen and (max-width:591px) { SECTION.otse-sections.player-section {width:480px !important;} }");

//480 + 15px = 495px
GM_addStyle("@media screen and (max-width:495px) { SECTION.otse-sections.player-section {width:432px !important;} }");

//432 + 15px = 447px
GM_addStyle("@media screen and (max-width:447px) { SECTION.otse-sections.player-section {width:400px !important;} }");

//400+15=415
GM_addStyle("@media screen and (max-width:415px) { SECTION.otse-sections.player-section {width:376px !important;} }");

/* This is for NoScript ABE to block:
background-image: url("//static.err.ee/gridfs/541B24290B8BF26DE27D8DECB4BC8C7399CC8157163BE90E50DFE87F7E31DCE0.jpg?width=996&crop=%28171%2C0%2C852.45%2C385%29&cropxunits=996&cropyunits=385&rotate=0&s.contrast=0&s.saturation=0&s.brightness=0&s.grayscale=0&s.alpha=1&quality=95&s.roundcorners=0%2C0%2C0%2C0
&format=jpg");

background-image: url("//static.err.ee/gridfs/541B24290B8BF26DE27D8DECB4BC8C7399CC8157163BE90E50DFE87F7E31DCE0.jpg?width=996&crop=%28171%2C0%2C852.45%2C385%29&cropxunits=996&cropyunits=385&rotate=0&s.contrast=0&s.saturation=0&s.brightness=0&s.grayscale=0&s.alpha=1&quality=95&s.roundcorners=0%2C0%2C0%2C0&format=jpg");

^https:?//static\.err\.ee/gridfs/.*\.jpg?width=996&crop=.*&cropxunits=996&cropyunits=385&rotate=0s\.contrast=0&s\.saturation=0&s\.brightness=0&s\.grayscale=0&s\.alpha=1&quality=95&s\.roundcorners=.*&format=jpg
*/

//
GM_addStyle("SECTION.otse-sections.player-section {margin-bottom:5px;}");

//OTSE: DESC (BIG)
GM_addStyle("SECTION.otse-sections.now-playing {background-color:black; color:Silver; margin-bottom:10px; padding:0px 5px;}"); //Original: bg #FDFDFD col #171717
//N., 27.09.2018

GM_addStyle("H2.contentHeader {font-size:1.6em}");
//P., 25.11.2018.

//OTSE: DESC: Viewer count:
GM_addStyle("SECTION.otse-sections.now-playing .currently-viewing {padding-bottom:0px;}"); //03.10.2018

//OTSE: DESC: Programme date:
GM_addStyle("SECTION.otse-sections.now-playing .show-time {padding-bottom:0px;}"); //03.10.2018

//OTSE: Long description container:
GM_addStyle("SECTION.now-playing > DIV > ARTICLE {margin-left:0px;}"); 
//03.10.2018
//also: #nowPlaying

//OTSE: Long description text
GM_addStyle("DIV.otse-article-lead {font-family:\'Arial\',\'Helvetica\',\'Helv\',\'proxima_nova\',\'Proxima Nova\',\'sans-serif\'; font-size:87%; line-height:1.4em; border-left:solid 1px #343434; padding-left:5px;}"); //03.10.2018
//100% is also ok; //standard line-height for Arial 10px is 1.6em.

//("Saatesarja kodulehele" link)
GM_addStyle("SECTION.otse-sections.now-playing .series-url {background-color:inherit; border-color:#69AAD0; color:gray}"); //original: #69AAD0 
//03.10.2018
//original border-color: #78B4D8

GM_addStyle("SECTION.otse-sections.now-playing .series-url:hover {background-color:inherit; color:Silver;}"); //03.10.2018
//background-color:#69AAD0;

//ÜLES-NUPP (Kus?)
//GM_addStyle("@media only screen and (min-width:1100px) { BUTTON.back-to-top {transform:rotate(-90deg); right: -45px; top:unset; bottom:75px;} }");


//err.ee uudised | telekavad | raadiote kavad | kuupäev
//CONTAINER
GM_addStyle("DIV#otse-right {padding-left:1px; padding-right:1px;}");
GM_addStyle("SECTION.otse-sections.schedule {border:solid 1px #69AAD0; background-color:inherit;}");
GM_addStyle("DIV.schedule-extra {background-color:inherit;}");
GM_addStyle("DIV.schedule-item A {color:#69AAD0;}");
GM_addStyle("DIV.schedule-item A:hover {background-color:inherit; border-color:#69AAD0;}");

//ETV UUDISED (sait)
GM_addStyle("DIV.real-fp-container {background-color:black;}");

GM_addStyle("DIV.left-block A, ARTICLE.flex-col .header-font A {color:#0077ee;}");
//left-block was superseded on www.err.ee

GM_addStyle("ARTICLE.prime {background-color:black;}");
GM_addStyle("ARTICLE.prime header {background-color:black;}");
GM_addStyle("ARTICLE.prime .body .lead > P {color:gray;}");

GM_addStyle("DIV.content {color:#0077ee;}");

GM_addStyle("DIV.content ARTICLE > DIV.body DIV.text > P {color:Silver; font-size:117%; line-height:1.5em; color:#a0a0a0}");
//09.05.2018. Font-size: 12.5833px

GM_addStyle("DIV.content ARTICLE > DIV.body DIV.text > P > STRONG {font-size:127%; font-weight:600px; color:#616161;}"); //09.05.2018.
//font-size: 13.65px

GM_addStyle("DIV.content .prime H1 {color:gray;}");

//ETV+ UUDISED
GM_addStyle("@media only screen and (max-width:767px) { HTML > BODY {font-size:0.8em; line-height:1.6em;} }");