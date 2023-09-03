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
    // Agregar libros según el perfil seleccionado
    if (perfil === 'perfil1') {
        const librosPerfil1 = [
            {
                titulo: 'El hipo del tucan',
                pdfUrl: 'https://drive.google.com/file/d/1cNmpawdm3rLUtuHxxHfMG64zARposf1G/view?usp=drive_link', // Reemplaza esto con la URL correcta
                portadaUrl: 'https://mobbyt.com/media/gallery/44f11ea12f297cf0a9acfce336dca2f1/12c974f2_2021-06-07.png'
            },
            {
                titulo: 'Libro 2',
                pdfUrl: 'https://example.com/ruta_al_archivo_pdf_del_libro2.pdf' // Reemplaza esto con la URL correcta
            },
            {
                titulo: 'Libro 3',
                pdfUrl: 'https://example.com/ruta_al_archivo_pdf_del_libro3.pdf' // Reemplaza esto con la URL correcta
            }
        ];

        librosPerfil1.forEach(libro => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            
            // Agregar la imagen de la portada como enlace al PDF
            const img = document.createElement('img');
            img.src = libro.portadaUrl;
            a.appendChild(img);
            
            // Configurar el evento mouseover para mostrar el texto
            img.classList.add('book-cover'); // Agrega la clase book-cover
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
            
            // Configurar el evento mouseout para ocultar el texto
            img.addEventListener('mouseout', () => {
                const titleContainer = li.querySelector('.title-container');
                if (titleContainer) {
                    li.removeChild(titleContainer); // Elimina el elemento de texto al quitar el mouse
                }
            });
            
            a.href = libro.pdfUrl;
            a.target = '_blank'; // Abre el enlace en una nueva ventana/tabla
            
            li.appendChild(a);
            bookList.appendChild(li);
        });
        
        
    } else if (perfil === 'perfil2') {
        const librosPerfil2 = [
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

        librosPerfil2.forEach(libro => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = libro.titulo;
            a.href = libro.pdfUrl;
            a.target = '_blank'; // Abre el enlace en una nueva ventana/tabla
            li.appendChild(a);
            bookList.appendChild(li);
        });
    }
    // ... (otros perfiles)
}