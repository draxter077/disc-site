export default function tonearm(){
    let style = `
        {
            position:absolute;
            height:80%;
            right:-40%;
            top:-10%;
            transform:rotate(-50deg);
        }
        @keyframes getIn{
            0%[right:-40%;transform:rotate(-50deg);]
            100%[right:-30%;transform:rotate(-30deg);]
        }`

    const tonearm = cE("img", style)
    tonearm.id = "tonearm"
    tonearm.src = "./assets/tonearm.png"
    return(tonearm)
}