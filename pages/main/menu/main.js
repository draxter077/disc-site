import option from "./option/main.js"

export default function menu(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            width:100%;
            margin:20px 0px 0px 0px;
        }`

    const menu = cE("div", style)
    let ns = ["Fine Line"]
    for(let n = 0; n < ns.length; n++){
        menu.appendChild(option(ns[n]))
    }
    return(menu)
}