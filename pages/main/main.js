import disc from "./disc/main.js"
import audioplay from "./audioplay/main.js"

export default function main(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            width:100%;
            height:100dvh;
            background:rgb(111,161,246);
        }`

    const main = cE("div", style)
    main.appendChild(disc())
    main.appendChild(audioplay())
    return(main)
}