import disc from "./disc/main.js"
import audioplay from "./audioplay/main.js"
import menu from "./menu/main.js"

export default function main(m){
    let pColor, sColor
    if(m == "fineline"){pColor="rgb(111, 161, 246)";sColor="rgb(255,128,128)"}
    else if(m == "cherry"){pColor="rgb(111, 161, 246)";sColor="rgb(255,128,128)"}
    else if(m == "fireproof"){pColor="rgb(0, 0, 0)";sColor="rgb(150, 150, 150)"}
    else if(m == "littlethings"){pColor="rgb(171, 55, 55)";sColor="rgb(150, 150, 150)"}
    else if(m == "neverletyougo"){pColor="rgb(92, 45, 131)";sColor="rgb(150, 150, 150)"}
    else if(m == "mysteryoflove"){pColor="rgb(0, 106, 184)";sColor="rgb(242, 229, 46)"}
    document.getElementsByTagName("style")[0].innerHTML += `:root{--primaryColor:${pColor}; --secundaryColor:${sColor}}`
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            width:100%;
            height:100dvh;
            background:var(--primaryColor);
        }`

    const main = cE("div", style)
    main.appendChild(disc(m))
    main.appendChild(audioplay(m))
    main.appendChild(menu(m))
    return(main)
}