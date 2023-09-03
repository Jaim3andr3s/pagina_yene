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
                titulo: 'EL HIPO DEL TUCAN',
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
            
            // Contenedor principal para el libro (imagen y texto)
            const container = document.createElement('div');
            container.classList.add('book-container');
            
            // Agregar la imagen de la portada como enlace al PDF
            const img = document.createElement('img');
            img.src = libro.portadaUrl;
            a.href = libro.pdfUrl;
            a.target = '_blank'; // Abre el enlace en una nueva ventana/tabla
            
            // Contenedor para el texto del libro
            const textContainer = document.createElement('div');
            textContainer.classList.add('book-text-container');
            
            const titulo = document.createElement('p');
            titulo.textContent = libro.titulo;
            
            // Configurar el evento mouseover para mostrar el texto
            container.addEventListener('mouseover', () => {
                textContainer.style.opacity = '1'; // Muestra el texto al pasar el mouse
            });
            
            // Configurar el evento mouseout para ocultar el texto
            container.addEventListener('mouseout', () => {
                textContainer.style.opacity = '0'; // Oculta el texto al quitar el mouse
            });
            
            textContainer.appendChild(titulo);
            container.appendChild(img);
            container.appendChild(textContainer);
            a.appendChild(container);
            
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