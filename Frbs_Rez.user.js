// ==UserScript==
// @name        Frbs Rez
// @namespace   frbs_rez
// @description Forbes font size and minor layout adjustments for 1024x768 screens. Concerns older Gecko-based browsers (Firefox 38.8esr and such). This userscript/userstyle is meant to slightly improve the layout and legibility of the Forbes website, and is not in any way associated with Forbes. Forbes is the trademark — registered or otherwise — of Forbes Media LLC.
// @author        JuneYourTech | github.com/juneyourtech
// @updateURL     https://raw.githubusercontent.com/juneyourtech/varia/master/Frbs_Rez.user.js
// @encoding      utf-8
// @homepage      https://github.com/juneyourtech/varia
// @supportURL    https://github.com/juneyourtech/varia/issues
// @include     *.forbes.com/*
// @version     0.1.0
// @grant       GM_addStyle
// ==/UserScript==
/* ____80_character_separator________________________________________________ */

//TITLE
GM_addStyle("BODY.body_article hgroup h1 {font-size:200%;}"); //

//COMMENT LINKS
GM_addStyle("DIV HGROUP .comment_links {opacity:0.25;}"); //
GM_addStyle("DIV HGROUP .comment_links:hover {opacity:1.0;}"); //

//ARTICLE BODY
GM_addStyle("BODY.body_article .article_body {margin-top:5px; border-top:solid 1px #C0C0C0;}"); //

//ARTICLE TEXT SIZE
GM_addStyle("BODY.body_article .article_body .body p {font-size:100%;}"); //

GM_addStyle("ARTICLE-BODY-CONTAINER.article-body.fs-responsive-text P {font-size:74%;}");

/* The area further below concerns the following:

   SUGGESTED ARTICLES "carousel", 29.09.2017.

   • Apparently, the carousel does not work with modern, but slightly outdated versions of Firefox and derivatives based on Gecko rendering engine versions 38-39 (Firefox ESR, for ex.), so the below code is basically a workaround for these older Gecko-based browsers, as these contain cookie prompting, still support XUL-based extensions, and other goodies. There is also the possibility, though, that the carousel was not designed for resolutions of 1024x768px and less.
   
   Therefore, improvements:
   • The original carousel is replaced by turning one of the box containers into a more primitive user- and horizontally-scrollable "carousel", so that it would work as intended.
   • Carousel size (height) is set to 340px, and images' height seems to have been set server-side from the 1024x768px resolution sent by the browser's user agent header.
   • Images are floated left. Along with the pre-set carousel height, and its width set to -moz-max-content, the images are thus forced to appear side by side.
   • Images are set to show properly, and without dimming.
   • When hovering over underlined links, their background becomes transparent, so as to allow readers to see more image detail in the carousel.
   • Some of the superfluous elements are removed from display, without affecting the links. This also has the positive side-effect of making images available for closer inspection. Because images inside the carousel are backgrounds deep within A elements (links), they are still not as directly accessible as images rendered with the IMG tag.
   • General layout in the carousel is set to be more compact.

   • Some things still need improvements, as they adversely affect font rendering on Windows xp. */

GM_addStyle(" *[_nghost-c35] {width:100%; height:100%; overflow-x:scroll; overflow-y:hidden;}");

GM_addStyle("DIV[_nghost-c35] > FBS-CAROUSEL[_ngcontent-c35] {height:340px;  width:-moz-max-content; padding:0px; background:linear-gradient(to left, #404040 0%, #404040 342px, white 342px, white 100%);}");
/* position:relative;
-moz-max-content is for Firefox 38.8esr and older
at some point, there was a single background-color:#404040; */

GM_addStyle("DIV.vp-box[_ngcontent-c35] {opacity:1.0; will-change:unset; width:340px; position:relative; float:left; display:block; margin:0px; margin-right:1px;}");
/* border-right:solid 1px white; shows, but does not work, as it evokes a 
bottom border. Caveat: Using linear-gradient in the parent element 
causes font rendering to become bad (Ff v38-39, WinXP). Fortunately, link titles are short, and not the kind of long text that would require long-form reading. */

GM_addStyle("A.thumb.hasimage[_ngcontent-c36] {background-color:none; cursor:pointer;}");

GM_addStyle("DIV.vp-overlay[_ngcontent-c36] {background-color:transparent; opacity:0; transition:none; z-index:-1; display:none;}");

GM_addStyle("A > VESTPOCKET-LABEL[_nghost-c37] {z-index:0; height:10%;}");

GM_addStyle("VESTPOCKET-LABEL > H5.fs-headline[_ngcontent-c37] {padding:3px 4px; background-color:rgba(0,0,0,0.75);}");

GM_addStyle("A:hover VESTPOCKET-LABEL > H5.fs-headline[_ngcontent-c37] {text-decoration:underline;}");

GM_addStyle("VESTPOCKET-LABEL > H5.fs-headline[_ngcontent-c37]:hover {background-color:transparent; color:rgba(0,0,0,0.75);}");
