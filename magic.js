(function () {
  chrome.runtime.onMessage.addListener(function (req, sender, response) {
    if (req.message == "lol") {
      console.log('no')
      let thecss = `html {
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
    }`;

      const css = document.createElement("style");
      css.innerHTML = thecss;
      document.head.appendChild(css);
      response("ok");
    }
    return true;
  });
})();
