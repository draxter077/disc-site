import option from "./option/main.js"

export default function menu(m){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            width:100%;
            margin:20px 0px 0px 0px;
        }`

    const menu = cE("div", style)
    let ns = ["Fine Line", "Cherry", "Fireproof", "Little Things", "Never Let You Go", "Mystery of Love"]
    for(let n = 0; n < ns.length; n++){
        menu.appendChild(option(ns[n], m))
    }
    return(menu)
}