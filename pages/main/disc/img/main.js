export default function img(){
    let style = `
        {
            width:100%;
            height:100%;
            border-radius:50%;
            transition:transform var(--transitionTime);
            animation:rotate 50s linear 2s infinite forwards;
        }`

    const img = cE("img", style)
    img.id = "disc"
    img.src = "./assets/album.png"
    img.style.animationPlayState = "paused"
    return(img)
}