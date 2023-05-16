let nombre = document.querySelector('#nombre');

function aceptarInvitacion() {
    if (nombre.value.trim() == "" || nombre.value.length < 3) {
        alert('Debes ingresar tu nombre')
    } else {
        agregarDatos(nombre.value);
        nombre.value = '';
        alert('Felicidades, Te espero el sabado 20');
    }
    nombre.focus();
}
function eliminarInvitado(id) {
    eliminarDatos(id);
    obtenerDatos();
}
function obtenerDatos() {
    db.collection("Invitados").get().then((querySnapshot) => {
        $('.tabla').html('');
        let orden = 1;
        querySnapshot.forEach((doc) => {
            $('.tabla').append(`
           <tr>
           <td class="fw-light">${orden}</td>
           <td>${doc.data().nombre}</td>
           <td >
           <i class="fa-sharp fa-solid fa-trash text-danger" id="${doc.id}" onclick="eliminarInvitado('${doc.id}')"></i>
           </td>
           </tr>
           `);
            orden++;
        });

    }).catch((error) => {
        console.error("Error obteniendo los documentos: ", error);
    });
}

obtenerDatos();