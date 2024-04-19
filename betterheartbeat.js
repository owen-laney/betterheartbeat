function injectCSS(cssString) {
    const styleElement = document.createElement('style');
    styleElement.textContent = cssString;
    document.head.appendChild(styleElement);
}

setTimeout(() => {
    // Your CSS string here
    const myCSS = `
      body {
        background-color: #f0f0f0;
      }
    `;
    injectCSS(`
    * {
    --client-background: #ffffff00;
    --client-primary: #3f3f3f;
    font-size: 14px !important;
    font-family: "San Fransisco", -apple-system,BlinkMacSystemFont, Inter, sans-serif !important;
}

body {
    line-height: unset;
}

::selection {
    background: #000000d3;
    color: white;
}

.jLPXgI {
    width: inherit !important;
    border: none !important;
}

.sc-fwwElh {
    padding: 0px;
    padding-top: 1.5rem;
    padding-left: 1rem;

}

.sc-fwwElh > .position-relative {
    /*trending posts*/
    visibility: hidden;
    height: 0px;
    padding: 0px !important;
    margin: 0px !important;
}

.sc-fwwElh > * > * > * > * > * > .lpenqU {
}
.sc-fwwElh > * > * > * > * > * > .lpenqU > p {
    font-size: 1rem !important;
    color: #000000af;
}
.sc-fwwElh > * > * > * > * > * > .lpenqU > p:hover {
    background: transparent;
    cursor: default;
    scale: 1;
}


.sc-fwwElh > * > * > * > * > * > * > * {
    border-radius: 1rem;
    cursor: pointer;
    margin-right: 1rem;

}

.sc-fwwElh > * > * > * > * > * > * > *:hover {
    background: #00000014;
    transition: all 0.1s;
}
.sc-fwwElh > * > * > * > * > * > * > *:active {
    scale: 0.95;
}

.sc-ijDOKB {
    /*chat box container*/
    padding: 0.5rem;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: transparent;
    border: none;
}

.cOEJGo {
    background: transparent;
}

.sc-ijDOKB > * > img {
    /*profile icon by chat box*/
    visibility: hidden;
    width: 0px;
    margin: 0px !important;
    width: 100%;
    position: fixed;
}

.sc-bHnlcS > * > .bmrecX {
    top: 8px;
    right: 8px;
}

.sc-bHnlcS > * > .bmrecX > button, .sc-bHnlcS > * > .bmrecX > * > button {
    /*add attachment button or gif button*/
    border-radius: 1rem;
}
.sc-bHnlcS > * > .bmrecX > button:hover, .sc-bHnlcS > * > .bmrecX > * > button:hover {
    background: #00000014;
    transition: all 0.1s;
}
.sc-bHnlcS > * > .bmrecX > button:active, .sc-bHnlcS > * > .bmrecX > * > button:active {
    scale: 0.95;
    transition: all 0.1s;
}

.owdDW {
    /*viewers container*/
    padding: 0px;
}

.sc-lfYzqA {
    /*messages container*/
    padding: 0px;
    padding-bottom: 6rem;
}

.sc-lfYzqA > * > .dDZYes:hover {
    background: #00000006;
}

.sc-lfYzqA > * > .dDZYes {
    padding-left: 1rem !important;
}

.sc-cPiKLX {
    /*message*/
    padding-left: 1rem;
    margin-bottom: 0px;
}
.sc-cPiKLX:hover {
    /*message hover*/
    transition: all 0.1s;
}

.sc-lfYzqA > * > .sc-cPiKLX > img {
    margin-top: 0.5rem;
}

.sc-lfYzqA > * > .sc-cPiKLX > *:hover {
    /*message*/
    background: transparent;
    transition: 0ms;
}

.sc-eONNys {
    /*new messages notification (shows up at the bottom of the channels list)*/
    box-shadow: 1px 1px 10px #00000006;
    border: 1px solid #d5d5d5;
    background: #f9f9f95e;
    backdrop-filter: blur(10px);
    transition: all 0.1s;
    border-radius: 9999px;
}
.sc-eONNys:hover {
    /*new messages notification (shows up at the bottom of the channels list)*/
    box-shadow: 1px 1px 10px #00000015;
}

.sc-eONNys:active {
    /*new messages notification (shows up at the bottom of the channels list)*/
    box-shadow: inset 1px 1px 4px #00000010;
}


.imhnjR {
    /*current channel name*/
    min-height: min-content;
    background: #000000e5;
    margin: 0px;
    border-radius: 9999px;
    box-shadow: inset -10px -10px 10px #00000009, inset 3px 3px 10px #ffffff46;
    padding-left: 0.75rem;
}
.imhnjR > a {
    /*current channel name*/
    height: min-content;
    padding: 0.5rem;

}

.imhnjR > a > p {
    color: #ffffff;
    font-weight: normal;
}

.imhnjR > a > button {
    height: min-content;
}

.ikxgxG {
    /* channel name */
    min-height: 10px;
    margin: 4px 0px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    height: min-content;
    transition: all 0.1s;
    margin: 0px;
    border-radius: 9999px;
    padding-left: 0.75rem;
}
.ikxgxG:hover {
    background: #00000014;
    transition: all 0.1s;

}

.ikxgxG:active {
    scale: 0.95;
}

.ikxgxG > * > button {
    height: min-content;
    padding: 0.5rem;

}
.ikxgxG > a {
    height: min-content;
    padding: 0.5rem;
}

.ikxgxG > a > button {
    height: min-content;
    padding: 0px;

}

/* minimize sidebar size */
.cMRZRs {
    width: min-content;
    background: transparent;
}

.cMRZRs > * > svg > path {
    fill: #000000 !important;
}


.sc-dSIIpw {
    width: min-content;
}

.sc-dJiZtA {
    width: min-content;
    padding: 0.8rem;
    border-radius: 1rem;
}
.sc-dJiZtA:hover {
    background: #00000014;
    transition: all 0.1s;
    color: red;
}

.sc-dJiZtA:active {
    scale: 0.95;
}

.sc-dJiZtA > * > svg {
    height: 1.6rem;
    width: 1.6rem;
}

.sc-dJiZtA:hover > * > svg > path {
    transition: all 0.1s;
    fill: #000000 !important;
    

}


/*the actual sidebar with channels, users, docs, events*/
.sc-deXhhX {
    background: #00000000;
    border-right: none;
    padding: 0.25rem;
}

.sc-deXhhX > .sc-imwsjW {
    /* sora logo container */
    margin: 0px;
}
.sc-deXhhX > .sc-imwsjW > .chmkHM {
    /* sora logo */
    margin: 0px;
    padding: 0.8rem;
    background: transparent;
    height: min-content;
}

.sc-deXhhX > .sc-imwsjW > .chmkHM:hover {
    background: #00000014;
    border-radius: 1rem;
    transition: all 0.1s;
}

.sc-deXhhX > .sc-imwsjW > .chmkHM:active {
    scale: 0.95;
    transition: all 0.1s;
}


.sc-dJiZtA > span {
    /*sidebar item title (docs, events, users)*/
    background: red;
    display: none;
}

.sc-fMMURN > .sc-dAlyuH {
    /* username  on sidebar*/
    display: none;
}

.sc-dAlyuH {
    /*headers in the settings (status, bio, first name, last name)*/
    color: #000000af;
}

/*settings sidebar*/
.sc-btwKTd > .cIUQHq {
    display: flex;
    align-items: center;
    height: min-content;
    transition: all 0.1s !important;
    margin: 0px;
    border-radius: 9999px;
    padding-left: 0.75rem;
}

.sc-btwKTd > .cIUQHq:hover {
    background: #00000014;
    transition: all 0.1s;
}

.sc-btwKTd > .cIUQHq:active {
    scale: 0.95;
    transition: all 0.1s;
}


.sc-btwKTd > .cIUQHq > a {
    height: min-content;
    padding: 0.5rem;
}
/*selected settings sidebar item*/
.sc-btwKTd > .cJidlB {
    display: flex;
    align-items: center;
    height: min-content;
    transition: all 0.1s !important;
    margin: 0px;
    min-height: min-content;
    background: #000000e5;
    margin: 0px;
    border-radius: 9999px;
    box-shadow: inset -10px -10px 10px #00000009, inset 3px 3px 10px #ffffff46;
    padding-left: 0.75rem;
}

.sc-btwKTd > .cJidlB > a {
    height: min-content;
    padding: 0.5rem;
}

.sc-btwKTd > .cJidlB > a > p, .sc-btwKTd > .cJidlB > a > svg > path {
    color: #ffffff;
    fill: #ffffff;
}



.sc-fMMURN {
    width: auto;
    height: min-content;
    padding: 0.8rem;

}
.sc-fMMURN:hover {
    background: #00000014;
    transition: all 0.1s;
}
.sc-fMMURN:active {
    scale: 0.95;
}

.sc-epRvzc > .sc-dAlyuH {
    /*channel category name*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem !important;
    fill: #000000ee;
}

#channel-sidebar > .sc-epRvzc > .sc-gsFSXq > svg > path {
    fill: #000000ee;
}

#channel-sidebar > .sc-epRvzc > .sc-gsFSXq:hover {
    border-radius: 9999px;
    background: #00000014;
    transition: all 0.1s;
}

/* new dm button */
#channel-sidebar > .sc-epRvzc >.sc-ggqIjW:hover {
    border-radius: 9999px;
    background: #00000014;
    transition: all 0.1s;
}


.sc-dSIIpw > .sc-dAlyuH {
    /* server name  on sidebar*/
    display: none;
}

.sc-deXhhX > * {
    padding: 0px !important;
}


/* channel list sidebar */
.sc-dQEtJz {
    background: transparent;
    padding: 1rem 0px 0px 0px !important;
}

#channel-sidebar {
    scrollbar-width: thin;
}



/* notifications bar */
.sc-hBUXXM {
    box-shadow: -4px 0px 10px #0000000a;
    background: #fefefe9e;
    backdrop-filter: blur(30px);
    border: 1px solid #d5d5d5;
    transition: 0.1s;
    border-radius: 1rem;
    margin: 1rem;
}

.lagAsG {
    right: -320px;
}

.sc-hBUXXM:hover {
    scale: 1.01;
}

.hLNQlH {
    margin: 0px !important;
    padding: 0.5rem 1rem 0.5rem 1rem;
    padding-left: 1rem;
    border-radius: 9999px;
    transition: all 0.1s;
    color: #0000007c;
}

.sc-dUOoGL > .hLNQlH:hover {
    /* section (notifications, activity) */
    text-decoration: none;
    background: #00000010;
    color: #00000090;
}

.sc-dUOoGL > .hLNQlH:active {
    scale: 0.95;

}

.sc-dUOoGL > .clODPz {
    margin: 0px !important;
    padding: 0.5rem 1rem 0.5rem 1rem;
    border-radius: 9999px;
    transition: all 0.1s;
}

.sc-dUOoGL > .clODPz:hover {
    /* SELECTED section (notifications, activity) */
    text-decoration: none;
    background: #00000010;

}

/*notification*/
.sc-oBxuN {
    margin: 0px;
    box-shadow: none;
    background: transparent;
    border-top: 1px solid #d5d5d5;
    border-radius: 0px;
    transition: all 2ms;
}
.sc-hBUXXM:has(* > .sc-oBxuN:active) {
    scale: 0.99;
}


.sc-oBxuN:hover {
    box-shadow: none;
    background: #00000010;
}

.sc-oBxuN > .dXBgFl {
    border-radius: 0px;
 }

/* emoji mart emoji popup */
.emoji-mart-light {
    box-shadow: inset 10px 10px 10px #00000005, inset -3px -3px 10px #ffffff31, 2px 2px 10px #0000000a;
    background: #ffffffb6;
    backdrop-filter: blur(30px);
    border: 1px solid #d5d5d5;
    transition: all 0.1s;
    animation: show 600ms 100ms cubic-bezier(0.38, 0.97, 0.56, 0.76) forwards;
    border-radius: 1rem;
    transform: translate(3.2rem, -2.4rem);
}

.emoji-mart-search {
    align-items: center;
    background: #ffffff72;
    padding-bottom: 0.2rem;
}

.emoji-mart-search > input {
    background: #fcfcfccb;
    border: 1px solid #d5d5d5 !important;
    border-radius: 1rem !important;
    transition: all 0.1s;
    box-shadow: inset 10px 10px 10px #00000003, inset -3px -3px 10px #ffffff46;
}

.emoji-mart-category-label > span {
    background: #ffffffbd;
    backdrop-filter: blur(10px);
}

.emoji-mart-anchor-selected > .emoji-mart-anchor-icon {
    color: #000000;
}

.emoji-mart-anchor-selected > .emoji-mart-anchor-bar {
    background-color: #000000 !important;
}


.lkwOTm {
    /* message hover emoji picker */
    box-shadow: none;
    border: 1px solid #d5d5d5;
    background: #f9f9f9a9;
    backdrop-filter: blur(10px);
    transition: none;
    border-radius: 1rem;
    padding: 0rem 0.5rem 0rem 0.5rem;
    width: fit-content;
    height: fit-content;
}
.lkwOTm:hover {
    /* message hover emoji picker */
    box-shadow: 1px 1px 10px #00000015;
    transition: all 0.1s;
}

.sc-cPiKLX {
    padding-left: 0px !important;
    height: auto;
}

.sc-cPiKLX:hover {
}

.sc-cPiKLX > button {
    margin: 0.5rem 0rem 0.5rem 0rem;
}

.sc-bWJUgm > .sc-lmUcrn > .sc-cPiKLX > button:hover {
    scale: 1.2;
    transition: all 0.1s;
    background: transparent;
}

.sc-bWJUgm > .sc-lmUcrn > .sc-cPiKLX > button:active {
    scale: 0.9;
    transition: all 0.1s;
}

.sc-bWJUgm > .mt-2 > span > button {
    background: #00000009;
    transition: all 0.1s;
}

.sc-bWJUgm > .mt-2 > span > button:hover {
    background: #00000014;
    transition: all 0.1s;
}

.sc-bWJUgm > .mt-2 > span > .eyeOZH {
    background: #000000;
}

.sc-bWJUgm > .mt-2 > span > .eyeOZH:hover {
    background: #000000;
}

.hWcPiQ {
    top: -28px;
}

/*user profile card*/
.sc-iXzfSG {
    box-shadow: 2px 2px 10px #0000000a;
    background: #fcfcfccb;
    backdrop-filter: blur(30px);
    border: 1px solid #d5d5d5;
    transition: 0.1s;
    border-radius: 1rem;
    margin: 1rem;
}

.sc-dLMFU > * > .ctbQnv {
    margin-top: 0.5rem !important;
    max-height: 200px;
    display: flex;
    overflow: scroll;
    scrollbar-width: thin;
}

/* tag */
.sc-cPiKLX > .sc-bmzYkS {
    border-radius: 1rem;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    opacity: 0.8;
    box-shadow: inset -3px -3px 5px #00000009, inset 3px 3px 10px #ffffff6c;

}

.sc-iXzfSG > .mb-3 {
    /*bio*/
    max-height: 320px !important;
}

.sc-iXzfSG > * > img {
    /*bio*/
    max-height: 6rem !important;
    max-width: 6rem !important;
}
.sc-iXzfSG > * > * > p {
    /*bio*/
    font-size: 1.5rem !important;
    font-weight: normal;
}

.popover > .arrow {
    display: none;
}

.popover {
    background: transparent;

}

.sc-gEvEer {
    background: #1b1b1b !important;
    border-radius: 9999px;
    box-shadow: inset -10px -10px 10px #00000009, inset 3px 3px 10px #ffffff46, 1px 1px 4px #00000010;
    transition:  all 0.1s;
    font-weight: normal;
}
.sc-gEvEer:hover {
    box-shadow: inset -10px -10px 10px #00000009, inset 3px 3px 10px #ffffff46, 1px 1px 8px #00000032;
    transition:  all 0.1s;

}
.sc-gEvEer:active {
    scale: 0.95;
    box-shadow: inset 10px 10px 10px #00000009, inset -3px -3px 10px #ffffff46, -1px -1px 8px #00000032;

}


/* image modal */
.ril__outer {
    background: #00000060;
    backdrop-filter: blur(24px);
}
.ril__toolbar {
    background: transparent;
}

.ril-image-current {
}


.kwhSpk {
    /*search popover*/
    box-shadow: 2px 2px 30px #00000024;
    background: #fcfcfccb;
    backdrop-filter: blur(30px);
    border: 1px solid #d5d5d5;
    transition: 0.1s;
    border-radius: 2rem;
    margin: 1rem;
    top: 30%;
    transition: all 0.1s;
    padding: 1rem;
}

.kwhSpk:hover {
    transition: all 0.1s;
}
/*search filters (conversations, docs, events, users)*/
.kwhSpk > * > * > * > .sc-jOnpCo {
    background: #ffffffcf;
    border: 1px solid #e0e0e0 !important;
    border-radius: 1rem;
    box-shadow: inset 10px 10px 10px #00000003, inset -3px -3px 10px #ffffff46, 1px 1px 3px #00000006;
    margin: 0rem 0.5rem 0rem 0rem !important;
    transition: all 0.1s;
}

.kwhSpk > * > * > * > .sc-jOnpCo:hover {
    box-shadow: inset 10px 10px 10px #00000003, inset -3px -3px 10px #ffffff46, 1px 1px 5px #00000010;
}

.kwhSpk > * > * > * > .sc-jOnpCo:active {
    box-shadow: inset 10px 10px 10px #00000003, inset -3px -3px 10px #ffffff46, 1px 1px 2rgba(0, 0, 0, 0.015)010;
    scale: 0.95;
}

.ql-editor {
    background: #fcfcfccb;
    backdrop-filter: blur(30px);
    border: 1px solid #d5d5d5 !important;
    border-radius: 1rem !important;
    transition: all 0.1s;
    width: 100%;
    box-shadow: inset 10px 10px 10px #00000003, inset -3px -3px 10px #ffffff46;
}
.ql-editor:focus {
    background: #f7f7f7d9;
    border: 1px solid #e0e0e0 !important;
}


.quill {
    background: transparent;
}

.sc-uVWWZ, .guHyPy, textarea {
    background: #fcfcfccb;
    backdrop-filter: blur(30px);
    border: 1px solid #d5d5d5 !important;
    border-radius: 1rem !important;
    transition: all 0.1s;
    width: 100%;
    box-shadow: inset 10px 10px 10px #00000003, inset -3px -3px 10px #ffffff46;

}

/* switch community or create community*/
.gxjtMH {
    box-shadow: 2px 2px 10px #0000000a;
    background: #fcfcfccb;
    backdrop-filter: blur(30px);
    border: 1px solid #d5d5d5;
    transition: all 0.1s;
    border-radius: 1rem;
    width: inherit;
    height: inherit;
    padding: 0.5rem;
    left: 3rem;
    top: 1rem;
}


/* forum post pinned */
.huROvG {
    background: #fcfcfccb;
    backdrop-filter: blur(30px);
    border: 1px solid #d5d5d5;
    transition: 0.1s;
    border-radius: 2rem;
    margin: 1rem;
    transition: all 0.1s;
    padding: 1rem;
    box-shadow: none !important;
    width: 100% !important;
    margin: 0px;
}

/* forum post */
.sc-ktPPKK {
    background: #fcfcfccb;
    backdrop-filter: blur(30px);
    border: 1px solid #d5d5d5;
    transition: 0.1s;
    border-radius: 2rem;
    margin: 1rem;
    transition: all 0.1s;
    padding: 1rem;
    box-shadow: none !important;
    width: 100%;
    margin: 0px;
}

/* link / bookmark */
.react_tinylink_card {
    border-radius: 1rem;
    box-shadow: none;
}

#postScroller {
    background: #ffffff;
}

#postScroller > * {
    width: 80%;
    max-width: 800px;
}

#postScroller > * > .fLcVSM {
    width: 100% !important;
}

/*make post button*/
#postScroller > * > button {
    background: #fcfcfccb;
    backdrop-filter: blur(30px);
    border: 1px solid #d5d5d5;
    transition: 0.1s;
    border-radius: 2rem;
    margin: 1rem;
    transition: all 0.1s;
    padding: 1rem;
    box-shadow: none !important;
    width: 100%;
    margin: 0px;
}


/* search bar searchbar top*/
.ktNBiY {
    background: #fcfcfccb;
    backdrop-filter: blur(30px);
    border: 1px solid #d5d5d5 !important;
    border-radius: 9999px !important;
    transition: all 0.1s;
    width: 100%;
    box-shadow: inset 10px 10px 10px #00000003, inset -3px -3px 10px #ffffff46;
}

/* dropdown menu */
.gcWACU {
    box-shadow: inset 10px 10px 10px #00000005, inset -3px -3px 10px #ffffff31, 2px 2px 10px #0000000a;
    background: #ffffffb6;
    backdrop-filter: blur(30px);
    border: 1px solid #d5d5d5;
    transition: all 0.1s;
    border-radius: 1rem;
    width: inherit;
    height: inherit;
    padding: 0.5rem;
}

/*dropdown menu item*/
.kFSSHK {
    border-radius: 0.75rem;
    white-space:nowrap;
    padding-left: 1rem;
    padding-right: 1rem;

}

.kFSSHK:hover {
    background: #00000010;
    box-shadow: inset -5px -5px 10px #00000003, inset 3px 3px 10px #ffffff40;
    transition: all 0.1s;
}

/*dropdown button*/
.jeAurc {
    border-radius: 9999px;
    transition: all 0.1s;
}

.jeAurc:hover {
    background: #00000014;
    transition: all 0.1s;
}
/*selected / active dropdown button*/

.hhrbUd {
    background: #0000002c;
    border-radius: 9999px;
    transition: all 0.1s;
}

.hhrbUd:hover {
    background: #0000002c;
}


/* dropdown button in events page (has a title)*/
.kKkvIM {
    background: #ffffffcf;
    border: 1px solid #e0e0e0 !important;
    border-radius: 1rem;
    box-shadow: inset 10px 10px 10px #00000003, inset -3px -3px 10px #ffffff46, 1px 1px 3px #00000006;
    margin: 0rem 0.5rem 0rem 0rem !important;
    transition: all 0.1s;
}
.kKkvIM:hover {
    box-shadow: inset 10px 10px 10px #00000003, inset -3px -3px 10px #ffffff46, 1px 1px 5px #00000010;
    transition: all 0.1s;
}

.bTlZZP {
    box-shadow: none;
    background: #00000018;
    transition: all 0.1s;
    border-radius: 1rem;
    border: 1px solid #e0e0e0 !important;
    outline: none;
}

/*dropdown menu in events page (switch between monthly and agenda view)*/
.sc-jXbUNg {
    box-shadow: inset 10px 10px 10px #00000005, inset -3px -3px 10px #ffffff31, 2px 2px 10px #0000000a;
    background: #ffffffb6;
    backdrop-filter: blur(30px);
    border: 1px solid #d5d5d5;
    transition: all 0.1s;
    border-radius: 1rem;
    width: inherit;
    height: inherit;
    padding: 0.5rem;

}
/*dropdown menu item in events page */
.sc-jXbUNg > * > .lfcuiN {
    border-radius: 0.75rem;
    white-space:nowrap;
    padding-left: 1rem;
    padding-right: 1rem;
}
.sc-jXbUNg > * > .lfcuiN:hover {
    background: #00000010;
    box-shadow: inset -5px -5px 10px #00000003, inset 3px 3px 10px #ffffff40;
    transition: all 0.1s;
}

/*wiki / resources page & users page*/
.sc-bVHCgj {
    background: #ffffff;
    display: flex;
    align-items: center;
}

.sc-bVHCgj > * {
    width: 100%;
}

.rbc-calendar > .sc-ktPPKK {
    background: none;
    backdrop-filter: none;
    border: none;
    padding: 0px;
    margin-bottom: 2rem !important;
}
.rbc-calendar > .sc-ktPPKK > .sc-cPiKLX {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
}
.rbc-calendar > .sc-ktPPKK > .sc-cPiKLX > p {
    font-size: 2rem !important;
    font-weight: normal;
}

.sc-bVHCgj > .sc-ktPPKK {
    padding: 0px;
    border: none;
    background: none;
    max-width: 1200px;
}

/* monthly calendar */
.rbc-month-view {
    width: 100% !important;
    max-width: 1200px;
    display: block;
    background: transparent;
    box-shadow: none !important;
    border-radius: 2rem !important;
    position: relative;
    padding: 0px !important;
    border: 1px solid #d5d5d5 !important;
    overflow: hidden;
    flex-grow: 1;
}


.rbc-month-header {
    margin-bottom: 0px !important;
    background: none;
}

.rbc-month-header > * {
    background: #00000009 !important;
    margin: 0px !important;
    box-shadow: none !important;
    outline: 1px solid #d5d5d5;
    border-radius: 0px !important;
}

.rbc-month-row {
    margin-bottom: 0px !important;
    flex-grow: 1;
}

.rbc-month-row > .rbc-row-bg > * {
    background: none;
    margin: 0px !important;
    box-shadow: none !important;
    border-radius: 0px;
    outline: 1px solid #d5d5d5;
    flex-grow: 1;
    
}

.rbc-current, .rbc-current > .rbc-button-link {
    background: #000000 !important;
    color: #ffffff !important;
    border-radius: 0px !important;
}

.rbc-date-cell {
    margin: 0px !important;
}

.rbc-row-segment {
    padding: 0px 0px 4px 0px !important;
}

/* past events button */
.sc-aXZVg {
    background: transparent;
    transition: all 0.1s;
    border-radius: 2rem;
    margin: 1rem;
    transition: all 0.1s;
    padding: 1rem;
    margin: 0px;
}
.sc-aXZVg:hover {
    background: #00000014;
    transition: all 0.1s;
}
.sc-aXZVg:active {
    scale: 0.95;
    transition: all 0.1s;
}


.sc-bVHCgj > .sc-ktPPKK > * > * > * > .sc-fUnMCh {
    border: none;
    margin: 0rem 2rem 0rem 0rem;
    transition: all 0.1s;
    padding: 0px;
    box-shadow: none !important;
    width: 100%;
}

.sc-bVHCgj > .sc-ktPPKK > * > * > * > .sc-fUnMCh > * > * > * > p > span {
    /*name in user directory / soraverse*/
    font-size: 1.5rem !important;
    font-weight: normal;
    color: #000000ee;
}

.sc-bVHCgj > .sc-ktPPKK > * > * > * > .sc-fUnMCh > * > * > .qkEXX {
    max-height: 80px;
    display: flex;
    overflow: scroll;
    scrollbar-width: thin;
}

.sc-bVHCgj > .sc-ktPPKK > * > * > * > .sc-fUnMCh > * > * > .qkEXX > * {
    margin: 0.2rem;
}

.rbc-agenda-view {
    width: inherit !important;
    max-width: 800px;
    display: block;
    background: transparent;
    box-shadow: none !important;
    border-radius: 0px;
    position: relative;
    padding: 0px !important;
}

.sc-bVHCgj > .sc-ktPPKK > * > * > * > .sc-fUnMCh > * > .sc-lizKOf {
    /*user directory image */
    width: 5rem;
    height: 5rem;
    margin-right: 1rem !important;
}

.sc-bVHCgj > .sc-ktPPKK > * > * > * > .sc-fUnMCh > * > * > * > .sc-gsFSXq {
    /*start chat button in user directory*/
    margin: 0px;
}

.rbc-agenda-date-cell {
    font-size: 1.5rem !important;
    font-weight: normal;
    color: #000000ee;
    padding: 0px !important;
}

.rbc-agenda-event-cell {
    padding: 0px !important;
}

.rbc-agenda-event-cell > *{
    background: #fcfcfccb;
    backdrop-filter: blur(30px);
    border: 1px solid #d5d5d5;
    transition: 0.1s;
    border-radius: 2rem;
    margin-bottom: 1rem;
    transition: all 0.1s;
    padding: 1rem;
    box-shadow: none !important;
}

.sc-bVHCgj > * > .sc-eTTeRg {
    background: #fcfcfccb;
    backdrop-filter: blur(30px);
    border: 1px solid #d5d5d5;
    transition: 0.1s;
    border-radius: 2rem;
    margin: 1rem;
    transition: all 0.1s;
    padding: 1rem;
    box-shadow: none !important;
    width: 100%;
    margin: 0px;
}

.sc-bVHCgj > * > .sc-eTTeRg > * > img {
    border-radius: 1rem !important;
}
    `);
}, 2000); // Adjust the time in milliseconds (2000 milliseconds = 2 seconds)

