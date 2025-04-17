export default function option(t, m){
    let style = `
        {
            font-size:20px;
            padding:10px;
            border-radius:5px;
            border:3px solid var(--${t.replaceAll(" ", "").toLowerCase() == m ? "secundaryColor" : "colorWhite"});
            margin:5px;
            color:white;
            transition:border var(--transitionTime);
        }
        :hover{
            border:3px solid var(--secundaryColor);
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