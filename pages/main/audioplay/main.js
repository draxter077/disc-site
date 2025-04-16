import icon from "./icon/main.js"

export default function audioplay(){
    let style = `
        {
            padding:10px;
            background:rgb(255,128,128);
            border-radius:50%;
            transition:box-shadow var(--transitionTime);
            transition:opacity var(--transitionTime);
        }
        :hover{
            box-shadow:0px 0px 10px 0px var(--colorWhite);
        }`

    const audioplay = cE("button", style)
    audioplay.appendChild(icon())

    audioplay.addEventListener(
        "click",
        function a(e){
            let audio = cE("audio", style);
            audio.src = "./assets/fineline.mp3";
            audio.play();
            audioplay.style.opacity = 0
            e.target.parentElement.parentElement.children[0].style = "animation:rotate 50s linear 0s infinite forwards;"
        },
        {once:true}
    )
    return(audioplay)
}