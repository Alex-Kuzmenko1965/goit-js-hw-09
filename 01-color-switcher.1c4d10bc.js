!function(){var t,o={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};function n(t){console.log("changeColor"),document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}o.startBtn.addEventListener("click",(function(){console.log("Start"),t=setInterval(n,1e3),o.startBtn.disabled=!0,o.stopBtn.disabled=!1})),o.stopBtn.addEventListener("click",(function(n){console.log("Stop"),clearInterval(t),o.startBtn.disabled=!1,o.stopBtn.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.1c4d10bc.js.map
