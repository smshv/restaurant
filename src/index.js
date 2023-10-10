import "./css/style.css"
import renderHome from "./home"
import renderMenu from "./menu";
import renderContact from "./contactUs";

export function createDomElem(
    type, classList = [], id=null, innerHTML=null, textContent = null
){
    const element = document.createElement(type);
    if ( id ){
        element.setAttribute("id", id);
    }
    classList.forEach(className=>{
        element.classList.add(className);
    });
    if ( innerHTML ){
        element.innerHTML = innerHTML;
    }else if( textContent ){
        element.textContent = textContent;
    }
    return element;
}

renderHome();

document.querySelector("#home").addEventListener("click", ()=>renderHome());
document.querySelector("#menu").addEventListener("click", ()=>renderMenu());
document.querySelector("button").addEventListener("click", ()=>renderHome());
document.querySelector("#contact").addEventListener("click", ()=>renderContact());