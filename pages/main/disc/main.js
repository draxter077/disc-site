import img from "./img/main.js"
import tonearm from "./tonearm/main.js"

export default function disc(){
    let style = `
        {
            position:relative;
            height:60%;
            margin:0px 0px 20px 0px;
        }
        :responsive{
            width:80%;
            height:fit-content;
        }
        @keyframes rotate{
            0%[transform:rotate(0deg)]
            100%[transform:rotate(360deg)]
        }`

    const disc = cE("div", style)
    disc.appendChild(img())
    disc.appendChild(tonearm())
    return(disc)
}