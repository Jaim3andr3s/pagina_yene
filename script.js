function elegirPerfil(perfil) {
    // Ocultar la selección de perfil
    const profileSection = document.querySelector('.profile-selection');
    profileSection.style.display = 'none';

    // Mostrar la sección de la biblioteca
    const librarySection = document.getElementById('librarySection');
    librarySection.style.display = 'block';

    // Agregar libros de ejemplo a la biblioteca (puedes personalizar esta parte)
    const bookList = document.getElementById('bookList');
    if (perfil === 'perfil1') {
        bookList.innerHTML = `
            <li>Libro 1</li>
            <li>Libro 2</li>
            <li>Libro 3</li>
        `;
    } else if (perfil === 'perfil2') {
        bookList.innerHTML = `
            <li>Libro 4</li>
            <li>Libro 5</li>
            <li>Libro 6</li>
        `;
    }
}
