// top.js
import { changeModal } from "./modules/changeModal.js";
import { se } from "./modules/music.js";

document.getElementById("top-button-start").addEventListener("click", () => {
  // indexとかを初期化する必要がある
  // これはopening.jsでやる
  changeModal("opening");
  se.play("button1");
});

document.getElementById("top-button-continue").addEventListener("click", () => {
  changeModal("loadgame");
  se.play("button2");
});

document.getElementById("top-button-gallary").addEventListener("click", () => {
  changeModal("gallary");
  se.play("button2");
});

document.getElementById("top-button-setting").addEventListener("click", () => {
  changeModal("setting");
  se.play("button2");
});