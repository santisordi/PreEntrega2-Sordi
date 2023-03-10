const autos = [{
        marca: 'Chevrolet',
        modelo: 'Corsa',
        anio: 2010
    },
    {
        marca: 'Renault',
        modelo: 'Loga',
        anio: 2011
    },
    {
        marca: 'Honda',
        modelo: 'CRV',
        anio: 2012
    },
    {
        marca: 'Toyota',
        modelo: 'Hilux',
        anio: 2013
    },
];

function calcularCostoSeguro(edad, vehiculo) {
    let costoSeguro = 0;

    if (edad >= 18 && edad <= 25) {
        costoSeguro += 2500;
    } else if (edad >= 26 && edad <= 35) {
        costoSeguro += 2000;
    } else if (edad >= 36 && edad <= 50) {
        costoSeguro += 1500;
    } else if (edad >= 51) {
        costoSeguro += 1000;
    }

    if (vehiculo.anio >= 2010 && vehiculo.anio <= 2015) {
        costoSeguro += 1000;
    } else if (vehiculo.anio >= 2016 && vehiculo.anio <= 2020) {
        costoSeguro += 1500;
    } else if (vehiculo.anio >= 2021) {
        costoSeguro += 2000;
    }

    return costoSeguro;
}

alert('¡Bienvenido al cotizador de Seguros Online! \n Presione Enter para continuar');


let seguirCotizando = true;

while (seguirCotizando) {
    const marcaSeleccionada = prompt(`Por favor, seleccione la marca del vehículo: \n ${autos.map(auto => auto.marca).join(', ')}`);
    
    const vehiculoSeleccionado = autos.find(auto => auto.marca.toLowerCase() === marcaSeleccionada.toLowerCase());
    
    if (!vehiculoSeleccionado) {
        alert('Lo siento, no se encontró el vehículo seleccionado en la lista.');
        continue;
    }

    const edadUsuario = parseInt(prompt('Por favor, ingrese su edad:'));

        if (edadUsuario < 18 || edadUsuario > 70) {
            alert('Lo sentimos, su edad no está dentro del rango permitido para cotizar un seguro.');
            continue;
        } else {
            const costoSeguro = calcularCostoSeguro(edadUsuario, vehiculoSeleccionado);

            alert(`El costo del seguro para un ${vehiculoSeleccionado.marca} ${vehiculoSeleccionado.modelo} del año ${vehiculoSeleccionado.anio} y para una persona de ${edadUsuario} años es de $${costoSeguro}.`);

            let seleccionSeguirCotizando = prompt('¿Quiere realizar otra cotizacion? \n 1: Si - 2: No');
            if (seleccionSeguirCotizando !== '1') {
                seguirCotizando = false
                alert('Muchas gracias por su visita')
            }
        }
}