function showAlbum(albumID){
    //Esconder todos os albuns
    const albuns = document.querySelectorAll('.gallery-content');
    albuns.forEach(album => album.computedStyleMap.display = 'none');

    //Mostrar o album desejado
    const selectedAlbum = document.getElementById(albumID);
    selectedAlbum.style.display = 'block';
}

function hideAlbum(){
    //Esconder todos os albuns
    const albuns = document.querySelectorAll('.gallery-content');
    albuns.forEach(album => album.style.display = 'none');
}