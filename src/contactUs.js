import { createDomElem } from "./index";

export default function render(){
    const container = document.querySelector(".main-body")
    while (container.lastElementChild){
        container.removeChild(container.lastElementChild);
    }
    container.style["background-size"] = "0px 0px";
    const titleDiv = createDomElem("div", ["menu-title"]);
    titleDiv.appendChild(createDomElem("p", ["cursive"], "title", null, "Devour"));
    titleDiv.appendChild(createDomElem("h1", [], null, null, "CONTACT US"));
    titleDiv.appendChild(document.createElement("hr"));
    titleDiv.appendChild(createDomElem("p", [], null, null, "Lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper senectus euismod, dictum torquent eleifend praesent quis est magna metus lectus, potenti iaculisLorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper senectus euismod, dictum torquent." ));
    container.appendChild(titleDiv)
}