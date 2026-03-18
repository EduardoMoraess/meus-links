const linksInfo = [
    {id:1 , url: "https://youtu.be/c65yR7FWJsM?si=IzoVNvbwM0Ldj2V4"},
    {id:2 , url: ""},
    {id:3 , url: ""},
]

function acessarInfo(idInfo){
    const infoEncontrada = linksInfo.find(item => item.id === idInfo);

    if(infoEncontrada){
        open(infoEncontrada.url, "_blank");
    }
    else{
        console.error("Informação não emcontrada");
    }
}