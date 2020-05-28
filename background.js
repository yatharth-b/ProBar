"use strict";
chrome.runtime.onInstalled.addListener(function () {
  console.log("Screenshotter Ready");

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { schemes: ["https", "http"] },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});

function main() {
  let thecss=`html {
      --scrollbarBG: white;
      --thumbBG: #262525;
      }
  body::-webkit-scrollbar {
  width: 11px;
  }
  body {
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
  }
  body::-webkit-scrollbar-track {
  background: var(--scrollbarBG);
  }
  body::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG) ;
  border-radius: 6px;
  border: 3px solid var(--scrollbarBG);
  }`


const css = document.createElement("style");
css.innerHTML=thecss
document.head.appendChild(css);

}

chrome.runtime.onMessage.addListener(function (req, sender, response) {
  if (req.message == "lol") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: "main();"});
    });
  }
  return true;
});