import {createDomElem}  from "./index";

const menu = [
    {
        item: "Chatpati",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper senectus euismod, dictum torquent eleifend praesent quis est magna metus lectus, potenti iaculis",
        price: 10
    },
    {
        item: "Fuchka",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper senectus euismod, dictum torquent eleifend praesent quis est magna metus lectus, potenti iaculis",
        price: 15
    },
    {
        item: "Jhalmuri",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper senectus euismod, dictum torquent eleifend praesent quis est magna metus lectus, potenti iaculis",
        price: 5,
    },
    {
        item: "Achar",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper senectus euismod, dictum torquent eleifend praesent quis est magna metus lectus, potenti iaculis",
        price: 5
    },
    {
        item: "Goru vuna",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper senectus euismod, dictum torquent eleifend praesent quis est magna metus lectus, potenti iaculis",
        price: 25
    }

]

export default function render(){
    const container = document.querySelector(".main-body")
    while (container.lastElementChild){
        container.removeChild(container.lastElementChild);
    }
    container.style["background-size"] = "0px 0px";
    const titleDiv = createDomElem("div", ["menu-title"]);
    titleDiv.appendChild(createDomElem("p", ["cursive"], "title", null, "Devour"));
    titleDiv.appendChild(createDomElem("h1", [], null, null, "MENU"));
    titleDiv.appendChild(document.createElement("hr"));
    container.appendChild(titleDiv)
    const menuWrapper = container.appendChild(createDomElem("div", [], "menu-wrapper", null, null));
    for ( const dish of menu){
        const menuCard = createDomElem("div", ["menu-card"]);
        menuCard.appendChild(createDomElem(
            "p" , ["dish-title"], null, null, dish["item"]
        ));
        menuCard.appendChild(createDomElem(
            "p" , ["dish-des"], null, null, dish["description"]
        ));
        menuCard.appendChild(createDomElem(
            "hr" , ["menu-hr"], null, null, null
        ));
        menuWrapper.appendChild(menuCard);
    }
    container.appendChild(menuWrapper);
}