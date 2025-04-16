export default function disc(){
    let style = `
        {
            position:relative;
            height:60%;
            border-radius:50%;
            margin:0px 0px 25px 0px;
        }
        :responsive{
            width:80%;
            height:fit-content;
        }
        @keyframes rotate{
            0%[transform:rotate(0deg)]
            100%[transform:rotate(360deg)]
        }`

    const disc = cE("img", style)
    disc.src = "./assets/album.png"
    return(disc)
}