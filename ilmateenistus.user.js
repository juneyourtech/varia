// ==UserScript==
// @name          Ilmateenistus Rez
// @namespace     ilmateenistus_rez
// @description  Ilmajaam väiksematele ekraanidele. Peamine fookus vaatlusandmete tabelil.
// @updateURL 
// @version 0.1.1
// @include       *.ilmateenistus.ee/*
// @grant         GM_addStyle
// ==/UserScript==
// Notes:
//   * is a wildcard character
//   .tld is magic that matches all top-level domains (e.g. .com, .co.uk, .us, etc.)
/* ____80_character_separator________________________________________________ */

/*
GM_addStyle("BODY SECTION.content {background-repeat:fixed;}") //

GM_addStyle("DIV.container, .navbar-static-top .container, .navbar-fixed-top .container, .navbar-fixed-bottom .container {width:auto; max-width:940px;}") //

GM_addStyle("DIV.container.page ARTICLE {width:auto; max-width:720px;}") //

//TABLE SORTER
GM_addStyle("THEAD.tableFloatingHeaderOriginal {width:auto !important; max-width:719px !important;}") //

GM_addStyle("NAV.span12 {width:auto; max-width:940px;}") //
*/

/*
ESSENTIALLY, this is a terrible hack of a design, and a ginuwine quick-and dirty job in order to gain more vertical space (top-down).
*/

//widths: These are interdependent and apply to several widths.
GM_addStyle("DIV.container {margin-right:unset; margin-left:auto; width:962px;}")
GM_addStyle("DIV.container.page ARTICLE {padding-right:0px; padding-left:0px; width:781px;}")
//width was: width:753px;

//UPPER HEADER
GM_addStyle("BODY header .header-upper {height:42px; z-index:unset;}")

//UPPER HEADER: contains site logo
GM_addStyle("H1#site-title {margin:0px 0px 0px; padding:0px;}")

//site logo link
GM_addStyle("H1#site-title A {height:42px;}")

GM_addStyle("form#searchform {margin:0px; float:right;}")
//margin-left was 20px

GM_addStyle("UL.language-switcher {position:absolute; right:231px; width:auto; margin-top:0px; margin-left:0px; margin-bottom:0px; top:0px;}")

//hide right links
GM_addStyle("A.rightside-link {display:none;}")

//LOWER HEADER
GM_addStyle("BODY header .header-lower {height:auto; padding-top:0px; position:absolute; top:0px; right:220px; width:584px; height:42px; background:transparent;}")
GM_addStyle("BODY header .header-lower > DIV.container {width:auto;}")
GM_addStyle("BODY header .header-lower > DIV.container > DIV.row {margin-left:0px;}")

GM_addStyle("NAV.span8 {width:auto; margin-left:0px; margin-top:18px;}")

GM_addStyle("NAV.span8 > UL.nav-tabs > LI > A {padding-left:7px; padding-right:5px;}")

//main submenu
GM_addStyle("HEADER.main .nav UL.children.l-1 {width:450px;}")

//meteoalarm, hoiatused
GM_addStyle("DIV.span4 {width:auto; margin-left:0px;}")

GM_addStyle("DIV#warnings {margin-top:0px; position:absolute; bottom:0px; right:0px;}")

GM_addStyle("DIV#warnings .btn {padding:0px 10px; line-height:15px;}")

GM_addStyle(".btn {line-height:15px;}")

//Vaatlusandmed
GM_addStyle("ARTICLE.span9 > HEADER > H1 {margin:0px 0px; line-height:13px; font-size:20px;}")
//font-size was: 16px;

GM_addStyle("ARTICLE.span9 > HEADER {display:inline-block; position:absolute; top:22px; right:3px; width:141px; text-align:right;}")

GM_addStyle("ARTICLE.span9 > HEADER > H1 {color:rgba(102, 123, 168,0.61);}")
//used word-break:break-all for Vaatlus/andmed

//kaart, graafikud, tunniandmed jne
GM_addStyle("UL.nav {margin-bottom:0px;}")

GM_addStyle("UL.nav-tabs > li > a {padding-top:0px; padding-bottom:0px; line-height:13px;}")

//leftside menu
GM_addStyle("BODY > section.content {padding-bottom:0px; background:rgba(0,0,0,0.5);}") //width:979px;
// url("../../images/background.jpg") repeat-x fixed center top

//container
GM_addStyle("DIV.container.page, DIV.container.search {border:none; background:rgba(0,0,0,0.5) none repeat scroll 0% 0% padding-box}")

GM_addStyle("SECTION.article_content {margin-bottom:0px;}")

//kuupäevad
GM_addStyle("DIV.datepicker-filter {padding:0px; margin-bottom:0px;}")

//UTC kellaaeg mustaks
GM_addStyle("DIV.datepicker-filter .utc-info {color:black; margin-top:0px;}")

//vormid
GM_addStyle("select, textarea, FIELDSET input[type=\"text\"], FIELDSET input[type=\"password\"], FIELDSET input[type=\"datetime\"], FIELDSET input[type=\"datetime-local\"], FIELDSET input[type=\"date\"], FIELDSET input[type=\"month\"], FIELDSET input[type=\"time\"], FIELDSET input[type=\"week\"], FIELDSET input[type=\"number\"], FIELDSET input[type=\"email\"], FIELDSET input[type=\"url\"], FIELDSET input[type=\"search\"], FIELDSET input[type=\"tel\"], FIELDSET input[type=\"color\"], .uneditable-input {padding:0px 6px;}")

// STATUS THROBBER //CODE THREE RULESETS BELOW
GM_addStyle("DIV#ajax-loader > DIV {top:21px; right:3px; with:136px; border-top:solid 1px #A1AECA;}") //current: position:absolute
//DIV[id^=\'ajax-loader\']

GM_addStyle("DIV#ajax-loader > DIV:before {content:\'Oota...\'; font-size:20px; color:rgba(102, 123, 168, 0.61); display:inline; text-align:left; margin-top:2px;}")

GM_addStyle("DIV#ajax-loader > DIV > IMG {float:right; height:24px;}") //26px
//#A1AECA = rgba(102, 123, 168, 0.61)

/* FOR THIS DYNAMIC CODE:
<div style="position:relative;" id="ajax-loader"><div style="z-index:1;position:absolute;right:0;"><img title="Laadin" src="http://www.ilmateenistus.ee/wp-content/themes/emhi2013/images/ajax-loader.gif"></div></div> */

// TABEL
GM_addStyle("TABLE.table {margin-bottom:0px;}") //

GM_addStyle("TABLE.table-compressed TH, TABLE.table-compressed TD {padding-top:0px; padding-bottom:0px; padding-left:0px; padding-right:0px; line-height:12px;}") //
//line-height was:10px

//VEERURIDA
GM_addStyle("TABLE.table-compressed TH {border-color:Silver; line-height:10px;}") //

//LAHTRID, ÜLD
GM_addStyle("TABLE.table-compressed TD {font-family:\'Arial\',\'Helvetica Neue\',\'Helvetica\',\'sans-serif'\;}") //

// PÕHIRIDA

//VEERULAHTER ÕHUTEMPERATUUR
GM_addStyle("TABLE.table-compressed > THEAD > TR > TH[aria-label^=\'Õhutemperatuur\'] {width:40px;}")
// Laius

//VEERULAHTER Õhutemperatuur: sõnamurdmine
GM_addStyle("TABLE.table-compressed > THEAD > TR > TH[aria-label^=\'Õhutemperatuur\'] > DIV {word-break:break-all;}") //

//VEERULAHTER Suhteline õhuniiskus
GM_addStyle("TABLE.table-compressed > THEAD > TR > TH[aria-label^=\'Suhteline\'] {width:45px;}")
//word-break:normal: width 54px; break-all: 45px;

GM_addStyle("TABLE.table-compressed > THEAD > TR > TH[aria-label^=\'Suhteline\'] > DIV {word-break:break-all;}") //

//VEERULAHTER Õhurõhk merepinnal
GM_addStyle("TABLE.table-compressed > THEAD > TR > TH[aria-label^=\'Õhurõhk\'] {width:49px !important;}") //auto:60px; break-all: 49px

GM_addStyle("TABLE.table-compressed > THEAD > TR > TH[aria-label^=\'Õhurõhk\'] > DIV {word-break:break-all;}") //

//VEERULAHTER Õhurõhu muutus (hPa)
GM_addStyle("TABLE.table-compressed > THEAD > TR > TH[aria-label^=\'Õhurõhu\'] {width:43px;}") //auto:45px; break-all: 43px

GM_addStyle("TABLE.table-compressed > THEAD > TR > TH[aria-label^=\'Õhurõhu\'] > DIV {word-break:break-all;}") //

//ALAMVEERULAHTER SUUND (tuule suund, °)
GM_addStyle("TABLE.table-compressed > THEAD > TR > TH[aria-label^=\'suund\'] {width:32px;}") //

//ALAMVEERULAHTER KIIRUS (m/s)
GM_addStyle("TABLE.table-compressed > THEAD > TR > TH[aria-label^=\'kiirus\'] {width:26px;}") //

//ALAMVEERULAHTER MAX kiirus (m/s)
GM_addStyle("TABLE.table-compressed > THEAD > TR > TH[aria-label^=\'max\'] {width:41px;}") //auto:52px; break-word: 41px
//was: max-width:66px; | background-color:#00db73;

GM_addStyle("TABLE.table-compressed > THEAD > TR > TH[aria-label^=\'max\'] > DIV {word-break:break-all;}") //

//VEERULAHTER Pilvisus (palli)
GM_addStyle("TABLE.table-compressed > THEAD > TR > TH[aria-label^=\'Pilvisus\'] {width:39px;}") // background-color:#99ccff;

//VEERULAHTER Sademed (mm)
GM_addStyle("TABLE.table-compressed > THEAD > TR > TH[aria-label^=\'Sademed\'] {width:51px;}") //

//VEERULAHTER Nähtavus (km)
GM_addStyle("TABLE.table-compressed > THEAD > TR > TH[aria-label^=\'Nähtavus\'] {width:48px;}") //

//ÜLDISED READ change font here
GM_addStyle("TABLE.table-compressed > TBODY[aria-live=\'polite\'] > TR:not(:nth-child(-n+3)):not(:nth-last-child(6)) > TD {border-top:none; border-bottom:none; font-family:Verdana; font-size:9px; line-height:8px;}")
//line-height:6px; font-size:6px; - added the most space;
//Arial: font-size:8px; line-height:8px;
//background-color:#99ccff;

/* Increases letter spacing for much of the table, except:
   1st row, Vaindloo row, Paldiski (Põhjasadam), Hetkeilm column. */
GM_addStyle("TABLE.table-compressed > TBODY[aria-live=\'polite\'] > TR:not(:nth-child(-n+3)):not(:nth-last-child(6)):not(:nth-last-child(30)) > TD:not(:nth-last-child(3)):not(:nth-last-child(4)) {letter-spacing:0.17em;}")
/* 0.17 em works except w. 'Paldiski (Põhjasadam)'. See next ruleset below.

   Consider, that might this nice and elaborate selector above be ever 
   replaced, then it should be saved somewhere for posterity (:
   
   Interestingly, if TR ... :not(nth-last-child(30)) is not used, then
   for some reason it supersedes the next ruleset, unless that one is 
   superseded from above. Hence the extensive use of :not above, and 
   duplication of some parameter values below.
   
    background-color:#99ccff; */

//Sets letterspacing except for Paldiski    
GM_addStyle("TABLE.table-compressed > TBODY[aria-live=\'polite\'] > TR:nth-last-child(30) > TD:not(:first-child) {letter-spacing:0.17em;}") //works; background-color:#409fff;

//'Paldiski (Põhjasadam)'
GM_addStyle("TABLE.table-compressed > TBODY[aria-live=\'polite\'] > TR:nth-last-child(30) > TD:first-child {letter-spacing:0.08em;}") //works
/* 0.08m works better with this particular city.
   background-color:#00db73; */

//esimene andmerida, normaalsed suurused (Heltermaa)
GM_addStyle("TABLE.table > TBODY > TR:nth-child(-n+3) > TD {font-family:\'Arial\',\'Helvetica Neue\',\'Helvetica\',\'sans-serif\'; font-size:12px; line-height:20px;}")
//works, but of no use
//padding-top:4px; padding-bottom:4px;

//VEERULAHTER JAAM: Heltermaa esimene lahter
GM_addStyle("TABLE.table > TBODY > TR:first-child > TD:first-child {padding-left:5px; width:112px;}") //
//width:87px - leaves most except 'Paldiski (Põhjasadam)'

//Vaindloo, normal
GM_addStyle("TABLE.table-striped TBODY[aria-live=\'polite\'] > TR:nth-last-child(6) > TD {line-height:20px;}")
//background-color:#00db73; font-family:\'Arial\',\'Helvetica Neue\',\'Helvetica\',\'sans-serif\'; font-size:12px;

//Rows after Vaindloo = last five rows
GM_addStyle("TABLE.table-striped TBODY[aria-live=\'polite\'] > TR:nth-last-child(-n+5) > TD {background-color:MistyRose;}")
//color was: red

//removes footer
GM_addStyle("FOOTER#footer {display:none; margin-top:0px; margin-bottom:0px;}")

//GM_addStyle("@media only screen and (max-width:910px) {BODY.exp-responsive .home #content {width:100%; min-width:240px; max-width:unset;}}")