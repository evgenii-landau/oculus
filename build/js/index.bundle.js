!function(){"use strict";const t=document.querySelectorAll(".tabs__btn-item"),e=document.querySelectorAll(".tabs__content-item");!function(){function c(c){const n=c.currentTarget,s=n.dataset.button;t.forEach((t=>{t.classList.remove("tabs__btn-item--active")})),e.forEach((t=>{t.classList.remove("tabs__content-item--active")})),n.classList.add("tabs__btn-item--active"),document.getElementById(s).classList.add("tabs__content-item--active")}t.forEach((t=>{t.addEventListener("click",c)}))}()}();