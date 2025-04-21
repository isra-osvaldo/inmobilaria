// Función para dar formato al precio
const formatCLP = n => new Intl.NumberFormat('es-CL').format(n);

// Función para renderizar las propiedades 
function mostrarPropiedades(lista, containerID, cantidad = lista.length) {
    let contador = 0
    let render = ''
    const $sectionVenta = document.querySelector(containerID)

    for (const propiedad of lista) {
      if (contador >= cantidad) break
        render += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento" />
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                        <i class="fas fa-bath"></i> ${propiedad.bannios} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${formatCLP(propiedad.costo)}</p>
                    ${propiedad.smoke ? 
                        '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' 
                        : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
                    ${propiedad.pets ? 
                        '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' 
                        : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'}
                </div>
            </div>
        </div>
        `
        contador++
    }

    $sectionVenta.innerHTML = render
}

// Mostrar las propiedades en venta y alquiler en la página principal
mostrarPropiedades(propiedadesVenta, '#propiedades-venta', 3)
mostrarPropiedades(propiedadesAlquiler, '#propiedades-alquiler', 3)