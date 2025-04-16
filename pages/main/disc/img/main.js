export default function img(){
    let style = `
        {
            width:100%;
            height:100%;
            border-radius:50%;
        }`

    const img = cE("img", style)
    img.id = "disc"
    img.src = "./assets/album.png"
    return(img)
}