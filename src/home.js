import { createDomElem } from ".";

function createHeader(container){
    const header = createDomElem("div", ["header"], null, null, null);
    const nav = createDomElem("ul");
    [["home", "home"], ["menu", "menu"], ["contact", "contact us"]].forEach(elem=>{
        const id = elem[0];
        const text = elem[1];
        nav.appendChild(createDomElem("li",[],id,null, text));
    });
    header.appendChild(nav);
    return header;
}

function createMainBody(mainBodyDiv=null){
    let mainBody;
    if ( !mainBodyDiv ){
        mainBody = createDomElem("div", ["main-body"]);
    }else{
        mainBody = mainBodyDiv;
        while (mainBody.lastElementChild){
            mainBody.removeChild(mainBody.lastElementChild);
        }
    }
    mainBody.appendChild(createDomElem("p", ["cursive"], "title", null, "Devour"));
    mainBody.appendChild(createDomElem("h1", [], null, "@<br>Dhaka", null));
    mainBody.appendChild(createDomElem("p", ["msg"], null, null, "Best place to eat in Dhaka!"));
    mainBody.appendChild(document.createElement("hr"));
    mainBody.appendChild(createDomElem("button", [], null, null, "Menu"));
    mainBody.style["background-size"] = "cover"
    return mainBody;
}

function createFooter(){
    return createDomElem("div", ["footer"], null, null, "Created by SM shuvo");
}

export default function render(){
    const container = document.querySelector(".content");

    if ( container.querySelector(".main-body") ){
        createMainBody(container.querySelector(".main-body"));
    }else{
        container.appendChild(createHeader());
        container.appendChild(createMainBody());
        container.appendChild(createFooter());
    }
}