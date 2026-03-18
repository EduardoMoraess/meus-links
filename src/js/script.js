const listaLinks = [
    { id: 1, url: "https://jovens-ibm-ipsep.netlify.app/" },
    { id: 2, url: "https://github.com/EduardoMoraess" },
    { id: 3, url: "https://www.instagram.com/eduardo_moraaees/" },
    { id: 4, url: "src/pages/blog.html" },
]

function abrirLink(idDesejado) {
    // Encontra o objeto que tem o ID igual ao passado na função
    const linkEncontrado = listaLinks.find(item => item.id === idDesejado);

    if (linkEncontrado) {
        window.open(linkEncontrado.url, "_blank");
    } else {
        console.error("Link não encontrado!");
    }
}