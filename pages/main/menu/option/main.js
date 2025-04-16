export default function option(t){
    let style = `
        {
            font-size:20px;
            padding:10px;
            border-radius:5px;
            border:1px solid var(--colorWhite);
            margin:5px;
            color:white;
            transition:border var(--transitionTime);
        }
        :hover{
            border:1px solid rgb(255,128,128);
        }`

    const option = cE("button", style)
    option.innerHTML = t
    option.addEventListener(
        "click",
        function a(){
            window.location.href = `/${t.replaceAll(" ", "").toLowerCase()}`
        }
    )
    return(option)
}