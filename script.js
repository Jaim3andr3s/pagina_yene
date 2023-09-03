function elegirPerfil(perfil) {
    // Ocultar la selección de perfil
    const profileSection = document.querySelector('.profile-selection');
    profileSection.style.display = 'none';

    // Mostrar la sección de la biblioteca
    const librarySection = document.getElementById('librarySection');
    librarySection.style.display = 'block';

    // Llamar a la función para agregar libros al perfil seleccionado
    agregarLibrosAlPerfil(perfil);
}

function agregarLibrosAlPerfil(perfil) {
    // Limpiar la lista de libros actual
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    // Define los libros según el perfil seleccionado
    let libros = [];

    if (perfil === 'perfil1') {
        libros = [
            {
                titulo: 'El hipo del tucán',
                pdfUrl: 'https://drive.google.com/file/d/1cNmpawdm3rLUtuHxxHfMG64zARposf1G/view?usp=drive_link',
                portadaUrl: 'https://scontent.fctg1-4.fna.fbcdn.net/v/t1.15752-9/372380907_341745174944819_2473986692249706920_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHRdIdWz_7mRLh5rQy-eZN0rvKjomRQQbuu8qOiZFBBuymzPDrg8Geb6t1OW3wr8qpPIYiZ7OXALORNCLayrFrn&_nc_ohc=0dfq-4aTs1oAX-r5W6T&_nc_ht=scontent.fctg1-4.fna&oh=03_AdRl4qQiB4U1sGo8VrL6x6KJheGpmQ6qH5Q9g8MIItKy3Q&oe=651C812F'
            },
            {
                titulo: 'Libro 2',
                pdfUrl: 'https://example.com/ruta_al_archivo_pdf_del_libro2.pdf'
            },
            {
                titulo: 'Libro 3',
                pdfUrl: 'https://example.com/ruta_al_archivo_pdf_del_libro3.pdf'
            }
        ];
    } else if (perfil === 'perfil2') {
        libros = [
            {
                titulo: 'Libro 4',
                pdfUrl: 'ruta_al_archivo_pdf_del_libro4.pdf'
            },
            {
                titulo: 'Libro 5',
                pdfUrl: 'ruta_al_archivo_pdf_del_libro5.pdf'
            },
            {
                titulo: 'Libro 6',
                pdfUrl: 'ruta_al_archivo_pdf_del_libro6.pdf'
            }
        ];
    } else if (perfil === 'perfil3') {
        libros = [
            {
                titulo: 'Libro 7',
                pdfUrl: 'ruta_al_archivo_pdf_del_libro7.pdf'
            },
            {
                titulo: 'Libro 8',
                pdfUrl: 'ruta_al_archivo_pdf_del_libro8.pdf'
            },
            {
                titulo: 'Libro 9',
                pdfUrl: 'ruta_al_archivo_pdf_del_libro9.pdf'
            }
        ];
    }

    // Agregar libros al HTML
    libros.forEach(libro => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        // Agregar la imagen de la portada como enlace al PDF
        const img = document.createElement('img');
        img.src = libro.portadaUrl;
        img.classList.add('book-cover'); // Agrega la clase book-cover

        // Configurar el evento mouseover para mostrar el título del libro
        img.addEventListener('mouseover', () => {
            // Crear un elemento de div para contener el título del libro
            const titleContainer = document.createElement('div');
            titleContainer.classList.add('title-container');

            // Agregar el título del libro como texto
            const title = document.createElement('p');
            title.textContent = libro.titulo;
            title.classList.add('book-text');
            titleContainer.appendChild(title);

            // Agregar el elemento de texto al li
            li.appendChild(titleContainer);
        });

        // Configurar el evento mouseout para ocultar el título del libro
        img.addEventListener('mouseout', () => {
            const titleContainer = li.querySelector('.title-container');
            if (titleContainer) {
                li.removeChild(titleContainer); // Elimina el elemento de texto al quitar el mouse
            }
        });

        a.href = libro.pdfUrl;
        a.target = '_blank'; // Abre el enlace en una nueva ventana/tabla

        a.appendChild(img);
        li.appendChild(a);
        bookList.appendChild(li);
    });
}
