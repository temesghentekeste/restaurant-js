(()=>{"use strict";var e={843:(e,t,n)=>{n.r(t),n.d(t,{getButton:()=>o});const o=(e,t,n)=>{const o=document.createElement("a");return t.forEach((e=>{o.classList.add(e)})),o.textContent=n,o.setAttribute("href",e),o}},941:(e,t,n)=>{n.r(t),n.d(t,{getFooter:()=>o});const o=()=>{const e=document.createElement("footer");return e.id="main-footer",e.classList.add("py-2"),e.innerHTML='\n   \n        <div class="container footer-container">\n          <div>\n            <h3>Delivering Dishes</h3>\n            <p>\n              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit\n              deserunt assumenda enim non? Ratione ipsum voluptates fuga eos\n              earum vitae.\n            </p>\n          </div>\n          <div>\n            <h3>Email Newsletter</h3>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\n            <form>\n              <input type="email" placeholder="Enter Email..." />\n              <input type="submit" value="Subscribe" class="btn btn-primary" />\n            </form>\n          </div>\n          <div>\n            <h3>Site Links</h3>\n            <ul class="list">\n              <li><a href="#">Help & Support</a></li>\n              <li><a href="#">Privacy Policy</a></li>\n              <li><a href="#">About Us</a></li>\n              <li><a href="#">Contact</a></li>\n            </ul>\n          </div>\n          <div>\n            <h2>Join Us</h2>\n            <p>\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,\n              nesciunt!\n            </p>\n            <a href="#" class="btn btn-secondary">Join Now</a>\n          </div>\n          <div>\n            <p>Copyright &copy; 2021, All Rights Reserved</p>\n          </div>\n        </div>\n  ',e}},561:(e,t,n)=>{n.r(t),n.d(t,{getHeader:()=>i});const{getButton:o}=n(843),i=()=>{const e=document.createElement("header");e.id="showcase";const t=document.createElement("div");t.classList.add("container");const n=document.createElement("div");n.classList.add("showcase-container");const i=document.createElement("div");i.classList.add("showcase-content");const a=document.createElement("h1");a.textContent="Eat & Drink Restaurant",i.appendChild(a);const r=document.createElement("p");r.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nPossimus rerum officia quibusdam mollitia deserunt animi soluta\nlaudantium. Quam sapiente a dolorum magnam necessitatibus quis\ntempore facere totam. Dolor, sequi distinctio!",i.appendChild(r);const s=o("menu",["btn","btn-primary"],"Order");return i.appendChild(s),n.appendChild(i),t.appendChild(n),e.appendChild(t),e}},80:(e,t,n)=>{n.r(t),n.d(t,{getMenu:()=>i});const{menuItems:o}=n(306),i=()=>{const e=document.createElement("nav"),t=document.createElement("ul");return o.forEach((e=>{const n=document.createElement("li"),o=document.createElement("a");o.textContent=e.charAt(0).toUpperCase()+e.slice(1),o.setAttribute("href",""),n.appendChild(o),t.appendChild(n)})),e.id="main-nav",e.appendChild(t),e}},306:(e,t,n)=>{n.r(t),n.d(t,{menuItems:()=>o});const o=["home","menu","about"]}},t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const{getHeader:e}=n(561),{getFooter:t}=n(941),o=()=>{const n=document.querySelector("#content"),o=e();n.appendChild(o);const i=t();n.appendChild(i)},{getMenu:i}=n(80),{getHeader:a}=n(561),{getFooter:r}=n(941),s=()=>{const e=document.querySelector("#content"),t=i();e.appendChild(t);const n=a();e.appendChild(n);const o=r();e.appendChild(o)},{getMenu:c}=n(80),d={init(){const e=document.querySelector("nav"),t=document.querySelector("#content"),n=e.querySelector("a");console.log(n),e.addEventListener("click",(e=>{if(e.preventDefault(),"A"===e.target.tagName)switch(t.innerHTML="",e.target.innerText){case"Home":o(),console.log("Home page");break;case"Menu":t.innerHTML="",s(),console.log("Menu page");break;case"About":t.innerHTML="",s(),console.log("About");break;default:console.log("Other")}}))}};o(),d.init()})()})();