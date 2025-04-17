import icon from "./icon/main.js"

export default function audioplay(m){
    let style = `
        {
            padding:15px;
            background:var(--secundaryColor);
            border-radius:100px;
        }`

    const audioplay = cE("button", style)
    audioplay.appendChild(icon())

    let audio = cE("audio", undefined)
    audio.src = `./assets/${m}.mp3`
    audio.id = "audio"

    audioplay.addEventListener(
        "click",
        async function a(e){
            if(document.getElementById("disc").style.animationPlayState == "paused"){
                document.getElementById("icon").src = "./assets/pause.png"
                document.getElementById("icon").style = "padding:5px;"
                document.getElementById("tonearm").style = "animation:getIn 2s ease 0s 1 forwards;"
                document.getElementById("disc").style.animationPlayState = "running"
                if(audio.currentTime == 0){await new Promise(resolve => setTimeout(resolve, 2000))}
                audio.play()
            }
            else{
                document.getElementById("icon").src = "./assets/play.png"
                document.getElementById("icon").style = "padding:0px 0px 0px 7px;"
                document.getElementById("disc").style.animationPlayState = "paused"
                audio.pause()
            }
        }
    )
    return(audioplay)
}