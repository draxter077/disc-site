export default function icon(){
    let style = `
        {
            width:40px;
            height:40px;
            padding:0px 0px 0px 7px;
        }`

    const icon = cE("img", style)
    icon.src = "./assets/play.png"
    return(icon)
}