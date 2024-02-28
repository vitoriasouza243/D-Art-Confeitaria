function downloadCardapio() {
    var link = document.createElement('a');
    link.href = './download/bolos.pdf'; 
    link.download = 'bolos.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}